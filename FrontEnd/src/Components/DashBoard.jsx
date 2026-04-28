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
            


            {/* <div>
               <button onClick={async ()=> {
                  setshowDiv(true)
                  const response = await axios.get("http://localhost:4000/subject" ,
                     { headers : {
                        token : localStorage.getItem("token")
                     }}
                  )
                  setshowsub(response.data.subjects)
                  console.log(response.data.subjects)
            
               }}>Show records</button>
                 { showDiv && (
                  <>
                   { showsub.map((m,index) => (
                     <>
                        <div className="flex gap-10">
                           <div>{index + 1}</div>
                           <div>{m.name}</div>
                        </div>
                     </>
                   ))}
                  </>
                 )}
            </div> */}
            
         <div className="flex gap-10">

                  {/* Create subjects with create button */}
             <div className="flex gap-5">
                  <div className="flex gap-10">
                     <button onClick={()=> {
                        setshowInput(true)
                     }}
                     className="bg-gray-400">Add new subject</button>  
                  </div>

               { showInput && (
                  <>
                  <div>
                     <input type="text" placeholder="Enter the name of subject"  onChange={(e) => setcreateSubject(e.target.value)} className="bg-gray-400"/>
                  </div>
                  <div>
                     <button onClick={ async () => {
                           await axios.post("http://localhost:4000/subject" , 
                           { subjectName : createSubject} ,
                           { headers : {
                              token : localStorage.getItem("token")
                           }}
                        )

                     }} >Create subject</button> 
                  </div>
                  <div>
                     <button onClick={()=> {
                     setshowInput(false)
                  }}
                  className="bg-gray-400">Go back</button>
                  </div>      
                  </>
               )}
            </div>

      




                  {/* Existing subjects with refresh button */}

                  <div  className="flex gap-5">
                     <div >
                        {showsub.map((m,index) => (
                           <>
                           <div className="flex gap-5">
                              <div>{index + 1}</div>
                              <div>{m.name}</div>
                           </div>
                           </>
                        ))}
                     </div>
                     
                  <div >
                     <button onClick={async() => {
                        const res =  await axios.get("http://localhost:4000/subject" , 
                           { headers : {
                              token : localStorage.getItem("token")
                           }}
                        )
                     setshowsub(res.data.subjects)
                     }}>Refresh</button>
                  </div>
                  </div>
 


            {/* Delete */}

               <div>
                  <button onClick={ async () => {
                     const res =  await axios.get("http://localhost:4000/subject" , 
                        { headers : {
                           token : localStorage.getItem("token")
                        }}
                     )
                     setshowdelSub(res.data.subjects)
                     setshowDel(true)
                  } }  className="bg-gray-500">
                  Remove a subject
                  </button>

                  {showDel && (  
                     showdelSub.map(m => (
                        <>
                        <div className="flex gap-5">
                        <div key={m.Id}>{m.name}</div>
                        <div><button onClick={ async () => {
                              const res = await axios.delete("http://localhost:4000/subject" , 
                                 { headers : {
                                    token : localStorage.getItem("token")
                                 },
                                 data : {
                                    subjectId : m.Id
                                 }
                        })

                        setshowdelSub(n => n.filter(subjects => subjects.Id !== m.Id))

                        }} className="bg-gray-400">Delete</button></div>
                        </div>
                        </>
                     ))
                  )}
                  </div>
               </div>


    
      











            

       <div className="bg-black flex flex-col bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">
           

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
                <a href="#footer" className="font-semibold text-gray-400 hover:text-white">Contact</a>
                <p>Name with circle</p>
              </div>

               
            </div>
          </nav>





            <div className="flex flex-2">

            <div className="w-40 bg-zinc-900"> helllooo</div>

            </div> 


            

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