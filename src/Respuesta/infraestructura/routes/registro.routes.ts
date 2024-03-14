import express from 'express';
import { addRegistroController } from '../dependecies';

export const registroRouter = express.Router();
registroRouter.post('/', addRegistroController.run.bind(addRegistroController))