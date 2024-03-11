const express = require('express');
const DataController = require('../controllers/dataController');

const router = express.Router();
const dataController = new DataController();

// Ruta para obtener los datos en formato JSON
router.get('/data', (req, res) => {
  const data = dataController.getData();
  res.json(data);
});

// Ruta para agregar nuevos datos
router.post('/data', (req, res) => {
  const newData = req.body;
  const result = dataController.addData(newData);
  res.json(result);
});

// Ruta para actualizar datos existentes
router.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = dataController.updateData(id, updatedData);
  res.json(result);
});

// Ruta para eliminar datos
router.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  const result = dataController.deleteData(id);
  res.json(result);
});

module.exports = router;