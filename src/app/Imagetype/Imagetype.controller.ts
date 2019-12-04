import { Get, Controller, Post, Response, Param, HttpStatus, Request  } from '@nestjs/common';
import { ImagetTypeService } from './imagetype.service';
import { ImagetType } from '../entities/Imagetype.entity';

@Controller('imagetType')
export class ImagetTypeController {
    constructor(private readonly imagetTypeService: ImagetTypeService) {}

    @Get()
    root(): string {
        // tslint:disable-next-line:no-console
        console.log(123);
        return this.imagetTypeService.root();
    }

    @Get('findOne/:name')
    async findOne(@Param() params): Promise<ImagetType> {
        // tslint:disable-next-line:no-console
        console.log(params.name);
        // tslint:disable-next-line:prefer-const
        let result = await this.imagetTypeService.findOne(params.name);
        // tslint:disable-next-line:no-console
        console.log(result);
        return result;
    }

   @Get('find')
   async find(): Promise<ImagetType[]> {
       return await this.imagetTypeService.find();
   }

    @Get('create')
    async create(): Promise<string> {
        // tslint:disable-next-line:no-console
        console.log('1323');
        return this.imagetTypeService.create();
    }
}
