import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  create(createExpenseDto: CreateExpenseDto) {
    return
  }

  findAll() {
    return
  }

  findOne(id: number) {
    return
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return
  }

  remove(id: number) {
    return
  }
}
