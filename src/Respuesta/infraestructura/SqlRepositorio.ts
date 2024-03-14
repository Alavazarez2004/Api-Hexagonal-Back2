import { Registro } from "../dominio/registro";
import { RegistroRepositorio } from "../dominio/RegistroRepositorio";
import RegistroModel from "./model/registro";

export class SqlRepositorio implements RegistroRepositorio{
    async addRegistro(id_Venta: number): Promise<Registro | null> {
        try {
            const registroCreado = await RegistroModel.create({id_Venta});
            return new Registro(registroCreado.id_Venta)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }    
    }
}