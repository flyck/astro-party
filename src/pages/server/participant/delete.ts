import * as z from 'zod';
import { db, eq, and, Participants } from 'astro:db';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
  const inputSchema = z.object({
    id: z.string().transform(p => parseInt(p)),
  });

  try {
    const partyId = getPartyIdOrThrowToast(request)
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    const id = parsedInput.id

    console.info("Deleting participant...")

    const participantDeletionResult = await db.delete(Participants).where(
      and(eq(Participants.partyId, partyId), eq(Participants.id, id))
    )

    console.info("Participant deleted: " + JSON.stringify(participantDeletionResult))

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
    return toastResponse(new ToastError("error", "Something went wrong. :(", 500))
  }
}
