import express from 'express';
import dotenv from 'dotenv';
import { startDB } from './src/controller/database.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


const startServer = async () => {
  await startDB();
  console.log('Conexión a la base de datos establecida correctamente.');

  app.listen(PORT, () => {
    console.log(`El server está corriendo en:http://localhost:${PORT}`);
  });
}

startServer();