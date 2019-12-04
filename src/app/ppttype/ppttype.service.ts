import { Injectable } from '@nestjs/common';
import { PPTType } from '../entities/ppttype.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
@Injectable()
export class PPTTypeService {

    constructor(@InjectRepository(PPTType)
    private readonly ppttypeRepository: Repository<PPTType>) { }
    root(): string {
        return 'Hello World!';
    }

    // 插入
    async create(ppttypes: PPTType): Promise<string> {
        return this.ppttypeRepository.save(ppttypes)
            .then(res => {
                return 'create ppttype ...done';
            })
            .catch(err => {
                return err;
            });
    }
    // 查询全部
    async find(): Promise<PPTType[]> {

        return await this.ppttypeRepository.find();
    }
    // 按条件查询
    async findOne(ppttype: string): Promise<PPTType> {
        return await this.ppttypeRepository.findOne({ ppttype });
    }
    // 编辑
    async edit(id: number): Promise<string> {
        const ppttype = await this.ppttypeRepository.findOne({ id });
        if (ppttype) {
            const connection = getConnection();
            const queryRunner = connection.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            try {
                await queryRunner.manager.update<PPTType>(PPTType, { id }, { ppttype: '' });
                await queryRunner.commitTransaction();
                return 'transaction done';
            } catch (err) {
                await queryRunner.rollbackTransaction();
                return 'transaction failed';
            }
        } else {
            return 'employee not found';
        }
    }
         // 刪除
    delOneById(id: number) {
        return this.ppttypeRepository.delete(id);
    }
      // 修改
    updateOneById(id: number, ppttype: PPTType) {
        ppttype = Object.setPrototypeOf(ppttype, {});
        return this.ppttypeRepository.update(id, ppttype);
      }
}
