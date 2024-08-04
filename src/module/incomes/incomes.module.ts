import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';
import {Income} from "./entities/income.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomesController],
  providers: [IncomesService],
})
export class IncomesModule {}
