import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PPTTypeController } from './ppttype.controller';
import { PPTTypeService } from './ppttype.service';
import { PPTType } from '../entities/ppttype.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PPTType])],
    providers: [PPTTypeService],
    controllers: [PPTTypeController],
})
export class PPTTypeModule {}
