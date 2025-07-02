import Turno from '../models/turnos.models.js';

export const crearTurno = async (req, res) => {
  try {
    const { especialidad, medico, horario } = req.body;

    if (!especialidad || !medico || !horario) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const nuevoTurno = await Turno.create({ especialidad, medico, horario });
    res.status(201).json(nuevoTurno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear turno' });
  }
};

export const listarTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll();
    res.json(turnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar turnos' });
  }
};
