import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../Components/Topbar";

export function Login () {

    const [userName , setUserName ] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <>
      <div className="flex flex-col bg-black bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">

        
              
          <TopBar>
              <div className="flex gap-1 p-3">
                  <div  className="border  border-1 rounded-xl h-7 w-17  pl-1 font-semibold bg-white text-black hover:bg-gray-400">
                    <button onClick={() => {
                      navigate("/signup");
                      }}
                      className="hover:cursor-pointer">Sign Up  </button>
                  </div>
              </div>
          </TopBar>




         <main className="flex flex-2 pt-40">
            <div className="shadow-xl p-20 rounded-xl mx-auto w-140 bg-gray-200">
                <div className="flex flex-col items-center">
                    <h1 className="bg-blue-600 text-white w-50 h-16 text-4xl font-bold text-center mb-5 flex justify-center p-2 shadow-md shadow-blue-800 rounded-xl"> Sign in</h1>
                    <div className=" mt-10 shadow-sm shadow-gray-400 p-5 rounded-xl hover:bg-stone-300 w-120"><input id="name"   className="text-cyan-950 bg-transparent border-none outline-none"  type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)}/></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-gray-400 p-5 rounded-xl hover:bg-stone-300 w-120"><input id="password"  className="text-cyan-950 bg-transparent border-none outline-none " type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/></div> <br/>
                    <div    onClick={ async () => {
                          const response = await axios.post("http://localhost:4000/signin" ,{
                              name : userName ,
                              password : password
                          })
                          localStorage.setItem("token", response.data.token);
                          navigate('/DashBoard')
                      }}
                     className=" mt-10 shadow-md shadow-cyan-950 p-4 rounded-xl text-white text-center bg-blue-600 font-bold text-2xl hover:bg-blue-800 hover:cursor-pointer hover:-translate-y-0.5 w-120">
                        Login
                  </div>
                </div>
            </div>
         </main>

            



            <div id="footer" className="h-150 w-full bg-black border-y-2 border-stone-900 flex flex-col mt-60">
                <div className="flex ml-50 mt-10 gap-60">
                <div>
                <h2 className="text-yellow-900 text-[40px] font-semibold">Attendle</h2>
                <div> <p className="font-semibold text-gray-400">© 2026 Attendle. All rights reserved.</p></div>
                </div>
                <div className="mt-1">
                <div> <a href="policies" className="font-semibold text-gray-400 hover:text-white">Privacy Policy</a></div>
                <div> <a href="terms&conditions" className="font-semibold text-gray-400 hover:text-white">Terms & Conditions</a></div>  
                </div>
                <div className=" mt-1"> 
                <p className="font-semibold text-gray-400 hover:text-white">Drop your queries at</p>
                <p className="font-semibold text-gray-400 hover:text-white">zsb1926@gmail.com</p>
                </div>
            </div>

            <div className="mt-auto">
                <h1 className=" bg-gradient-to-b from-white to-black bg-clip-text text-transparent text-[300px] font-bold ">ATTENDLE</h1>
            </div>
            </div>


       </div>
    </>
}