import io from 'socket.io-client';
import { Registro } from '../../dominio/registro';
import { IMensajeService } from '../../aplicacion/service/IMensajeService';

export class MensajeServiceSocket implements IMensajeService{
    sendMensaje(registro: Registro): string {
        const socket = io("http://localhost:3002/");//Aqui va la ruta

        socket.on("connect", ()=>{
            console.log("Conectado al servidor socket");

            socket.emit("newClient", "Pago Realizado");
        });

        socket.on("disconnect", ()=>{
            console.log("El servidor esta desconectado");
        });

        return "Mensaje Enviado";
    }
}