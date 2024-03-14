import { Registro } from "../../dominio/registro";
import { NotificacionNewRegistro } from "../../infraestructura/serviceRabbitMQ/NotificacionAddRegistro";

export class NotificacionRegistroCasoUso{
    constructor(readonly serviceNotificacion:NotificacionNewRegistro){}

    async run(registro:Registro){
        await this.serviceNotificacion.sendNotificacion(registro);
    }
}