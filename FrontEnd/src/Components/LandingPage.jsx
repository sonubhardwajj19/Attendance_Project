import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

export function LandingPage () {
  const navigate = useNavigate();
    return <>
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
                <a href="#features" className="font-semibold text-gray-400 hover:text-white">Features</a>
                <a href="#works" className="font-semibold text-gray-400 hover:text-white">How it works ?</a>
                <a href="#footer" className="font-semibold text-gray-400 hover:text-white">Contact</a>
              </div>

             <div className="flex gap-1 p-3">
                <div  className="h-7 w-20  pl-3 font-semibold order rounded-xl text-gray-400 hover:text-white ">
                  <button onClick={() => {
                    navigate("/signup");
                   }}>Sign Up  </button>
                </div>
                <div className="border  border-1 rounded-xl h-7 w-17  pl-3 font-semibold bg-white text-black hover:bg-gray-400"> 
                  <button onClick={() => {
                  navigate("/Login");
                    }}>Login</button>
              </div>
             </div>
            </div>
          </nav>
       



    <main className="pt-30 flex-1">

       <div>
          <h1 className="text-white  text-7xl font-bold  text-center font-mono mt-10 tracking-tighter ">Attendance made <br/>simple & effortless.</h1>
          <p className="text-gray-400 font-mono text-center text-xl font-bold tracking-tight mt-15">Designed to save time , simplify attendance <br />management and monitor everything in one smooth and reliable experience.
          </p>
          <div className="mx-auto  rounded-xl h-10 w-25  pl-4 pt-1.5  mt-30 font-bold bg-white text-black hover:bg-gray-400  border"> 
              <button onClick={() => {
              navigate("/Signup");
                }}>Try now</button>
          </div>
       </div>


      <div className="mt-40 ">
        <div  id="features"  className="flex">
          <motion.div
              initial={{ opacity:0, scale:0.3 }}
              whileInView={{ opacity:1, scale:1 }}
              transition={{ duration:.8 }}
              viewport={{ once:false }}
              className="ml-20 h-100 w-120 mr-20 border-2  border-white rounded-3xl mt-30 "
              >
  
          </motion.div>

          <motion.div 

              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration:.6, delay:.2 }}
              viewport={{ once: false }}
              className=" bg-zinc-900/80 border border-3 border-[#7A1CAC] ml-auto h-140 w-200 mr-20  border  p-5 rounded-3xl mt-10 hover:shadow-md hover:shadow-[#7A1CAC] ">
              <div className="flex gap-3 mt-15 ">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                 </svg>
                  <h1 className="text-4xl font-bold text-[#7A1CAC]">Smart Tracking</h1>
              </div>
              <li className="ml-14 mt-4 text-xl font-semibold text-white">Real-time attendance monitoring with seamless and accurate check-ins.</li>

              <div className="flex gap-3 mt-15">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                </svg>
                <h1 className="text-4xl font-bold text-[#7A1CAC]">Easy Management</h1>
              </div>
                <li className="ml-14 mt-4 text-xl font-semibold text-white">Manage records, absences, and schedules effortlessly from one platform.</li>

              <div className="flex gap-3 mt-15">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                </svg>
                <h1 className="text-4xl font-bold text-[#7A1CAC]">Automated Reports</h1>
             </div>
               <li className="ml-14 mt-4 text-xl font-semibold text-white">Generate attendance reports instantly with powerful analytics and insights.</li>

          </motion.div>
        </div>



        <div   id="works" className="flex mt-20">
            <motion.div 
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration:.6, delay:.2 }}
                viewport={{ once: false }}
                className=" bg-zinc-900/80 mr-auto  border-3 border-white h-140 w-200 ml-20 p-5 rounded-3xl mt-10 hover:shadow-md hover:shadow-white">
                          <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                    <h1 className="text-4xl font-bold text-white">Sign Up</h1>
                </div>
                <li className="ml-14 mt-4 text-xl font-semibold text-[#7A1CAC]">Create your account easily using your email and get started in seconds.</li>

                <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                  <h1 className="text-4xl font-bold text-white">Login</h1>
                </div>
                  <li className="ml-14 mt-4 text-xl font-semibold text-[#7A1CAC]">Securely log in anytime to access your dashboard and manage your data.</li>

                <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                  <h1 className="text-4xl font-bold text-white">Start managing your attendance</h1>
              </div>
                <li className="ml-14 mt-4 text-xl font-semibold text-[#7A1CAC]">Create subjects, mark attendance, and maintain all records in one simple system.</li>


            </motion.div>
            <motion.div
                initial={{ opacity:0, scale:0.3 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{ duration:.8 }}
                viewport={{ once:false }}
                className="mr-20 h-100 w-120 ml-auto  mt-30 text-3xl bg-black"
                >
         
                <img src="/src/assets/sig.png" alt="Sorry error occurred"  className="h-full w-full object-fit  rounded-xl p-1"/>
            </motion.div>
        </div>



        <div className="flex mt-20">
            <motion.div
                initial={{ opacity:0, scale:0.3 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{ duration:.8 }}
                viewport={{ once:false }}
                className="ml-20 h-100 w-120 mr-20  border-2 border-white rounded-3xl mt-30 "
                >
            </motion.div>

            <motion.div 

                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration:.6, delay:.2 }}
                viewport={{ once: false }}
                className="bg-zinc-900/80 border border-3 border-[#7A1CAC] ml-auto h-140 w-200 mr-20  border p-5 rounded-3xl mt-10  hover:shadow-md hover:shadow-[#7A1CAC] ">
                  <h4 className=" text-6xl ml-6 mt-4 font-bold text-white">Who it's for</h4>
                <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                    <h1 className="text-4xl font-bold text-[#7A1CAC]">Schools & Colleges</h1>
                </div>
                <li className="ml-14 mt-4 text-xl font-semibold text-white">Mark attendance in seconds.</li>
              
                <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                  <h1 className="text-4xl font-bold text-[#7A1CAC]">Companies / Offices</h1>
                </div>
                  <li className="ml-14 mt-4 text-xl font-semibold text-white">Track daily employee attendance and reduce manual check-ins</li>

                <div className="flex gap-3 mt-15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#7A1CAC" className="size-6 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                  </svg>
                  <h1 className="text-4xl font-bold text-[#7A1CAC]">Training Institutes</h1>
                </div>
                <li className="ml-14 mt-4 text-xl font-semibold text-white">Monitor participant engagement</li>
            </motion.div>
           </div>
       </div>




       <div  className="w-full h-170 mt-60  border-y-3 border-gray-600 bg-zinc-900/80">

          <h1 className="text-white text-6xl font-semibold text-center p-16">Why Attendle ?</h1>
              
            <motion.div
              initial={{opacity:0 , scale:.2 ,y:-140}}
              whileInView={{opacity:1 , scale:1 , x :-310 , y: 130 ,backgroundColor:"#1c1917"}}
              transition={{duration:1}}
              viewport={{once:false}}
              className="mx-auto h-60 w-110 border border-2 border-[#7A1CAC] rounded-2xl relative  duration-600 hover:z-50 hover:-translate-y-2 hover:scale-105  hover:cursor-pointer " >
            <div className="p-3">
              <h1 className="text-3xl font-bold p-1 text-white ml-7 ">Eliminate Manual Attendance</h1>
              <li className="text-lg p-4 ml-4 text-white font-semibold">Replace outdated registers, spreadsheets, and repetitive manual processes with a streamlined digital system built to save time and reduce effort.</li>
              </div>
              </motion.div>

            <motion.div
            initial={{opacity:0 , scale:.2 , y:-140}}
            whileInView={{opacity:1, scale:1 , x:-470 , y:-280 , backgroundColor:"#1c1917"}}
            transition={{duration:1}}
            viewport={{once:false}}
            className="mx-auto h-60 w-110 bg- border border-2 border-[#7A1CAC] rounded-2xl relative duration-600 hover:z-50 hover:translate-y-2 hover:scale-105 hover:cursor-pointer">
              <div className="p-3">
              <h1 className="text-3xl font-bold p-1 text-white ml-7">Designed for Speed and Simplicity</h1>
              <li className="text-lg p-4 ml-4 text-white font-semibold">Mark attendance, review records, and manage workflows quickly through an intuitive experience built for efficiency.</li>
              </div>
    
            </motion.div>


            <motion.div
            initial={{opacity:0 , scale:.2 , y:-510}}
            whileInView={{opacity:1, scale:1  , x:20, y:-440 , backgroundColor:"#1c1917"}}
            transition={{duration:1}}
            viewport={{once:false}}
            className="mx-auto h-60 w-110 rounded-2xl border border-2 border-[#7A1CAC] relative  duration-600 hover:z-50 hover:-translate-y-2 hover:scale-105  hover:cursor-pointer ">
                        <div className="p-3">
              <h1 className="text-3xl font-bold p-1 text-white ml-7">Built for Accuracy and Reliability</h1>
              <li className="text-lg p-4 ml-4 text-white font-semibold">Avoid errors caused by manual tracking and maintain consistent, dependable attendance records you can trust.</li>
              </div>
            </motion.div>
            
            <motion.div
            initial={{opacity:0 , scale:.2 , y:-700}}
            whileInView={{opacity:1, scale:1 , x:250 , y:-550 ,backgroundColor:"#1c1917"}}
            transition={{duration:1}}
            viewport={{once:false}}
            className="mx-auto h-60 w-110 rounded-2xl border border-2 border-[#7A1CAC] relative  duration-600 hover:z-5 hover:-translate-y-2 hover:scale-105  hover:cursor-pointer ">
                        <div className="p-3">
              <h1 className="text-3xl font-bold p-1 text-white ml-7">Simple for Users, Powerful for Teams</h1>
              <li className="text-lg p-4 ml-4 text-white font-semibold">An easy-to-use interface for daily users combined with robust tools for administrators and managers.</li>
              </div>
            </motion.div>
            
            <motion.div
            initial={{opacity:0 , scale:.2 , y:-700}}
            whileInView={{opacity:1, scale:1 , x:510 , y:-970 , backgroundColor:"#1c1917" }}
            transition={{duration:1}}
            viewport={{once:false}}
            className="mx-auto h-60 w-110 rounded-2xl border border-2  border-[#7A1CAC] relative  duration-600 hover:z-5 hover:translate-y-2 hover:scale-105   hover:cursor-pointer ">
                        <div className="p-3">
              <h1 className="text-3xl font-bold p-1 text-white ml-7">Stay Organized Automatically</h1>
              <li className="text-lg p-4 ml-4 text-white font-semibold">Keep attendance records structured, accessible, and consistently updated without additional administrative burden.</li>
              </div>
            </motion.div>
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