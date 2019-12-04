import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { IMG } from '../entities/img.entity';

@Module({
    imports: [TypeOrmModule.forFeature([IMG])],
    providers: [ImgService],
    controllers: [ImgController],
})
export class IMGModule {}
