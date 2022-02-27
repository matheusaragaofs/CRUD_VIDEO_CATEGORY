import { getRepository } from "typeorm";
import { Video } from '../../entities/Video'

export class GetAllVideoService {
  async execute(): Promise<Video[] | Error> {
    const repo = getRepository(Video);

    const video = repo.find({
      relations:['category']
    });

    return video;
  }
}
