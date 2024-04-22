import React from 'react';
import './Custombutton.css';

interface Datos{
    texto:string;
    color:string;
}

function Custombutton({texto, color}:Datos){
    return(
        <div className='mi-boton'>
            Mi boton
        </div>
    );
}

export default Custombutton;