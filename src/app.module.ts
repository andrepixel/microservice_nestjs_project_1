import { Module } from '@nestjs/common';
import { TicketModule } from './modules/ticket/ticket.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), TicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
