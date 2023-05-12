import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

// DTO >> Data Transfer Object

export class CreateAutoDto {
  @IsString()
  @IsNotEmpty()
  readonly patente: string;

  @IsString()    //solo string
  @IsNotEmpty()   //no puede estar vacio
  @MinLength(3)   //minimo de tres caracteres
  readonly marca: string;

  @IsString()
  @IsNotEmpty()
  readonly modelo: string;

  @IsNumber()
  readonly anio: number;

  @IsNumber()
  readonly precio: number;

  @IsNumber()
  readonly carga: number;

}