import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      CorSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      CorSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      CorSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      CorSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      CorSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      CorSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      CorSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="Ux & Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovaçao e Gestão"/>
    </div>
  );
}

export default App;
