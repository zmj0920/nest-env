import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PPTController } from './ppt.controller';
import { PPTService } from './ppt.service';
import { PPT } from '../entities/ppt.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PPT])],
    providers: [PPTService],
    controllers: [PPTController],
})
export class PPTModule {}
