import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {IncomesModule} from "./module/incomes/incomes.module";
import {DatabaseModule} from "./database/database.module";
import {ExpensesModule} from "./module/expenses/expenses.module";

@Module({
    imports: [DatabaseModule, IncomesModule, ExpensesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
