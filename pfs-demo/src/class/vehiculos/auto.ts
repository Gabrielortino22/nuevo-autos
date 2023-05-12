export class Auto {
    id:string;
    patente:string
    marca:string;
    modelo:string;
    anio:number;
    precio:number;
    carga:number;
  
   

    constructor( 
       id:string, 
       patente:string,
       marca:string,
       modelo:string,
       anio:number,
       precio:number,
       carga:number,
    ) {
        this.id=id;
        this.patente=patente
        this.marca=marca; 
        this.modelo=modelo;
        this.anio=anio;
        this.precio=precio;
        this.carga=carga;
        
    }

    toString(): string {
        return `${this.id},${this.patente},${this.marca},${this.modelo},${this.anio},${this.precio},${this.carga}`;
    
    }
}