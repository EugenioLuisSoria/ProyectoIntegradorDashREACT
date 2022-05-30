import React from 'react';
import {useState , useEffect} from 'react';


const Datos = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://localhost:3000/users/api')
        .then(response => response.json())
        .then(data => {
            setDatos(data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error)
        });
    });
    return (
        <div>
            {loading ? <p>Cargando...</p> :
            <ul>
                {datos.map(dato => (
                    <li key={dato.id}>
                        {dato.name}
                    </li>
                ))}
            </ul>
            }
        </div>
    )

}

export default Datos;