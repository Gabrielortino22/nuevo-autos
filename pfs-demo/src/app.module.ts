import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { AutoController } from './autos/auto.controller';
import { PistaController } from './pista/pista.controller';
import { PeliculasController } from './peliculas/pelicula.controller';


import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { AutoService } from './autos/auto.service';
import { PistaService } from './pista/pista.service';
import { PeliculaService } from './peliculas/pelicula.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, `..`, `client`),
    }),
  ],
  controllers: [AppController, UserController,AutoController,PistaController,PeliculasController],
  providers: [AppService,UserService,AutoService,PistaService,PeliculaService],
})
export class AppModule {}
