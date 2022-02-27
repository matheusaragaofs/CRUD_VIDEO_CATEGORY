import { Request, Response } from "express";
import {  GetAllVideoService} from "../../services/Video/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideoService();
    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
