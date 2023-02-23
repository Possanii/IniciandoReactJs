import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Rodape from './components/Rodape';
import Time from './components/Time';
import Title from './components/Title';

function App() {

  const times =[
    {
      timeName: 'Programação',
      primaryColor:'#57C278',
      secondaryColor:'#D9F7E9',
    },
    {
      timeName: 'Front-End',
      primaryColor:'#82CFFA',
      secondaryColor:'#E8F8FF',
    },
    {
      timeName: 'Data Science',
      primaryColor:'#A6D157',
      secondaryColor:'#F0F8E2',
    },
    {
      timeName: 'Devops',
      primaryColor:'#E06B69',
      secondaryColor:'#FDE7E8',
    },
    {
      timeName: 'Ux e Design',
      primaryColor:'#D86EBF',
      secondaryColor:'#FAE9F5',
    },
    {
      timeName: 'Mobile',
      primaryColor:'#FFBA05',
      secondaryColor:'#FFF5D9',
    },
    {
      timeName: 'Inovação e Gestão',
      primaryColor:'#FF8A29',
      secondaryColor:'#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([{nome: 'Gustavo Piovesan', cargo:'Software Engineer', imagem:'https://github.com/Possanii.png', time:'Front-End'}])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
    
  return (
    <div className="App">
      <Title />
      <Banner />
      <Form times={times.map(time => time.timeName)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.timeName} 
        nomeTime={time.timeName} 
        primaryColor={time.primaryColor} 
        secondaryColor={time.secondaryColor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.timeName)}
        />)}
      <Rodape/>
    </div>
  );
}

export default App;
