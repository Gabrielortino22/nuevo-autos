import { Injectable, NotFoundException } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import { v4 as uuid } from 'uuid';
import { CreatePeliculaDto } from 'src/dto/create-peliculas.dto';

@Injectable()
export class PeliculaService {
  private peliculas: Pelicula[] = [
    
    {
      "id":uuid(),
      "titulo":"matrix",
      "actoresPrincipales":["Keanu Reeves","Laurence Fishburne","Carrie-Anne Moss","Hugo Weaving"],
      "generos":["accion","ciencia ficcion"],
      "sinopsis":"Thomas Anderson lleva una doble vida: por el día es programador en una importante empresa de software, y por la noche un hacker informático llamado Neo. Su vida no volverá a ser igual cuando unos misteriosos personajes le inviten a descubrir la respuesta a la pregunta que no le deja dormir: ¿qué es Matrix?",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg",
      "duracion":138,
      "fechaLanzamiento":1999
    },

    {
      "id":uuid(),
      "titulo":"El exorcista del Papa",
      "actoresPrincipales":["Russell Crowe","Daniel Zovatto","Alex Essoe","Franco Nero","Peter DeSouza-Feighoney"],
      "generos":["Terror","Suspenso","Fantacia"],
      "sinopsis":"El Padre Gabriele Amorth, Exorcista Principal del Vaticano investiga la terrorífica posesión de un niño y termina descubriendo una conspiración que hace siglos fue encubierta de manera desesperada por el Vaticano.",
      "imagen":"https://www.themoviedb.org/movie/758323-the-pope-s-exorcist#",
      "duracion":143,
      "fechaLanzamiento":2023
    },

    {
      "id":uuid(),
      "titulo":"Gladiador",
      "actoresPrincipales":["Russell Crowe","Joaquin Phoenix","Connie Nielsen"],
      "generos":["accion","drama","aventura"],
      "sinopsis":"En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio decide transferir el poder a Máximo, bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo, que aspiraba al trono, no lo acepta y trata de asesinar a Máximo.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
      "duracion":155,
      "fechaLanzamiento":2000
    },
    {
      "id":uuid(),
      "titulo":"65: al borde de la extincion",
      "actoresPrincipales":["Russell Crowe","Joaquin Phoenix","Connie Nielsen"],
      "generos":["accion","drama","aventura"],
      "sinopsis":"En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio decide transferir el poder a Máximo, bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo, que aspiraba al trono, no lo acepta y trata de asesinar a Máximo.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
      "duracion":155,
      "fechaLanzamiento":2000
    },
  
    {
      "id": uuid(),
      "titulo": "Titanic",
      "actoresPrincipales": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      "generos": ["Drama", "Romance"],
      "sinopsis": "Un joven artista se enamora de una pasajera de clase alta a bordo del Titanic, pero su amor se ve amenazado por el trágico destino del famoso transatlántico.",
      "imagen": "https://www.ecartelera.com/carteles/2400/2425/002_m.jpg",
      "duracion": 194,
      "fechaLanzamiento": 1997
    },

   {
      "id": uuid(),
      "titulo": "El caballero oscuro",
      "actoresPrincipales": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "generos": ["Acción", "Crimen", "Drama"],
      "sinopsis": "Batman se enfrenta al Joker, un villano despiadado que amenaza con sumir a Gotham City en el caos y la anarquía.",
      "imagen": "https://i.blogs.es/cb9314/caballero-oscuro/1366_2000.jpeg",
      "duracion": 152,
      "fechaLanzamiento": 2008
   },

   {
      "id":uuid(),
      "titulo":"origen",
      "actoresPrincipales":["Leonardo DiCaprio","Joseph Gordon-Levitt","Ken Watanabe","Tom Hardy","Elliot Page","Cillian Murphy"],
      "generos":["accion","ciencia ficcion","aventura"],
      "sinopsis":"Dom Cobb es un ladrón hábil, el mejor de todos, especializado en el peligroso arte de extracción: el robo de secretos valiosos desde las profundidades del subconsciente durante el estado de sueño cuando la mente está más vulnerable. Esta habilidad excepcional de Cobb le ha hecho un jugador codiciado en el traicionero nuevo mundo de espionaje corporativo, pero al mismo tiempo, le ha convertido en un fugitivo internacional y ha tenido que sacrificar todo que le importaba. Ahora a Cobb se le ofrece una oportunidad para redimirse. Con un último trabajo podría recuperar su vida anterior, pero solamente si logra lo imposible.",
      "imagen":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
      "duracion":158,
      "fechaLanzamiento":2010
    }
  ];


  
  getAllPeliculas(): Pelicula[] {
    return this.peliculas;
  }


  getPeliculaById(id: string): Pelicula {
    const pelicula = this.peliculas.find((pelicula) => pelicula.id === id);
    if (!pelicula) {
      throw new NotFoundException();
    }

    return pelicula;
  }

  
  createPelicula(CreatePeliculaDto: CreatePeliculaDto): Pelicula {
    const newPelicula: Pelicula = new Pelicula (
      uuid(),
      CreatePeliculaDto.titulo,
      CreatePeliculaDto.actoresPrincipales,
      CreatePeliculaDto.generos,
      CreatePeliculaDto.sinopsis,
      CreatePeliculaDto.imagen,
      CreatePeliculaDto.duracion,
      CreatePeliculaDto.fechaLanzamiento
    );
    const peliculaExistente = this.peliculas.find((e) => e.id === newPelicula.id)
    if(peliculaExistente){
      throw new NotFoundException ('la pelicula ya existe')
    }
      this.peliculas.push(newPelicula)
  
      return newPelicula;
  }

  updatePelicula(nuevaPelicula: any, id: string): string {
    let index = this.peliculas.findIndex(pelicula => pelicula.id == id);
    if (index !== -1) {
      let peliculaExistente = this.peliculas[index];
      peliculaExistente.titulo = nuevaPelicula.titulo;
      peliculaExistente.actoresPrincipales = nuevaPelicula.actoresPrincipales;
      peliculaExistente.generos = nuevaPelicula.generos;
      peliculaExistente.sinopsis = nuevaPelicula.sinopsis;
      peliculaExistente.imagen = nuevaPelicula.imagen;
      peliculaExistente.duracion = nuevaPelicula.duracion;
      peliculaExistente.fechaLanzamiento = nuevaPelicula.fechaLanzamiento;
  
      return "ok";
    } else {
      return "404";
    }
}


  deletePelicula(id: string): boolean {
    const index = this.peliculas.findIndex((pelicula) => pelicula.id === id);
    if (index !== -1) {
      this.peliculas.splice(index, 1);
      return true;
    }
    return false;
  }

}