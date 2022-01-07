import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Label from './components/Label';
import CardList from './components/CardList';
import ItemContainer from './components/ItemContainer';
import EpisodesList from './components/episodes/EpisodesList';
import Contacto from './components/Contacto';
import ItemDetail from './components/cart/ItemDetail';
import LoginContainer from './components/login/LoginContainer';

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
            
      <Label title={titulo} subtitle='Mi subtitulo'/>
      <button onClick={ () => { setTitulo('Nuevo estado') } }>Cambiar Título</button>

      <h1 className='titulo'>Hola Mundo</h1>
      {/* { people.map( (p,i) =>
        <Card name={p.name} age={p.age} miEtiqueta={Label}></Card>
      )} */}

      {/* <CardList></CardList> */}
      {/* <ItemContainer></ItemContainer> */}

      {/* <EpisodesList></EpisodesList> */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="episodios" element={<EpisodesList />}>
            <Route path=":episodeId" element={<EpisodesList />} />
          </Route>
          <Route path="ItemDetail" element={<ItemDetail/>} />
          <Route path="login" element={<LoginContainer/>} />
          <Route path="contacto" element={<Contacto/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;