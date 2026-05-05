import { div, input } from "framer-motion/client";
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios";
import { motion } from "framer-motion";


export function DashBoard () {
  const navigate = useNavigate();
  const [showInput ,setshowInput] = useState(false);
  const [createSubject , setcreateSubject] = useState("");
  const [showDel , setshowDel] = useState(false);
  const [showsub , setshowsub] = useState([]);
  const [showdelSub , setshowdelSub] = useState([]);
  const [showsuccess , setshowsuccess] = useState(false);
  const [successmsg, setSuccessmsg] = useState([]);
  const [existingDiv , setexistingDiv] = useState(false);
  const [existingDivData , setexistingDivData] = useState([]);

  
  
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

            <div className="pt-4 w-120 bg-gray-950 border-r-2 border-t-2 border-gray-500 rounded-t-lg items-center ">
               <div className="w-full h-12 text-center text-yellow-700 border-b-1 border-gray-700 rounded-xl text-xl font-semibold flex justify-between">
                  <span className="ml-7">Existing subjects</span>
                     <button onClick={async() => {
                           setshowsuccess(false)
                           setSuccessmsg([])
                           const res =  await axios.get("http://localhost:4000/subject" , 
                                    { headers : {
                                       token : localStorage.getItem("token")
                                    }}
                                 )
                              setshowsub(res.data.subjects)
                              }}
                              className=" bg-gray-900 text-gray-300 h-8 w-22 text-lg border border-yellow-900 border-1 rounded-3xl hover:cursor-pointer hover:bg-stone-900 hover:text-white mr-3">
                                 Refresh
                              
                     </button>
                     
               </div>

               <div  className="flex mt-2 ">
                  <div className="flex flex-col gap-5">
                     {showsub.map((m,index) => (
                        <>
                        <div className="flex h-20 w-100 ">
                           <div className="flex p-2">
                              <div className="bg-zinc-700 text-black font-semibold h-15 w-15 ml-5 p-4 text-xl border border-yellow-900 border-l-1 border-t-1 border-b-1 text-center rounded-l-lg">
                                 {index + 1}</div>
                              <div onClick={()=>{
                                 setexistingDiv(true);
                                 setexistingDivData([m]);
                              }} 
                              className=" relative grid items-center group bg-gray-900 text-gray-400 h-15 w-80 p-4 text-xl border border-yellow-900 border-1 rounded-r-4xl hover:cursor-pointer  hover:bg-stone-900 hover:text-white">
                                 {m.name}
                                 <div className="absolute opacity-0 group-hover:opacity-100 bg-gray-700 text-gray-300 text-sm p-2 mt-10 w-20 rounded-xl font-semibold ml-30 transition duration-800">
                                       Click here to edit
                                 </div>

                              </div>
                           </div>
                        </div>
                        </>
                     ))}
                  </div>
               </div>

            </div>





            <div className="mx-auto justify-items-center">

                  
                  <div className="p-10 ">
                     <button onClick={ () => {
                        setshowInput(true)
                           }}
                           className="bg-gray-400/40 h-18 w-100 rounded-2xl text-gray-300 text-3xl font-semibold border border-2 border-gray-400 hover:bg-stone-600 hover:shadow-xs hover:shadow-white hover:scale-101 hover:white">
                              Add a new subject
                     </button>
                  </div>  
                    
 
                           
                     {showInput && (
                        <> 
                        <motion.div 
                        initial={{opacity:0 , scale:0.5}}
                        whileInView={{opacity:1 , scale:1}}
                        transition={{duration:.3 }}
                        className="mt-12 mb-20 bg-stone-600/50 h-40 w-180 rounded-3xl p-4 border-2 border-gray-500 justify-items-center flex gap-10 items-center hover:scale-101">
                              <div><input type="text"  placeholder="Enter the name of subject" maxLength="30" onChange={ (e) => setcreateSubject(e.target.value)}
                              className="bg-zinc-900/70 h-17 w-128 rounded-3xl border-2 border-gray-800 text-xl font-semibold text-gray-400 p-5 hover:bg-stone-700 hover:text-white hover:border-gray-900 outline-none" /></div>
                              <div><button  onClick={ async () => {
                                    const res = await axios.post("http://localhost:4000/subject" ,
                                       {
                                           subjectName : createSubject
                                       },
                                       {headers : {
                                          token : localStorage.getItem("token")
                                       }} 
                                 )

                                 if(res) {
                                    setshowsuccess(true)
                                    setSuccessmsg( prev => [...prev ,"Subject added !"] )
                                 }
                              }}
                              className="bg-gray-900 w-34 h-13 text-xl text-yellow-700 font-semibold border-1 rounded-2xl border-yellow-900 hover:bg-stone-900 hover:text-gray-300">Add subject</button></div>
                        </motion.div>
                        



                     

   
                        {showsuccess && (
                              successmsg.map(msg => (
                              <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              className="bg-gray-900 rounded-3xl border border-yellow-900  mb-18"
                              >
                              <div className="h-19 w-88 text-3xl font-bold text-green-600 text-center p-1 ">
                                 {msg}
                                 <div className="text-sm font-semibold text-gray-400 mt-2">
                                    (Click on "Refresh" to see newly added subject)
                                 </div>
                              </div>
                              </motion.div>
                           ))
                        )}
                        
                        </>
                     )}  
                        <div>


                        { existingDiv && ( 
                           <motion.div
                           initial={{ opacity: 0, scale: 0.5 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.4}}
                           viewport={{once:true}}
                           className="bg-gray-400/40 h-160 w-180 rounded-3xl mt-8 border-2 border-gray-400">
                              <div className="flex justify-between items-center mt-6">
                                 <div className="bg-gray-900 border-2 border-gray-400 h-16 rounded-2xl ml-6 flex items-center"> 
                                    {existingDivData.map((m) => (
                                       <div className="text-white text-3xl font-semibold ml-4 mr-4 mb-2">{m.name}</div>
                                          ))}
                                       </div>
                                 <button
                                 onClick={ () => {
                                    setexistingDiv(false);
                                 }}
                                 className="bg-white text-gray-700 text-md font-bold h-9 w-18 rounded-xl border-2 border-gray-500 hover:bg-red-500 hover:text-white mr-6 hover:border-white">
                                  Close </button>
                              </div>



                              <div>
                                 {/* Calendar*/}
                              </div>


                              <button onClick={ async () => {
                                  const response = await axios.delete("http://localhost:4000/subject" , {
                                    data : {
                                       subjectId : existingDivData[0].Id
                                    },
                                    headers : {
                                       token : localStorage.getItem("token")
                                    }
                                 })
                  

            
                              }}
                              className="bg-white"
                              >Delete</button>

                           </motion.div>
                            )    
                        }
                        </div>

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