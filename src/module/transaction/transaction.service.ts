import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Transaction} from "./entities/transaction.entity";

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private transactionRepository: Repository<Transaction>,
    ) {
    }

    create(transaction: Partial<Transaction>): Promise<Transaction> {
        const newTransaction = this.transactionRepository.create(transaction);
        return this.transactionRepository.save(newTransaction);
    }

    findAll(): Promise<Transaction[]> {
        return this.transactionRepository.find();
    }

    findOne(id: number): Promise<Transaction | null> {
        return this.transactionRepository.findOne({where: {id}});
    }

    async update(id: number, transaction: Partial<Transaction>): Promise<Transaction | null> {
        await this.transactionRepository.update(id, transaction);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.transactionRepository.delete(id);
    }
}
