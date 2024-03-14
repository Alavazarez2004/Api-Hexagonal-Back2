import { Registro } from "./registro";

export interface RegistroRepositorio{
    addRegistro(
        id_Venta:number
    ):Promise<Registro | null>
}