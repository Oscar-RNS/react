import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

/*interface Props { 
   enviarDatos: (e: React.FormEvent) => void;
}
function Boton(myBoton : Props) {
  const {enviarDatos} = myBoton;*/
 function Boton() {
  
  const navigate = useNavigate();  
    
  return (
    <>
    <Button variant="success" onClick={() => navigate("/home")}>Entrar</Button>
    </>
  )
}

export default Boton