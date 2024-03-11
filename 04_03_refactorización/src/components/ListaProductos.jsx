import React, { useContext } from 'react'
import { DataContext } from './DataContext'
 


function ListaProductos() {

    const { data, setData } = useContext(DataContext)

    const manejarClick = (event)=>{
        const id = event.id;
        setData(prevData => prevData.map(item =>
            item.id === id ? { ...item, status: 'selected' } : item
        ));
    }
    
    const validarCorreoElectronico = (correo) => {
        // Check if the email is empty
        if (correo.trim() === '') {
            return <p className="error-message">Correo electrónico inválido</p>;
        }

        // Regular expression pattern for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if the email matches the pattern
        const isValid = emailPattern.test(correo);

        // Display error message if the email is not valid
        if (!isValid) {
            return <p className="error-message">Correo electrónico inválido</p>;
        }

        // Return null if the email is valid
        return null;
    }

    return (
        <div className="col-md-9">
            <h2>Productos</h2>
            <div className="row">

                {data.map(producto => (

                    <div className="col-md-4 mb-4" key={producto.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">${producto.precio}</p>
                                <button href="#" className="btn btn-primary" 
                                onClick={()=>{ manejarClick(producto) }}
                                >Comprar</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default ListaProductos