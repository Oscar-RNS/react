import React from 'react'

interface Props { 
   enviarDatos: (e: React.FormEvent) => void;
}
function Boton(myBoton : Props) {
  const {enviarDatos} = myBoton;
  return (
    <div><input type="submit" value="Enviar Datos" onClick={enviarDatos}/></div>
  )
}

export default Boton