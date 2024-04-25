import * as z from 'zod';
import { db, Participants } from 'astro:db';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
  const inputSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().max(100),
  });

  try {
    const id = getPartyIdOrThrowToast(request)
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    const newParticipant = { ...parsedInput, partyId: id, invitation_sent: false }
    console.info("Creating new participant: " + JSON.stringify(newParticipant))

    const insertResult = await db.insert(Participants).values(
      [newParticipant]
    )

    console.info("Insert result: " + JSON.stringify(insertResult))

    return new Response(JSON.stringify({ message: "participant created" }), {
      status: 200,
      headers: {
        "hx-redirect": `participants`,
      },
    })
  } catch (error) {
    if (error instanceof ToastError) {
      return toastResponse(error)
    }
    return toastResponse(new ToastError("danger", "Something went wrong. :(", 500))
  }
}
