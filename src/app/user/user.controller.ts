import { Get, Controller, Post, Response, Param, HttpStatus, Request, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { ApiTags, ApiHeader, ApiCreatedResponse } from '@nestjs/swagger';

@ApiHeader({
    name: 'Authorization',
    description: 'Auth token',
  })
@ApiTags('用户')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    root(): string {
        // tslint:disable-next-line:no-console
        console.log(123);
        return this.userService.root();
    }

    @Get('findOne/:name')
    async findOne(@Param() params): Promise<User> {
        // tslint:disable-next-line:no-console
        console.log(params.name);
        // tslint:disable-next-line:prefer-const
        let result = await this.userService.findOne(params.name);
        // tslint:disable-next-line:no-console
        console.log(result);
        return result;
    }

    @Get('find')
    async find(): Promise<User[]> {
        return await this.userService.find();
    }

    @Get('create')
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: User,
      })
    async create(): Promise<string> {
        // tslint:disable-next-line:no-console
        console.log('1323');
        return this.userService.create();
    }
    // get
    // http://localhost:4000/users?age=10&name=hello
    // http://localhost:4000/users/2
    // @Post('/add')
    // addUser1(@Response() res, @Body() user) {
    //   console.log(user);
    //   res.status(HttpStatus.CREATED).json({})
    // }
    // @Post()
    // addUser(@Response() res, @Request() req) {
    //     console.log(req.body, '///')

    // }
}
