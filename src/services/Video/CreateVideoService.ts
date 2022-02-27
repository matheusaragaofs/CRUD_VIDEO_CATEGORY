import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

type CategoryRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

type VideoSerialized = Omit<Video, "id" | "created_at">;

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: CategoryRequest): Promise<VideoSerialized | Error> {
    const repo = getRepository<VideoSerialized>(Video);

    if (await repo.findOne({ name })) {
      return new Error("Video already exists");
    }
    try {
      const video = repo.create({
        name,
        description,
        duration,
        category_id,
      });
      await repo.save(video);
      return video;
    } catch (error) {
      return new Error("DEU  ERRO AI");
    }
  }
}
