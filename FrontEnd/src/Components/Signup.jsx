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
      <div className="flex flex-col bg-black bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">

        
              
          <nav className="bg-black/35  text-white   fixed w-full top-0 z-50  backdrop-blur-[5000px] " >
           <div className="flex justify-between p-3 ml-10 mr-20 ">

              <div className="h-12 mt-1 hover:cursor-pointer">       
                 <svg width="200" height="67" viewBox="0 40 500 200" xmlns="http://www.w3.org/2000/svg">

                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5"/>
                      <stop offset="100%" stopColor="#22c55e"/>
                    </linearGradient>
                  </defs>

                  <circle cx="80" cy="90" r="40" stroke="url(#grad)" strokeWidth="6" />
                  <text x="80" y="102" textAnchor="middle"
                        fontSize="32" fontWeight="bold"
                        fill="url(#grad)" fontFamily="Arial">
                    A
                  </text>
                  <text x="140" y="100"
                        fontSize="64"
                        fontWeight="bold"
                        fill="url(#grad)"
                        fontFamily="cursive"
                        letterSpacing="2">
                    ATTENDLE
                  </text>
                  <text x="145" y="145"
                        fontSize="20"
                        fill="#94a3b8"
                        fontFamily="cursive"
                        letterSpacing="2">
                    SMART ATTENDANCE SYSTEM
                    </text>
                  </svg>
              </div>

              <div className="flex gap-20 p-3">
                <a href="#features" className="font-semibold text-gray-400 hover:text-white">Features</a>
                <a href="#works" className="font-semibold text-gray-400 hover:text-white">How it works ?</a>
                <a href="#footer" className="font-semibold text-gray-400 hover:text-white">Contact</a>
              </div>

             <div className="flex p-3">
                <div className="border  border-1 rounded-xl h-7 w-17  pl-3 font-semibold bg-white text-black hover:bg-gray-400"> 
                  <button onClick={() => {
                  navigate("/Login");
                    }}>Login</button>
              </div>
             </div>
            </div>
          </nav>



        <main  className="pt-40 flex-1">
            <div className="border border-2 border-cyan-950 p-5 rounded-xl mx-auto w-170 bg-gray-950 p-20">
                <div>
                    <h1 className="text-gray-200 text-4xl font-bold text-center"> Sign Up</h1>
                    <div className=" mt-10 shadow-sm shadow-cyan-950 p-5 rounded-xl hover:bg-stone-800"><input id="name "   className="text-white bg-transparent border-none outline-none outline-none f"  type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)}/></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-cyan-950 p-5 rounded-xl hover:bg-stone-800"><input id="email "  className="text-white bg-transparent border-none outline-none outline-none "  type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} /></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-cyan-950 p-5 rounded-xl hover:bg-stone-800"><input id="password "  className="text-white bg-transparent border-none outline-none outline-none" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/></div> <br/>
                    <div className=" mt-10 shadow-sm shadow-cyan-950 p-3 rounded-xl w-40 mx-auto text-gray-200 text-center font-semibold text-xl hover:bg-stone-800">
                    <button onClick={ async () => {
                        const response = await axios.post("http://localhost:4000/signup" ,{
                            name : userName ,
                            email : email , 
                            password : password
                        })
                        navigate('/Login')
                    }}
                     >
                        Sign Up</button>
                  </div>

                        <p className="text-center mt-7 text-yellow-600 ">
                            Already registered ? <Link to="/login" className="hover:underline">Login</Link>
                        </p>
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