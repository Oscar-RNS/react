import Boton from './boton';
import logo from '../logo.svg';

export default function Bienvenido() {

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >         
        </a>           
        <h3>Hola, Bienvenido a React !</h3>
        {/*<form action="">
        <label>Usuario </label>
        <input type="text" name="usuario" style={{marginLeft:"14px"}} value={user} onChange={myUsuario}/><br></br>
        <label>Password </label>
        <input type="text" name="password" value={password} onChange={myContrasenia}/>
        <div style={{marginTop:"10px"}}></div>
         <Boton enviarDatos={enviarDatos}/> 
       </form>     
       <Usuario formDatos={formDatos}/>*/}
       <Boton/>
      </div>
  )
}
