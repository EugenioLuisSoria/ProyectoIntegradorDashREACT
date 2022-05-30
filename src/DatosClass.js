import React from "react";
import { Component } from "react";

class DatosClass extends Component {
    // Constructor 
    constructor(props) {
        super(props);
  
        this.state = {
            users: [],
            estado: "",
        };
    }
  
    componentDidMount() {
        console.log("Antes de consultar")
        fetch('http://localhost:3000/api/users',{
	        'mode': 'no-cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
               	'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            }
            })
            .then(res => res.json())
            .then(data => {
                console.log("Tengo la data " + data)
                return this.setState({ users: data.users, estado: "soy un compi cargando..." })
            })
            .catch((e) => {
                console.log("Yo rompi" + e);
                console.error(e instanceof SyntaxError);
                console.error(e.message);
            });
    }
  
    render() {
        let contenido;
        console.log("Estoy renderizando")
        if (!this.state.users) {
            return (
                <h1>{"Cargando"}</h1>
            )
        }
  
        contenido = this.state.users;
        console.log("Encontre informacion");
  
        // contenido = this.state.users[0].email
  
        // console.log(usuario1[0].name)
        console.log("Termine de evaluar");
        let prueba = contenido.map( (usuario) => {
            return <li>{usuario.name}</li>
        })
        
        return (
            <div>
                <ul>
                    {
                        prueba
                    }
                    Hola
                    Hola
                    Hola
                    Hola
                    Hola
                    Hola
                </ul>
            </div>
        )
  
    }
  }

  export default DatosClass;