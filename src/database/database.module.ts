import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('POSTGRES_HOST'),
                port: config.get('POSTGRES_PORT'),
                username: config.get('POSTGRES_USER'),
                password: config.get('POSTGRES_PASSWORD'),
                database: config.get('POSTGRES_DB'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: true,
            }),
        }),
    ],
})
export class DatabaseModule {}
