import { Registro } from "../dominio/registro";
import { RegistroRepositorio } from "../dominio/RegistroRepositorio";
import { NotificacionRegistroCasoUso } from "./service/NotificacionNewRegistro";
import { MensajeServiceSocket } from "../infraestructura/serviceMensaje/MensajeServiceSocket";

export class AddRegistroCasoUso{
    constructor(
        readonly registroRepositorio:RegistroRepositorio,
        readonly notificacionRegistroCasoUso:NotificacionRegistroCasoUso,
        readonly mensajeServiceSocket:MensajeServiceSocket,
    ){}

    async run(id_Venta:number):Promise <Registro | null>{
        try {
            console.log("Log en el useCase", id_Venta);
            
            const registro:any = await this.registroRepositorio.addRegistro(
                id_Venta
            );
            if(registro){
                this.notificacionRegistroCasoUso.run(registro);
                this.mensajeServiceSocket.sendMensaje(registro);
            }
            return registro;
        } catch (error) {
            console.log("Error en addRegistroCasoUso", error);
            return null;
        }
    }
}