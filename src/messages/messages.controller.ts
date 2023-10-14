import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private service: MessagesService) {}
  @Get()
  getAllMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.service.findOne(id);

    if (!message) {
      throw new NotFoundException(`message with id ${id} not found`);
    }

    return message;
  }
}
