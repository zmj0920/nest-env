import { Injectable } from '@nestjs/common';
import { ImagetType } from '../entities/Imagetype.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Company } from '../../entities/company.entity';

@Injectable()
export class ImagetTypeService {

    constructor(@InjectRepository(ImagetType)
    private readonly imagetTypeRepository: Repository<ImagetType>) { }
    root(): string {
        return 'Hello World!';
    }
    async create(): Promise<string> {
        const imagetType = new ImagetType();
        // const company = new Company();
        // company.name = 'asc';
        // employee.name = 'novak';
        // employee.age = 20;
        // employee.address = 'shanghai';
        // employee.company = company;

        return this.imagetTypeRepository.save(imagetType)
            .then(res => {
                return 'create employee ...done';
            })
            .catch(err => {
                return err;
            });
    }

    async find(): Promise<ImagetType[]> {
        // return await this.employeeRepository.findOne({ name });
        return this.imagetTypeRepository.find();
    }




    
    async findOne(id: number): Promise<ImagetType> {
        // return await this.employeeRepository.findOne({ name });
        return   this.imagetTypeRepository.findOne({id});
    }
}
