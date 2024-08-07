import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from "./database/database.module";
import {AuthModule} from "./module/auth/auth.module";
import {TransactionModule} from "./module/transaction/transaction.module";

@Module({
    imports: [DatabaseModule, AuthModule, TransactionModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
