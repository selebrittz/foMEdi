import { DataTypes } from 'sequelize';
import sequelize from '../controller/database.js';
import Especialidad from './especialidades.models.js';

const Medico = sequelize.define('Medico', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'medicos',
  timestamps: false,
});

Medico.belongsTo(Especialidad, { foreignKey: 'especialidadId', as: 'especialidad' });

export default Medico;
