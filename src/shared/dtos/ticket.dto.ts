import { ClientDTO } from './client.dto';
import { SectionDTO } from './section.dto';

export class TicketDTO {
  id: string;
  section: SectionDTO;
  client: ClientDTO;
  dateOfTicketGenerated: Date;
  statusOfTicket: string;
  listOfCompanies: string;

  toString(): string {
    return JSON.stringify(this);
  }
}
