const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configurar las rutas para la API de datos
dataRoutes.setDataRoutes(app);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});