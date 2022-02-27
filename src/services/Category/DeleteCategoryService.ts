import { getRepository } from "typeorm";
import { Category } from '../../entities/Category'

type CategoryRequest = {
  id: string;
};

export class DeleteCategoryService {
  async execute({ id }: CategoryRequest): Promise<void | Error> {
    const repo = getRepository(Category);

    try {
      await repo.findOne(id);
      await repo.delete({ id });
    } catch (error) {
      return new Error("This category does not exists ");
    }

  }
}
