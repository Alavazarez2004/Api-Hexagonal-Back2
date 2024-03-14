import express from 'express';
import cors from 'cors';
import http from 'http'; // Importa el módulo http para crear un servidor HTTP independiente para Socket.io
import { Server } from 'socket.io';
import {initialDataBase} from './database/database';
import { registroRouter } from './Respuesta/infraestructura/routes/registro.routes';

const app = express();

// Configuración de CORS
app.use(cors());

//Middlewares
app.use(express.json());
app.disable('x-powered-by');

app.use('/mensaje',registroRouter);

// Crear un servidor HTTP independiente utilizando Express
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

async function startServer() {
    try {
        await initialDataBase();
        app.listen(3001, () => {
            console.log("Servidor corriendo en el puerto 3001");  
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}
startServer();

