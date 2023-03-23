import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
//import characters from './data.js';
import Nav from './components/Nav';
import axios from "axios"
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'

function App() {
  
   const[characters, setCharacters] = useState([])

   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let existe = characters.find((ch)=>ch.id ===data.id)
            if(existe){
            alert("Ya existe")
            } else {
            setCharacters((oldChars) => [...oldChars, data]);
            }
          } else{
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      setCharacters((oldChars) =>{
         return oldChars.filter((ch)=>ch.id !== id)
      });
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Routes>
            <Route path="/home"element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path="/about"element={<About/>}></Route>
            <Route path="/detail/:id"element={<Detail/>}></Route>

         </Routes>
         
      </div>
   );
}

export default App;
