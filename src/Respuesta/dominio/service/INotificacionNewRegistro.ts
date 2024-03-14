import { Registro } from "../registro";

export default interface INotificacionNewRegistro{
    sendNotificacion(registro:Registro):Promise<boolean>;
}