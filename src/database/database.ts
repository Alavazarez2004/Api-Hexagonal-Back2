import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import RegistroModel from '../Respuesta/infraestructura/model/registro';
dotenv.config();

export const sequelize = new Sequelize({
    dialect: "mysql",
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 3306,
    models: [RegistroModel]
});

export async function initialDataBase(){
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa');
        await sequelize.sync({force: false});
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error);
    }
} 