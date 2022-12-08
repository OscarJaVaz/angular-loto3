import { Usuarioo } from "./usuarioo";

export class Donacion {
    id_donacion: number = 0;
    tipo_donacion:string ="";
    fecha_registro:string = "";
    stock: number=0;
    fecha_act: string = "";
    validado: boolean= true;
    status: string="";
    usuario: Usuarioo=new Usuarioo();
    usuarioo: Usuarioo = new Usuarioo();
    
   
}
