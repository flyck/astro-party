import * as z from 'zod';
import { db, Parties } from 'astro:db';
import { customAlphabet } from 'nanoid';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';


export const POST: APIRoute = async ({ params, request }) => {
  // "beautiful" ids without special characters
  const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8)

  const inputSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    location: z.string().max(100),
    date: z.string().max(100)
  });

  try {
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    const newParty = { ...parsedInput, id: nanoid() }

    console.log("Inserting party: " + JSON.stringify(newParty))
    const insertResult = await db.insert(Parties).values([
      newParty
    ]).returning()

    console.log("Insert result: " + JSON.stringify(insertResult))

    const partyId = insertResult[0].id

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": `/${partyId}/details`,
      },
    })
  } catch (error) {
    if (error instanceof ToastError) {
      return toastResponse(error)
    }
    return toastResponse(new ToastError("danger", "Something went wrong. :(", 500))
  }
}
