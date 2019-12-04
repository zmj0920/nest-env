import { Injectable } from '@nestjs/common';
import { IMG } from '../entities/img.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ImgService {
    constructor(@InjectRepository(IMG)
    private readonly imgRepository: Repository<IMG>) { }
    

    public async create(data: IMG): Promise<IMG | IMG[]> {
        return await this.imgRepository.save(
          await this.imgRepository.create(data)
        );
      }

      
    async find(): Promise<IMG|IMG[]> {
        return await this.imgRepository.find();
    }

    async findOne(imgname: string): Promise<IMG> {
        return   await this.imgRepository.findOne({imgname});
    }
}
