import { DataTypes } from 'sequelize';
import sequelize from '../controller/database.js';

const Especialidad = sequelize.define('Especialidad', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'especialidades',
  timestamps: false,
});

export default Especialidad;
