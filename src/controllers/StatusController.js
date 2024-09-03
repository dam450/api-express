import { BadRequestError } from "../utils/ApiError.js";

export class StatusController {
  async index(req, res) {
    const { err } = req.query;

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
