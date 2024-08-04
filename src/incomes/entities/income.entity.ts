import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Income {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 50})
    description: string;

    @Column({type: 'float'})
    amount: number;

    @Column({type: 'enum', enumName: 'IncomeType'})
    type: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}
