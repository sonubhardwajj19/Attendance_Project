import { useState } from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {SignUp} from './Components/Signup'
import { Login } from './Components/Login'
import { LandingPage } from './Components/LandingPage';
import { DashBoard } from './Components/DashBoard';
import { Policy } from './Components/Policy';
import { Conditions } from './Components/Condition';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/policies" element={<Policy/>}/>
        <Route path="/terms&conditions" element={<Conditions/>}/>
      </Routes>
    </>
  )
}

// test
export default App;
