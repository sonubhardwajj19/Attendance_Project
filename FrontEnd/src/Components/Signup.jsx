import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function SignUp () {

    const [userName , setUserName ] = useState("");
    const [email , setEmail ] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <>
        <div style={{display: "grid" , justifyContent: "center"}}>
            <div id="container"  >
                <h1> Sign Up</h1>
                <div><input id="name"  type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/></div> <br/>
                <div><input id="email"  type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} /></div> <br/>
                <div><input id="password"  type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/></div> <br/>
                <button onClick={ async () => {
                    const response = await axios.post("http://localhost:4000/signup" ,{
                        name : userName ,
                        email : email ,
                        password : password
                    })
                    navigate('/Login')
                 }}>
                    Sign Up</button>
                    <p>
                        Already registered ? <Link to="/login">Login</Link>
                    </p>
            </div>
        </div>
    </>
}