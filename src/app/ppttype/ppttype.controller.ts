import { Get, Controller, Post, Response, Param, HttpStatus, Request , Body } from '@nestjs/common';
import { PPTTypeService } from './ppttype.service';
import { PPTType } from '../entities/ppttype.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('PPT类型')
@Controller('ppttype')
export class PPTTypeController {
    constructor(private readonly pptypeService: PPTTypeService) {}

    @Get()
    root(): string {
        return this.pptypeService.root();
    }

    @Get('findOne/:name')
    async findOne(@Param() params): Promise<PPTType> {
        const result = await this.pptypeService.findOne(params.name);
        return result;
    }

   @Get('find')
   async find(): Promise<PPTType[]> {
       return await this.pptypeService.find();
   }

    @Get('create')
    async create(ppttypes: PPTType): Promise<string> {
        return this.pptypeService.create(ppttypes);
    }
    @Get('edit')
    async edit(@Param() params): Promise<any> {
         return this.pptypeService.edit(params);
    }
}
