import { useState } from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {SignUp} from './Components/Signup'
import { Login } from './Components/Login'
import { LandingPage } from './Components/LandingPage';
import { DashBoard } from './Components/DashBoard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </>
  )
}

export default App;
