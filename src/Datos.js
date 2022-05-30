import React from 'react';
import { useState , useEffect } from 'react';


const Datos = () => {
    const [datos, setDatos] = useState([]);
  //  const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("montando...");
        
        window.fetch('http://localhost:3000/api/users',{
	        'mode': 'no-cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
               	'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            }
            })
        .then(res => {res.json(); console.log(res.json().users);})
        .then(data => {
            console.log(data)
            setDatos(data);
           // setLoading(false);
        })
        .catch(error => {
            console.log(error)
        })
    },[]);


    useEffect(() => {
        console.log("actualizando...");
    },[datos]);


    return (

        
        <div>
            <ul>
            {datos.map((dato,i) => {
                    console.log(datos)
                   return ( <li key={i} >{dato}</li>)
})}
            </ul>
            
            
            hola
            hola
            hola
        </div>
    )

}

export default Datos;