import express from 'express';
import { listarMedicos, crearMedico } from '../controller/medicos.controllers.js';

const router = express.Router();

router.get('/', listarMedicos);
router.post('/', crearMedico);

export default router;
