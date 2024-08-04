import {Column, PrimaryGeneratedColumn} from "typeorm";

export class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    description: string;

    @Column({type: 'float'})
    amount: number;

    @Column({type: 'enum', enumName: 'ExpenseType'})
    type: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}
