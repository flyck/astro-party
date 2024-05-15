import { Tasks, and, db, eq } from "astro:db";
import type { APIRoute } from "astro";
import * as z from "zod";
import { ToastError, toastResponse } from "./../../../utils/toast";
import {
  getPartyIdOrThrowToast,
  validateFormOrThrowToast,
} from "./../../../utils/utils";

export const inputSchema = z.object({
  id: z.string().transform((p) => parseInt(p)),
  title: z.string().min(1, "cannot be empty").max(100, "too long"),
  description: z.string().max(100, "too long"),
  status: z.string().max(100),
  assignee: z.string().transform((p) => (p.length > 0 ? parseInt(p) : null)),
});

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const partyId = getPartyIdOrThrowToast(request);
    const parsedInput = await validateFormOrThrowToast(request, inputSchema);

    console.info("Updating task: " + JSON.stringify(parsedInput));

    // TODO: check if participant id exists

    const insertResult = await db
      .update(Tasks)
      .set({ ...parsedInput })
      .where(and(eq(Tasks.partyId, partyId), eq(Tasks.id, parsedInput.id)));

    console.info("Insert result: " + JSON.stringify(insertResult));

    return new Response(JSON.stringify({ message: "Task created" }), {
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
