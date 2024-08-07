import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: 'income' | 'expense';

    @Column()
    category: string;

    @Column('decimal')
    amount: number;

    @Column()
    currency: string;

    @Column({ default: false })
    recurring: boolean;

    @Column({ nullable: true })
    recurringDate: string;

    @Column('date', { default: () => 'CURRENT_DATE' })
    createdAt: Date;

    @Column('date', { default: () => 'CURRENT_DATE' })
    updatedAt: Date;
}
