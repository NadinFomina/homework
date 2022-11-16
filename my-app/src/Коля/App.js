
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import React from 'react';
import List from './List';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <header>
      <Link to={'/'}>List</Link>

      <Link to={'img'}>IMG</Link>
      </header>
    <Routes>
    <Route path='/' element={<List/>}/>
    <Route path='/img' element={<Image/>}/>
      
      
      
    </Routes>
    </div>
  );
}

export default App;
