import React, { useState } from 'react'
import Usuario from './usuario';
import Boton from './boton';

interface Props {
 myForm : string;   
}

export default function Bienvenido({myForm}:Props) {

 const [user, setUser] = useState('');  
 const [password, setPassword] = useState(''); 
 const [formDatos, setFormDatos] = useState('');

 function myUsuario(e : React.ChangeEvent<HTMLInputElement>) {
  setUser(e.target.value)
 }
 function myContrasenia(e : React.ChangeEvent<HTMLInputElement>) {
  setPassword(e.target.value)
 } 

 const enviarDatos = (e : React.FormEvent) => {
    e.preventDefault();   
    if(user === '' || password === '') {
      alert('Ingresar Datos !')
    } else {
      setFormDatos('Hola : ' + user)
    }
 }    

  return (
    <div>
        <h3>{myForm}</h3>
        <form action="">
        <label>Usuario </label>
        <input type="text" name="usuario" style={{marginLeft:"14px"}} value={user} onChange={myUsuario}/><br></br>
        <label>Password </label>
        <input type="text" name="password" value={password} onChange={myContrasenia}/>
        <div style={{marginTop:"10px"}}></div> 
        <Boton enviarDatos={enviarDatos}/>       
       </form>     
       <Usuario formDatos={formDatos}/>
    </div>
  )
}
