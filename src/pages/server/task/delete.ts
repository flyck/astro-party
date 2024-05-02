import { Tasks, and, db, eq } from "astro:db";
import type { APIRoute } from "astro";
import * as z from "zod";
import { ToastError, toastResponse } from "./../../../utils/toast";
import {
  getPartyIdOrThrowToast,
  validateFormOrThrowToast,
} from "./../../../utils/utils";

export const POST: APIRoute = async ({ params, request }) => {
  const inputSchema = z.object({
    id: z.string().transform((p) => parseInt(p)),
  });

  try {
    const partyId = getPartyIdOrThrowToast(request);
    const parsedInput = await validateFormOrThrowToast(request, inputSchema);

    const id = parsedInput.id;

    console.info("Deleting task...");

    const taskDeletionResult = await db
      .delete(Tasks)
      .where(and(eq(Tasks.partyId, partyId), eq(Tasks.id, id)));

    console.info("Task deleted: " + JSON.stringify(taskDeletionResult));

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "hx-redirect": "tasks",
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ToastError) {
      return toastResponse(error);
    }
    return toastResponse(
      new ToastError("danger", "Something went wrong. :(", 500),
    );
  }
};
