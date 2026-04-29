import { div, input } from "framer-motion/client";
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios";


export function DashBoard () {
  const navigate = useNavigate();
  const [showInput ,setshowInput] = useState(false);
  const [createSubject , setcreateSubject] = useState("");
  const [showDel , setshowDel] = useState(false);
  const [showsub , setshowsub] = useState([]);
  const [showdelSub , setshowdelSub] = useState([]);

  useEffect(()=> {
     async function getSubjects() {
      const res =  await axios.get("http://localhost:4000/subject" ,
         {headers: {
           token : localStorage.getItem("token")
         }}
       )
      
       setshowsub(res.data.subjects)
     } 

     getSubjects()
  },[])

  

    return <>
               

       <div className="bg-black min-h-screen flex flex-col bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">
           

          <nav className="bg-black  text-white   fixed w-full top-0 z-50  backdrop-blur-[5000px] " >
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
                <a href="#footer" className="font-semibold text-gray-400 hover:text-white">Contact</a>
                <p>Name with circle</p>
              </div>

               
            </div>
          </nav>





      <div className="flex flex-1 pt-20">

         <div className="pt-4 w-120 bg-gray-950 border-r-2 border-t-2 border-gray-500 rounded-t-lg items-center">
            <div className="w-full h-12 text-center text-yellow-700 border-b-1 border-gray-700 rounded-xl text-xl font-semibold flex justify-between">
               <span className="ml-7">Existing subjects</span>
                  <button onClick={async() => {
                        const res =  await axios.get("http://localhost:4000/subject" , 
                                 { headers : {
                                    token : localStorage.getItem("token")
                                 }}
                              )
                           setshowsub(res.data.subjects)
                           }}
                           className=" bg-gray-900 text-gray-300 h-8 w-22 text-lg border border-yellow-900 border-1 rounded-3xl hover:cursor-pointer hover:bg-stone-900 hover:text-white mr-3">Refresh
                  </button>
            </div>

            <div  className="flex mt-2">
               <div className="flex flex-col gap-5">
                  {showsub.map((m,index) => (
                     <>
                     <div className="flex h-20 w-100">
                        <div className="flex p-2">
                            <div className="bg-zinc-700 text-black font-semibold h-15 w-15 ml-5 p-4 text-xl border border-yellow-900 border-l-1 border-t-1 border-b-1 text-center rounded-l-lg">{index + 1}</div>
                            <div onClick={()=>{
                              alert("Hello")
                            }} className="bg-gray-900 text-gray-400 h-15 w-80 p-4 text-xl border border-yellow-900 border-1 rounded-r-4xl hover:cursor-pointer  hover:bg-stone-900 hover:text-white">{m.name}</div>
                        </div>
                     </div>
                     </>
                  ))}
               </div>
            </div>

         </div>






         <div className="flex-1 bg-gray-900/80">
             
         </div>   
      </div>
          

            

             <div id="footer" className="h-150 w-full bg-black border-y-2 border-stone-900 flex flex-col ">
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