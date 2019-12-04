import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagetTypeController } from './Imagetype.controller';
import { ImagetTypeService } from './Imagetype.service';
import { ImagetType } from '../entities/Imagetype.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ImagetType])],
    providers: [ImagetTypeService],
    controllers: [ImagetTypeController],
})
export class ImagetTypeModule {}
