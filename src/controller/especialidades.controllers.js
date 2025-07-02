import Especialidad from '../models/especialidades.models.js';

export const listarEspecialidades = async (req, res) => {
  try {
    const especialidades = await Especialidad.findAll();
    res.json(especialidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar especialidades' });
  }
};

export const crearEspecialidad = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ message: 'Falta nombre' });

    const nueva = await Especialidad.create({ nombre });
    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear especialidad' });
  }
};
