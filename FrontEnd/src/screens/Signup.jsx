import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TopBar } from "../Components/Topbar";
import { Footer } from "../Components/Footer";


export function SignUp () {

    const [userName , setUserName ] = useState("");
    const [email , setEmail ] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <>
      <div className="flex flex-col bg-black bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">

        
          <TopBar>
             <div className="flex p-3">
                <div className="border  border-1 rounded-xl h-7 w-17  pl-3 font-semibold bg-white text-black hover:bg-gray-400"> 
                  <button onClick={() => {
                  navigate("/Login");
                    }}
                    className="hover:cursor-pointer">Login</button>
                </div>
             </div>
          </TopBar>



        <main  className="pt-40 flex-1">
            <div className="shadow-md shadow-gray-800 p-4 rounded-xl mx-auto w-140 bg-gray-200 p-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-blue-600 w- h-16 text-4xl font-bold text-center mb-5 flex justify-center p-2 shadow-lg rounded-xl">Create account </h1>
                    <div className=" mt-10 shadow-sm shadow-gray-400 p-5 rounded-xl hover:bg-stone-300 w-120"><input id="name "   className="text-cyan-950 bg-transparent border-none outline-none outline-none "  type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)}/></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-gray-400 p-5 rounded-xl hover:bg-stone-300 w-120"><input id="email "  className="text-cyan-950 bg-transparent border-none outline-none outline-none "  type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} /></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-gray-400 p-5 rounded-xl hover:bg-stone-300 w-120"><input id="password "  className="text-cyan-950 bg-transparent border-none outline-none outline-none" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/></div> <br/>
                    <div   onClick={ async () => {
                        const response = await axios.post("http://localhost:4000/signup" ,{
                            name : userName ,
                            email : email , 
                            password : password
                        })
                        navigate('/Login')
                    }}
                     className="  mt-10 shadow-md shadow-cyan-950 p-4 rounded-xl text-white text-center bg-blue-600 font-bold text-2xl hover:bg-blue-800 hover:cursor-pointer hover:-translate-y-0.5 w-120">
                      Sign up
                    </div>

                        <p className="text-center mt-4 text-blue-800 ">
                            Already registered ? <Link to="/login" className="hover:underline">Login</Link>
                        </p>
                </div>
            </div>

        </main>
            

        <Footer/>

       </div>
    </>
}