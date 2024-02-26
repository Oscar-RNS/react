import Boton from './boton';
import logo from '../logo.svg';

export default function Bienvenido() {
/*
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

*/

  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" style={{width:"250px"}}/>    
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
       </header>
      </div>
  )
}
