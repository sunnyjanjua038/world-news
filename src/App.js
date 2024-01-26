import React, { useEffect } from 'react';
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Outlet} from 'react-router-dom'
import News from './components/News';
import Us from './components/Us';
import Politics from './components/Politics';
import AnotherNavbar from './components/AnotherNavbar';
import World from './components/World';
import MainNavbar from './components/Navbar';
import ApiPages from './Pages/ApiPages'
function App() {

  return (
   <>
   <MainNavbar/>
   <AnotherNavbar/>
   <Routes>
        <Route path="/news" element={<News />} />
          <Route path="/" element={<Home />}/>
          <Route path="/us" element={<Us/>} />
          <Route path="/politics" element={<Politics/>} />
          <Route path="/world" element={<World/>} />
        
    </Routes>
    {/* <Outlet/> */}
 
   </>
  );
}

export default App;
