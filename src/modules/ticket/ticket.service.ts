import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { faker } from '@faker-js/faker';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  @Cron('* * * * * *')
  execute(): void {
    let ticket = createFakeTicket();

    sendMessageToKafka(ticket);
  }
}

function createFakeTicket(): TicketDTO {
  let ticket = new TicketDTO();

  return ticket;
}

function sendMessageToKafka(ticket: TicketDTO): void {
  throw new Error('Function not implemented.');
}

