
export default (sequelize, DataTypes) => {
  const Turno = sequelize.define('Turno', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doctor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Turno;
};
