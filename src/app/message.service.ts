import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  getMessages(): string[]{
    return this.messages;
  }

  addMessage(message): void{
    this.messages.push(message);
  }

  deleteMessage(index): void{
    this.messages.splice(index, 1);
  }
}
