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