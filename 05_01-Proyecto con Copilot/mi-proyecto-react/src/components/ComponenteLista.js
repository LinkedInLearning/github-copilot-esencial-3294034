import React, { useState, useEffect } from 'react';

const ComponenteLista = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/JSON/productos.json');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>

      {productos.map((producto) => (
        <div className="card" key={producto.id}>
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Precio: ${producto.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ComponenteLista;