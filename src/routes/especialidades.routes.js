import express from 'express';
import { listarEspecialidades, crearEspecialidad } from '../controller/especialidades.controllers.js';

const router = express.Router();

router.get('/', listarEspecialidades);
router.post('/', crearEspecialidad);

export default router;
