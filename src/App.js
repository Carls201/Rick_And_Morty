import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App () {

  const [characters, setCharacters] = useState([
    
  ]);

  const location = useLocation();
  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) =>{
    setCharacters(
      characters.filter(charachter => charachter.id !== id)
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      
      <Nav onSearch={onSearch}/>
      
      <Routes>
        
        <Route path='/' element={<Form/>}/>
        <Route path='home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App
