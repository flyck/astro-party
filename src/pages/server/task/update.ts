import * as z from 'zod';
import { db, Tasks, and, eq } from 'astro:db';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {

  const inputSchema = z.object({
    id: z.string().transform(p => parseInt(p)),
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    status: z.string().max(100),
  });

  try {
    const partyId = getPartyIdOrThrowToast(request)
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    console.info("Updating task: " + JSON.stringify(parsedInput))

    const insertResult = await db.update(Tasks).set(
      { ...parsedInput }
    ).where(and(eq(Tasks.partyId, partyId), eq(Tasks.id, parsedInput.id)))

    console.info("Insert result: " + JSON.stringify(insertResult))

    return new Response(JSON.stringify({ message: "Task created" }), {
      status: 200,
      headers: {
        "hx-redirect": `tasks`,
      },
    })
  } catch (error) {
    if (error instanceof ToastError) {
      return toastResponse(error)
    }
    return toastResponse(new ToastError("danger", "Something went wrong. :(", 500))
  }
}
