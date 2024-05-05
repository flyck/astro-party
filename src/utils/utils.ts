import type { ZodObject, ZodRawShape, ZodSchema } from "zod";
import { ToastError } from "./toast";

export function getPartyIdOrThrowToast(request: Request) {
  const url = new URL(request.headers.get("Hx-Current-Url") || "");
  const id = url.pathname.split("/")[1] || "";

  if (!id) {
    throw new ToastError("danger", "Bad request", 400);
  }
  return id;
}

export async function validateFormOrThrowToast<T extends ZodRawShape>(
  request: Request,
  schema: ZodObject<T>,
) {
  const data = await request.formData();
  const inputJson: { [key: string]: unknown } = {};
  data.forEach((value, key: string) => {
    inputJson[key] = value;
  });

  const parsedInput = schema.safeParse(inputJson);

  console.info("Input correct: " + parsedInput.success);

  if (!parsedInput.success) {
    console.log("Reason: " + JSON.stringify(parsedInput.error));
    throw new ToastError("warning", "Bad inputs", 400);
  }

  return parsedInput.data;
}
