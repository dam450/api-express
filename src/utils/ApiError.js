export class ApiError extends Error {
  statusCode;

  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

export class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
}

export const errorMiddleware = (error, request, response, next) => {
  if (error instanceof ApiError) {
    const { statusCode, message } = error;
    return response.status(statusCode).json({
      status: "error",
      message: message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
