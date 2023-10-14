import { readFile, writeFile } from 'node:fs/promises';
import { Message, Messages } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id] as Message;
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages as Messages | null;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 1000) + 1;
    messages[id] = {
      id,
      content: message,
    };
    await writeFile('messages.json', JSON.stringify(messages));

    return messages[id] as Message;
  }
}
