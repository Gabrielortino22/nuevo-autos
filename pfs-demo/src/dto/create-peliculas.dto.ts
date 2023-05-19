import { IsNumber, IsString} from 'class-validator';

export class CreatePeliculaDto {

  

  @IsString()
  readonly titulo: string;

  @IsString()
  readonly actoresPrincipales: string[];

  @IsString()
  readonly generos: string[];

  @IsString()
  readonly sinopsis: string;

  @IsString()
  readonly imagen: string;

  @IsNumber()
  readonly duracion: number;

  @IsNumber()
  readonly fechaLanzamiento: number;
}