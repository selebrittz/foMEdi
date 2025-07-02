import express from 'express';
import dotenv from 'dotenv';
import { startDB } from './src/controller/database.js';

import turnosRoutes from './src/routes/turnos.routes.js';
import especialidadesRoutes from './src/routes/especialidades.routes.js';
import medicosRoutes from './src/routes/medicos.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/turnos', turnosRoutes);
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api/medicos', medicosRoutes);

const startServer = async () => {
  try {
    await startDB();
    console.log('Conexión a la base de datos establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`El server está corriendo en: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar la base de datos. Servidor no iniciado.', error);
  }
};

startServer();
