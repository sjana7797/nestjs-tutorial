import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private repository: MessagesRepository) {}

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  findAll() {
    return this.repository.findAll();
  }

  create(message: string) {
    return this.repository.create(message);
  }
}
