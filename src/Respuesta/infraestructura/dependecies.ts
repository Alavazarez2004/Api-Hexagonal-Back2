import { AddRegistroCasoUso } from "../aplicacion/addRegistroCasoUso";
import { NotificacionRegistroCasoUso } from "../aplicacion/service/NotificacionNewRegistro";
import { SqlRepositorio } from "./SqlRepositorio";
import { AddRegistroController } from "./controller/addRegistroController";
import { MensajeServiceSocket } from "./serviceMensaje/MensajeServiceSocket";
import { NotificacionNewRegistro } from "./serviceRabbitMQ/NotificacionAddRegistro";

export const sqlRepositorio = new SqlRepositorio();
export const notificacionNewRegistro = new NotificacionNewRegistro();
export const meesageServiceSocket = new MensajeServiceSocket();

export const notificacionRegistroCasoUso = new NotificacionRegistroCasoUso(notificacionNewRegistro);
export const addRegistroCasoUso = new AddRegistroCasoUso(sqlRepositorio,notificacionRegistroCasoUso,meesageServiceSocket);
export const addRegistroController = new AddRegistroController(addRegistroCasoUso);