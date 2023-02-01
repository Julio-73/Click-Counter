import Boton from "./componentes/Boton";
import caldtutylogo from "./componentes/Imagen/Screenshot_11.png";
import Contador from './componentes/Contador';
import  {useState } from 'react';

function App() {

const [numClips,setNumclips] = useState(0)



  const manejaClick = () => {
   setNumclips(numClips + 1);
  };

  const reiniciarContador = () => {
    setNumclips(0);
  };

  return (
    <div className="App">
      <div className="Call-of-duty">
        <img
          src={caldtutylogo}
          alt="foto de Call of duty"
          className="Call-logo"
        />
      </div>
      <div className="contenedor-principal">

    <Contador  numClips= {numClips } />

      <Boton texto="Click" esBotondeClick={true} manejarClick={manejaClick} />
      <Boton
        texto="Reiniciar"
        esBotondeClick={false}
        manejarClick={reiniciarContador}
      />

      </div>
    </div>
  );
}

export default App;
