import * as z from 'zod';
import { db, eq, and, Participants } from 'astro:db';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
  const inputSchema = z.object({
    id: z.string().transform(p => parseInt(p)),
    name: z.string().min(1).max(100),
    email: z.string().max(100),
  });

  try {
    const partyId = getPartyIdOrThrowToast(request)
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    const updateResult = await db.update(Participants).set(
      { ...parsedInput }
    ).where(and(eq(Participants.partyId, partyId), eq(Participants.id, parsedInput.id)))

    console.log(updateResult)

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": `participants`,
      },
    })
  } catch (error) {
    console.log(error)
    if (error instanceof ToastError) {
      return toastResponse(error)
    }
    return toastResponse(new ToastError("danger", "Something went wrong. :(", 500))
  }
}
