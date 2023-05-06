export class Auto {
    id:string;
    marca:string;
    modelo:string;
    anio:number;
    precio:number;
  
   

    constructor( 
       id:string, 
       marca:string,
       modelo:string,
       anio:number,
       precio:number,
    
    ) {
        this.id=id;
        this.marca=marca; 
        this.modelo=modelo;
        this.anio=anio;
        this.precio=precio;
     
        
    }

    toString(): string {
        return `${this.id},${this.marca},${this.modelo},${this.anio},${this.precio}`;
    
    }
}