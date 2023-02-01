import  '../hojas de estilo/Boton.css'
  import React from "react";

function Boton({ texto, esBotondeClick, manejarClick }) {
  return (
    <div>
      <button
        className={esBotondeClick ? "boton-click" : "boton-reiniciar"}
        onClick={manejarClick}
      >
        {texto}
      </button>
    </div>
  );
} 


export default Boton;
