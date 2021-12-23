import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";

import NavBar from './components/NavBar';
import Card from './components/Card';
import Label from './components/Label';
import CardList from './components/CardList';
import ItemContainer from './components/ItemContainer';
import EpisodesList from './components/episodes/EpisodesList';

function App() {

  const people = [
    {name: 'Ana', age: 25},
    {name: 'Juan', age: 28},
    {name: 'Luis', age: 55},
    {name: 'xx', age: 20},
    {name: 'yy', age: 28},
  ]

  const [titulo, setTitulo] = useState('Mi titulo estado inicial')

  useEffect( () => {
    console.log('Se ejecutó useEffect');
  }, [] )

  console.log('Render de mi componente');

  return (
    <div className="App">
      <NavBar/>
      
      <Label title={titulo} subtitle='Mi subtitulo'/>
      <button onClick={ () => { setTitulo('Nuevo estado') } }>Cambiar Título</button>

      <h1 className='titulo'>Hola Mundo</h1>
      {/* { people.map( (p,i) =>
        <Card name={p.name} age={p.age} miEtiqueta={Label}></Card>
      )} */}

      {/* <CardList></CardList> */}
      {/* <ItemContainer></ItemContainer> */}

      <EpisodesList></EpisodesList>
    </div>
  );
}

export default App;