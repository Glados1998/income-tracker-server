import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {IncomesModule} from "./module/incomes/incomes.module";
import {DatabaseModule} from "./database/database.module";
import {ExpensesModule} from "./module/expenses/expenses.module";
import {AuthModule} from "./module/auth/auth.module";

@Module({
    imports: [DatabaseModule, IncomesModule, ExpensesModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
