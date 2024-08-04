import {Injectable} from '@nestjs/common';
import {CreateIncomeDto} from './dto/create-income.dto';
import {UpdateIncomeDto} from './dto/update-income.dto';
import {Repository} from "typeorm";
import {Income} from "./entities/income.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class IncomesService {

    constructor(
        @InjectRepository(Income) private incomeRepository: Repository<Income>
    ) {
    }

    async create(createIncomeDto: CreateIncomeDto) {
        const newIncome = this.incomeRepository.create(createIncomeDto);
        return await this.incomeRepository.save(newIncome);
    }

    async findAll() {
        return await this.incomeRepository.find();
    }

    async findOne(id: number) {
        return await this.incomeRepository.findOne({where: {id}});
    }

    async update(id: number, updateIncomeDto: UpdateIncomeDto) {
        const income = await this.incomeRepository.findOne({where: {id}});
        if (!income) {
            throw new Error('Income not found');
        }
        return await this.incomeRepository.save({...income,...updateIncomeDto});
    }

    remove(id: number) {
        return this.incomeRepository.delete({id});
    }
}
