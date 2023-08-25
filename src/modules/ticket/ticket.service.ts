import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { faker } from '@faker-js/faker';
import { AddressDTO } from 'src/shared/dtos/address.dto';
import { State } from 'src/shared/enums/states.enum';
import { ClientDTO } from 'src/shared/dtos/client.dto';
import { SectionDTO } from 'src/shared/dtos/section.dto';
import { TypeSection } from 'src/shared/enums/typeOfSection.enum';
import { MovieDTO } from 'src/shared/dtos/movie.dto';
import { TypeOfMovie } from 'src/shared/enums/typeOfMovie.enum';
import { ClassificationMovie } from 'src/shared/enums/classificationMovie.enum';
import { ListOfCompanies } from 'src/shared/enums/litstOfCompanies.enum';
import { TicketDTO } from 'src/shared/dtos/ticket.dto';
import { StatusOfTicket } from 'src/shared/enums/statusOfTicket.enum';
@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  @Cron('* * * * * *')
  execute(): void {
    const ticket = this.createFakeTicket();

    this.sendMessageToKafka(ticket);
  }

  createFakeTicket(): TicketDTO {
    const movie = new MovieDTO({
      name: faker.person.firstName(),
      author: faker.person.firstName(),
      year: faker.date.past().getFullYear().toString(),
      company:
        ListOfCompanies[
          Math.random().toPrecision(Object.keys(ListOfCompanies).length - 1)
        ],

      resume: faker.lorem.sentence(),
      movieCast: [faker.lorem.word(), faker.lorem.word()],
      typeOfMovie: [
        TypeOfMovie[
          Math.random().toPrecision(Object.keys(TypeOfMovie).length - 1)
        ],
        TypeOfMovie[
          Math.random().toPrecision(Object.keys(TypeOfMovie).length - 1)
        ],
      ],
      classificationMovie:
        ClassificationMovie[
          Math.random().toPrecision(Object.keys(ClassificationMovie).length - 1)
        ],
    });

    const address = new AddressDTO({
      city: faker.location.city(),
      number: faker.location.street(),
      state: State[Math.random().toPrecision(Object.keys(State).length - 1)],
      typeLocal: faker.location.ordinalDirection(),
    });

    const ticket = new TicketDTO();

    ticket.id = faker.string.uuid();

    ticket.section = new SectionDTO({
      codeSection: faker.lorem.word(),
      quantityOfArmChair: Math.random(),
      dateOfSection: faker.date.past().toString(),
      localOfSection: faker.location.street(),
      state: State[Math.random().toPrecision(Object.keys(State).length - 1)],
      movie: movie,
      isPreLaunch: faker.datatype.boolean(),
      typeSection:
        TypeSection[
          Math.random().toPrecision(Object.keys(TypeSection).length - 1)
        ],
    });

    ticket.client = new ClientDTO({
      name: faker.person.firstName(),
      address: address,
      age: faker.number.int().toString(),
      cep: faker.location.zipCode(),
      email: faker.internet.email(),
      phones: [
        faker.phone.number().toString(),
        faker.phone.number().toString(),
      ],
    });

    ticket.dateOfTicketGenerated = faker.date.past();

    ticket.statusOfTicket =
      StatusOfTicket[
        Number.parseInt(
          Math.random().toPrecision(Object.keys(StatusOfTicket).length - 1),
        )
      ];

    ticket.listOfCompanies =
      ListOfCompanies[
        Math.random().toPrecision(Object.keys(ListOfCompanies).length - 1)
      ];

    return ticket;
  }

  sendMessageToKafka(ticket: TicketDTO): void {
    this.logger.debug(ticket);
  }
}
