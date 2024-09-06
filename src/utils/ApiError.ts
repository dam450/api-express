import type { NextFunction, Request, Response } from "express";

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
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
