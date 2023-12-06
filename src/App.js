import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/form/form';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
    </div>
  );
}

export default App;
