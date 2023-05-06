import {Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Put,
} from "@nestjs/common";
import { AutoService } from "./auto.service";


import { CreateAutoDto } from "src/dto/create-auto.dto";
import { Auto } from "src/class/vehiculos/auto";



@Controller("autos")
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get() // url/autos
  getAutos(): Auto[] {
    return this.autoService.getAutos();
  }

  @Get(":id") // url/pistas/:id >> /pistas/a354c326-fc53-4079-9568-9de965eecb7a
  getAutosById(
    @Param("id", ParseUUIDPipe)
    id: string,
  ): Auto {
    return this.autoService.getAutosById(id);
  }

  @Post()
  postAutos(@Body() createAutoDto: CreateAutoDto) {
    return this.autoService.createAutos(createAutoDto);
  }

  //   @Put(":id")
  //   putPista() {
  //     // Traer la pista y modificarla
  //   }

  @Delete(":id")
  deleteAutos(@Param("id") id: string): boolean {
    return this.autoService.deleteAutos(id);
  }
}