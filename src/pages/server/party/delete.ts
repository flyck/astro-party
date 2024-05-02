import { db, eq, Parties, Participants, Tasks } from "astro:db";
import { toastResponse, ToastError } from "./../../../utils/toast";
import { getPartyIdOrThrowToast } from "./../../../utils/utils";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const id = getPartyIdOrThrowToast(request);

    console.info("Deleting party...");

    // TODO switch to SQL cascading delete once it is available
    await db.delete(Tasks).where(eq(Tasks.partyId, id));
    await db.delete(Participants).where(eq(Participants.partyId, id));
    const partyDeletionResult = await db
      .delete(Parties)
      .where(eq(Parties.id, id))
      .returning();

    console.info("Party deleted: " + JSON.stringify(partyDeletionResult));

    if (partyDeletionResult[0].id != id) {
      // TODO should be 404, but toast is not showing for 404s
      throw new ToastError("warning", "Party not found", 400);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": `/`,
      },
    });
  } catch (error) {
    if (error instanceof ToastError) {
      return toastResponse(error);
    }
    return toastResponse(
      new ToastError("danger", "Something went wrong. :(", 500),
    );
  }
};
