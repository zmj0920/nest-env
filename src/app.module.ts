import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from 'nestjs-config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ImagetTypeModule} from './app/imagetype/Imagetype.module';
import {IMGModule} from './app/img/img.module';
import {PPTModule} from './app/ppt/ppt.module';
import {PPTTypeModule} from './app/ppttype/ppttype.module';
import {UserModule} from './app/user/user.module';
import * as path from 'path';
@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
        useFactory: (config: ConfigService) => config.get('database'),
        inject: [ConfigService],
    }),
      ImagetTypeModule,
      IMGModule,
      PPTModule,
      PPTTypeModule,
      UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
