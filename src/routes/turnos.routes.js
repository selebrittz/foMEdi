import express from 'express';
import { crearTurno, listarTurnos } from '../controller/turnos.controllers.js';

const router = express.Router();

router.post('/', crearTurno);
router.get('/', listarTurnos);

export default router;
