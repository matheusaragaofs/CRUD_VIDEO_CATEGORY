import { getRepository } from "typeorm";
import { Category } from '../../entities/Category'

type CategoryRequest = {
  id: string;
  name?: string;
  description: string;
};

type CategorySerialized = Pick<Category, "name" | "description">;

export class UpdateCatergoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryRequest): Promise<CategorySerialized | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("Category does not exist");
    }

    await repo.update(
      { id },
      {
        name: name ? name : category.name,
        description: description ? description : category.description,
      }
    );
  }
}
