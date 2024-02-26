import { useState } from "react";

interface Props {     
  formDatos: string;
}

const Usuario = ({formDatos} : Props) => { 
    if (formDatos === '') {
        return(<></>)
    }
    return (
    <div>      
        <hr></hr> 
        {formDatos}   
        <hr></hr> 
    </div>
    ) 
}

export default Usuario
