import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
//import characters from './data.js';
import Nav from './components/NavBar/Nav';
import axios from "axios"
import {useLocation, Routes, Route, useNavigate} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form';

function App() {
  
   const[characters, setCharacters] = useState([])
   const location = useLocation();
   var userName = "hola@gmail.com";
   var password = "hola123";
   const navigate = useNavigate();
   
   const[access, setAccess] = useState(false)

   function login (userData){
      if(userData.email === userName && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }
   function logout (){
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate("/")
   },[access])

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
         {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} logout={logout}></Nav>}
         <Routes>
            <Route path="/home"element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path="/about"element={<About/>}></Route>
            <Route path="/detail/:id"element={<Detail/>}></Route>
            

         </Routes>
         
      </div>
   );
}

export default App;
