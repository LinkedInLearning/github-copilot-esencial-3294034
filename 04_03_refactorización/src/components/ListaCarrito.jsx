import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito';
import { DataContext } from './DataNOMBRE_INCORRECTO';
 

function ListaCarrito() {

  const { data, setData } = useContext(DataContext);

  const removerItem = (producto) => {
    const id = producto.id;
      setData(prevData => prevData.map(item =>
          item.id === id ? { ...item, status: 'un-selected' } : item
      ));
  }

  //Validación de datos
  const validarCorreoElectronico = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  const validarPassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    return true;
  }

  const validarNumeroTelefonico = (numero) => {
    const regex = /^\d{8,}$/;
    return regex.test(numero);
  }
  

  const sumaNueva = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
      return 'Error: Invalid numbers';
    }
    return num1 + num2;
  }

  const filteredItems = data.filter( item => item.status === 'selected' );

  return (
    <div className="col-md-3 border-start border-4 border-secondary">
      <div className="sticky-top " >
        <h2>Shopping Cart</h2>
        {filteredItems.map(producto => (
          <ItemCarrito key={producto.id} producto={producto} 
            onClick={ ()=>{ removerItem(producto) } }
          />
        ))}
      </div>
    </div>

  )
}

export default ListaCarrito