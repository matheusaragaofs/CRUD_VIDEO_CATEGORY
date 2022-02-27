import { getRepository } from "typeorm";
import { Category } from '../../entities/Category'

export class CreateCategoryService {
  async execute(): Promise<Category[] | Error> {
    const repo = getRepository(Category);

    // const categories = repo.query("SELECT * FROM CATEGORIES");
    const categories = repo.find();

    return categories;
  }
}
