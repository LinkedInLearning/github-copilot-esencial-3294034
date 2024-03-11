class DataController {
  // Método para obtener los datos en formato JSON
  getData(req, res) {
    // Aquí debes implementar la lógica para obtener los datos
    // y devolverlos en formato JSON
    const data = {
      example: "Hello, world!",
    };

    res.json(data);
  }
}

module.exports = DataController;