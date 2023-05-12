import { Injectable, NotFoundException } from "@nestjs/common";

import { v4 as uuid } from "uuid";
import * as fs from "fs";

import { Auto } from "src/class/vehiculos/auto";
import { CreateAutoDto } from "src/dto/create-auto.dto";

@Injectable()
export class AutoService {
  private Autos: Auto[] = [];
  private url: string = "./src/autos/autos.txt";
 

  constructor() {
    const datos = fs.readFileSync(this.url, "utf-8");

    if (datos.length) {
      const renglon = datos.split("\r\n");

      for (let linea of renglon) {
        let partes = linea.split(",");

        let auto = new Auto(
          partes[0],
          partes[1],
          partes[2],
          partes[3],
          parseInt(partes[4]),
          parseInt(partes[5]),
          parseInt(partes[6]),
        );

        this.Autos.push(auto);
      }
    }
  }

  getAutos(): Auto[] {
    return this.Autos;
  }

  getAutosById(id: string): Auto {
    const auto = this.Autos.find((auto) => auto.id === id);

    if (!auto) {
      // devolver una exception
      throw new NotFoundException();
    }

    return auto;
  }

  createAutos(CreateAutosDto: CreateAutoDto): Auto{
    const newAuto: Auto = new Auto(
      uuid(),
      CreateAutosDto.patente,
      CreateAutosDto.marca,
      CreateAutosDto.modelo,
      CreateAutosDto.anio,
      CreateAutosDto.precio,
      CreateAutosDto.carga,
    );

    const dataAppend = this.Autos.length
      ? "\n" + newAuto.toString()
      : newAuto.toString();

    this.Autos.push(newAuto);

    fs.appendFileSync(this.url, dataAppend);

    return newAuto;
  }

  deleteAutos(id: string): boolean {
    const pos = this.Autos.findIndex((e) => {
      return e.id == id;
    });

    if (pos != -1) {
      this.Autos.splice(pos, 1);
      return true;
    }

    return false;
  }
}