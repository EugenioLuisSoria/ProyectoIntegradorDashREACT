import React from 'react';
import {useState , useEffect} from 'react';


const Datos = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("montado")
        fetch('http://localhost:3000/api/users',{
	        'mode': 'no-cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
            }})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setDatos(data);
            setLoading(false);
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
                   ( <li key={i} >{dato}</li>)
})}
            </ul>
            
            
            hola
            hola
            hola
        </div>
    )

}

export default Datos;