import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new CreateCategoryService();
    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
