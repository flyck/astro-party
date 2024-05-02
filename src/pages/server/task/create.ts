import * as z from 'zod';
import { db, Tasks } from 'astro:db';
import { toastResponse, ToastError } from "./../../../utils/toast"
import { getPartyIdOrThrowToast, validateFormOrThrowToast } from "./../../../utils/utils"
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {

  const inputSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    assignee: z.string().transform(p => p.length > 0 ? parseInt(p) : null)
  });

  try {
    const id = getPartyIdOrThrowToast(request)
    const parsedInput = await validateFormOrThrowToast(request, inputSchema)

    const newTask = { ...parsedInput, partyId: id, status: "TODO" }
    console.info("Creating new task: " + JSON.stringify(newTask))

    const insertResult = await db.insert(Tasks).values(
      [newTask]
    )

    console.info("Insert result: " + JSON.stringify(insertResult))

    return new Response(JSON.stringify({ message: "Task created" }), {
      status: 200,
      headers: {
        "hx-redirect": `tasks`,
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
