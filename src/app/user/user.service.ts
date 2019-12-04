import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Company } from '../../entities/company.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }
    root(): string {
        return 'Hello World!';
    }
    async create(): Promise<string> {
        const employee = new User();
        return this.userRepository.save(employee)
            .then(res => {
                return 'create employee ...done';
            })
            .catch(err => {
                return err;
            });
    }

    async find(): Promise<User[]> {
        // return await this.employeeRepository.findOne({ name });
        return this.userRepository.find();
    }
    async findOne(name: string): Promise<User> {
        // return await this.employeeRepository.findOne({ name });
        return   this.userRepository.findOne({name});
    }
}
