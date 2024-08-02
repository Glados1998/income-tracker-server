import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomesModule } from './incomes/incomes.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [IncomesModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
