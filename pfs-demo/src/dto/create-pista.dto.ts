import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

// DTO >> Data Transfer Object

export class CreatePistaDto {
  @IsString()    //solo string
  @IsNotEmpty()   //no puede estar vacio
  @MinLength(3)   //minimo de tres caracteres
  readonly nombre: string;

  @IsNumber()
  readonly duracion: number;

  @IsString()
  @IsNotEmpty()
  readonly interprete: string;

  @IsNumber()
  readonly lanzamiento: number;
}