import amqplib from 'amqplib';
import { Registro } from '../../dominio/registro';
import INotificacionNewRegistro from '../../dominio/service/INotificacionNewRegistro';

export class NotificacionNewRegistro implements INotificacionNewRegistro{
    private url: any;
    private exch:any;

    constructor(){
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }

    async sendNotificacion(registro: Registro): Promise<boolean> {
        const  conexion = await amqplib.connect(this.url);
        const channel = await conexion.createChannel();
        const status = await channel.publish(this.exch, "miguel", Buffer.from("Pago Realizado"));
        return status;
    }
}