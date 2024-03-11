import React, { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./productos.json')
            .then(response => response.json())
            .then(datos => setData(datos))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

     /// Validación de datos de sistema

     const validarArraysVacios = (array) => {
        if (array.length === 0) {
            return true;
        }
        return false;
    }




    return (
        <DataContext.Provider value={{ data, setData }} >
            {children}
        </DataContext.Provider>
    )

}
