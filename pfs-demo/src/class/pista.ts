export class Pista {
    id:string;
    nombre:string;
    duracion:number;
    interprete:string;
    lanzamiento:number;

    constructor( 
       id:string,
       nombre:string,
       duracion:number,
       interprete:string,
       lanzamiento:number,
    ) {
        this.id=id;
        this.nombre=nombre;
        this.duracion=duracion;
        this.interprete=interprete;
        this.lanzamiento=lanzamiento;
    }

    toString(): string {
        return `${this.id},${this.nombre},${this.duracion},${this.interprete},${this.lanzamiento}`;
    
    }
}