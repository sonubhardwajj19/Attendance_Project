import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {SignUp} from './screens/Signup'
import { Login } from './screens/Login'
import { LandingPage } from './screens/LandingPage';
import { DashBoard } from './screens/DashBoard';
import { Policy } from './Components/Policy';
import { Conditions } from './Components/Condition';

function App() {

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
