type ToastType = "warning" | "info" | "success" | "danger";

export class ToastError extends Error {
  public level: ToastType;
  public statusCode: number;

  constructor(level: ToastType, message: string, statusCode = 200) {
    super(message);
    this.level = level;
    this.statusCode = statusCode;
  }
}

export function createToast(level: ToastType, message: string) {
  return {
    makeToast: {
      level,
      message,
    },
  };
}

export function toastResponse(error: ToastError) {
  const { level, message, statusCode } = error;
  const toastPayload = createToast(level, message);

  console.info(
    `Toast Error response (status ${statusCode}, level ${level}: ${message})`,
  );

  return new Response(null, {
    status: statusCode,
    headers: {
      "hx-trigger": JSON.stringify(toastPayload),
      "hx-reswap": "none",
    },
  });
}
