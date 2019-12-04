import { Injectable } from '@nestjs/common';
import { PPT } from '../entities/ppt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Company } from '../../entities/company.entity';

@Injectable()
export class PPTService {

    constructor(@InjectRepository(PPT)
    private readonly pptRepository: Repository<PPT>) { }
    root(): string {
        return 'Hello World!';
    }
    async create(): Promise<string> {
        const ppt = new PPT();
        // const company = new Company();
        // company.name = 'asc';
        // employee.name = 'novak';
        // employee.age = 20;
        // employee.address = 'shanghai';
        // employee.company = company;

        return this.pptRepository.save(ppt)
            .then(res => {
                return 'create employee ...done';
            })
            .catch(err => {
                return err;
            });
    }

    async find(): Promise<PPT[]> {
      
        return  this.pptRepository.find();
    }




    
    async findOne(id: number): Promise<PPT> {
        // return await this.employeeRepository.findOne({ name });
        return   this.pptRepository.findOne({id});
    }
}
