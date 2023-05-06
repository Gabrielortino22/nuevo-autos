import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';

import { AppService } from './app.service';



import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AutoService } from './autos/auto.service';
import { AutoController } from './autos/auto.controller';






@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, `..`, `client`),
    }),
  ],
  controllers: [AppController, UserController,AutoController],
  providers: [AppService,UserService,AutoService],
})
export class AppModule {}
