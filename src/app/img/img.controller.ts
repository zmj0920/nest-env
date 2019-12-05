import {
    Get,
    Controller,
    Post,
    Response,
    Param,
    HttpStatus,
    Request,
    UseGuards,
    UseInterceptors,
    UploadedFile,
    HttpException,
    Body,
    ClassSerializerInterceptor,
} from '@nestjs/common';
import { ImgService } from './img.service';
import { IMG } from '../entities/img.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('图片')
@Controller('img')
export class ImgController {
    img1: any;
    imgurl: any;
    constructor(private readonly imgService: ImgService) { }
    @Get('findOne/:name')
    async findOne(@Param() params): Promise<IMG> {
        const result = await this.imgService.findOne(params.name);
        return result;
    }
    @Get('find')
    async find(): Promise<IMG | IMG[]> {
        return await this.imgService.find();
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor('file', {
        fileFilter(req, file, callback) {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                callback(null, true);
            } else {
                callback(
                    new HttpException(
                        `Unsupported file type ${file.originalname}`,
                        HttpStatus.BAD_REQUEST,
                    ),
                    false,
                );
            }
        },
        storage: multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, 'public/imgs/');
            },
            filename: (req, file, callback) => {
                callback(
                    null, Date.now() + Math.random() + extname(file.originalname),
                );
            },
        }),
    }))

    async uploade(@UploadedFile() file) {
        if (!file) {
            throw new HttpException('请选择有效附件', HttpStatus.NOT_FOUND);
        } else {
            this.img1 = file.filename;
            this.imgurl = file.path;
        }
        // return file;
    }
    @Post('create')
    public async create(@Body() body): Promise<any> {
        // console.log(body)
        const img = new IMG();
        img.count = 0;
        img.imagetType = body.imagetTypeid;
        img.imgname = body.imgname;
        img.img1 = this.img1;
        img.imgurl = this.imgurl;
        // tslint:disable-next-line:no-console
        console.log(img);
        return await this.imgService.create(img);
    }
}
