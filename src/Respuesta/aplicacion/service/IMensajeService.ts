import { Registro } from "../../dominio/registro";

export interface IMensajeService{
    sendMensaje(registro:Registro):string;
}