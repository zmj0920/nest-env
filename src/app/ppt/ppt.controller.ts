import { Get, Controller, Post, Response, Param, HttpStatus, Request, Body, UploadedFiles, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PPTService } from './ppt.service';
import { PPT } from '../entities/ppt.entity';
import { join } from 'path';
import {FileFieldsInterceptor, FileInterceptor} from '@nestjs/platform-express';
@Controller('ppt')
export class PPTController {
    constructor(private readonly pptService: PPTService) { }

    @Get()
    root(): string {
        return this.pptService.root();
    }

    @Get('findOne/:name')
    async findOne(@Param() params): Promise<PPT> {
        // tslint:disable-next-line:no-console
        console.log(params.name);
        // tslint:disable-next-line:prefer-const
        let result = await this.pptService.findOne(params.name);
        // tslint:disable-next-line:no-console
        console.log(result);
        return result;
    }

    @Get('find')
    async find(): Promise<PPT[]> {
        return await this.pptService.find();
    }

    @Get('create')
    async create(): Promise<string> {
        // tslint:disable-next-line:no-console
        console.log('1323');
        return this.pptService.create();
    }
    @Post('upload')
    @UseInterceptors(FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]))
    uploadFile(@UploadedFiles() files) {
      // tslint:disable-next-line:no-console
      console.log(files);
    }
}
