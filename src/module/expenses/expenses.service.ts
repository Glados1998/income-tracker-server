import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import {Expense} from "./entities/expense.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ExpensesService {

  constructor(
      @InjectRepository(Expense) private expenseRepository: Repository<Expense>
  ) {
  }

  async create(createExpenseDto: CreateExpenseDto) {
    const newExpense = this.expenseRepository.create(createExpenseDto);
    return await this.expenseRepository.save(newExpense);
  }

  async findAll() {
    return await this.expenseRepository.find();
  }

  async findOne(id: number) {
    return await this.expenseRepository.findOne({where: {id}});
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.expenseRepository.findOne({where: {id}});
    if (!expense) {
      throw new Error('Expense not found');
    }
    return await this.expenseRepository.save({...expense,...updateExpenseDto});
  }

  async remove(id: number) {
    return this.expenseRepository.delete({id});
  }
}
