import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IncomeTypeEnum} from "../../../common/enums/incomeType.enum";

@Entity()
export class Income {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "enum", enum: IncomeTypeEnum, nullable: false})
    type: string;

    @Column({ type: 'int'})
    amount: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
