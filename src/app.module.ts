
import { Module } from '@nestjs/common';
import { MailModule } from './mailer/mail.module';
import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [
    MailModule
  ],
})
export class AppModule {}
