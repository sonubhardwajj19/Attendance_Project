import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login () {

    const [userName , setUserName ] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <>
        <div style={{display: "grid" , justifyContent: "center"}}>
            <div id="container"  >
                <h1>Log In </h1>
                <div><input id="name" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/></div> <br/>
                <div><input id="password" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/></div> <br/>
                <button onClick={ async () => {
                    const response = await axios.post("http://localhost:4000/signin" ,{
                        name : userName ,
                        password : password
                    })
                    localStorage.setItem("token", response.data.token);
                    navigate('/DashBoard')
                 }}>
                    Log In</button>
            </div>
        </div>
    </>
}