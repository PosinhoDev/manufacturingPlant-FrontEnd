export class Producto {
    identificador: number;
    producto: string;
    categoria: string;
    estado: string;
    cantidad: number;

    constructor(identificador:number, producto: string, categoria: string, estado: string, cantidad: number){
        this.identificador = identificador;
        this.producto =  producto;
        this.categoria = categoria;
        this.estado = estado;
        this.cantidad = cantidad;
    }
}