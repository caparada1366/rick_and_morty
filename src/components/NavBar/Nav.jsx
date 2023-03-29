import React from 'react'
import SearchBar from '../SearchBar'
import './Nav.css'
import { Link } from 'react-router-dom'


export default function Nav({onSearch, logout}) {
  return (
    <div className='nav'>
      <Link to="/home"><button className = 'but' style={{position: 'absolute', left: '10px', margin:'2px 40px'}}>Home</button></Link>
      <Link to="/about"><button className = 'but' style={{position: 'absolute', right:'10px', margin:'2px 40px ' }}>About</button></Link>
      <button onClick={logout} className = 'but' style={{position: 'absolute', right:'150px', margin:'2px 40px ' }}>Log Out</button>
      <SearchBar onSearch={onSearch} />
      
      
      </div>
  )
}
