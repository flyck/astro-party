import { Parties, db, eq } from "astro:db";
import type { APIRoute } from "astro";
import * as z from "zod";
import { ToastError, toastResponse } from "./../../../utils/toast";
import {
  getPartyIdOrThrowToast,
  validateFormOrThrowToast,
} from "./../../../utils/utils";

export const POST: APIRoute = async ({ params, request }) => {
  const inputSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(100),
    location: z.string().max(100),
    date: z.string().max(100),
  });

  try {
    const id = getPartyIdOrThrowToast(request);
    const parsedInput = await validateFormOrThrowToast(request, inputSchema);

    const party = await db
      .update(Parties)
      .set({ ...parsedInput })
      .where(eq(Parties.id, id));

    console.log(party);

    return new Response(undefined, { status: 200 });
  } catch (error) {
    if (error instanceof ToastError) {
      return toastResponse(error);
    }
    return toastResponse(new ToastError("danger", "Something went wrong. :("));
  }
};
