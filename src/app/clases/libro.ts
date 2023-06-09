export class libro{
    id_libro:number;
    nombre:string;
    autor:string;
    genero:string;
    editorial:string;
    estado:number;
    id_estante:number;

    constructor(){
        this.id_libro = 0;
        this.nombre = '';
        this.autor = '';
        this.genero = '';
        this.editorial = '';
        this.estado = 0;
        this.id_estante = 0;
    }
}