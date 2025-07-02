import Medico from '../models/medico.models.js';
import Especialidad from '../models/especialidades.models.js';

export const listarMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll({
      include: {
        model: Especialidad,
        as: 'especialidad',
        attributes: ['nombre']
      }
    });
    res.json(medicos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar médicos' });
  }
};

export const crearMedico = async (req, res) => {
  try {
    const { nombre, especialidadId } = req.body;
    if (!nombre || !especialidadId) return res.status(400).json({ message: 'Faltan datos' });

    const nuevo = await Medico.create({ nombre, especialidadId });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear médico' });
  }
};
