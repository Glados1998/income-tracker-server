import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ExpensesTypeEnum} from "../../../common/enums/expensesType.enum";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "enum", enum: ExpensesTypeEnum, nullable: false})
    type: string;

    @Column({ type: 'int'})
    amount: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
