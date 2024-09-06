import type { Request, Response } from "express";
import { BadRequestError } from "../utils/ApiError";

export class StatusController {
  async index(req: Request, res: Response) {
    const { err } = req.query as Record<string, string>;

    if (err) {
      throw new BadRequestError(err);
    }

    return res.json({
      message: "Server is running!",
      time: Intl.DateTimeFormat("pt-br", {
        dateStyle: "short",
        timeStyle: "long",
      }).format(new Date()),
    });
  }
}
