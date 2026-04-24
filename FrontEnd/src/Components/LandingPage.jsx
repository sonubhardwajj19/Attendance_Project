import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

export function LandingPage () {
  const navigate = useNavigate();
    return <>
    <body className="bg-black">
       <div className="sticky top-0 z-50  backdrop-blur-[4000px]">
          <nav className="bg-black/35 text-white  " >
           <div className="flex justify-between p-3 ml-10 mr-20">

              <div className="h-12 mt-1 hover:cursor-pointer">       
                 <svg width="200" height="67" viewBox="0 40 500 200" xmlns="http://www.w3.org/2000/svg">

                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#4f46e5"/>
                      <stop offset="100%" stop-color="#22c55e"/>
                    </linearGradient>
                  </defs>

                  <circle cx="80" cy="90" r="40" stroke="url(#grad)" stroke-width="6" />
                  <text x="80" y="102" text-anchor="middle"
                        font-size="32" font-weight="bold"
                        fill="url(#grad)" font-family="Arial">
                    A
                  </text>
                  <text x="140" y="100"
                        font-size="64"
                        font-weight="bold"
                        fill="url(#grad)"
                        font-family="cursive"
                        letter-spacing="2">
                    ATTENDLE
                  </text>
                  <text x="145" y="145"
                        font-size="20"
                        fill="#94a3b8"
                        font-family="cursive"
                        letter-spacing="2">
                    SMART ATTENDANCE SYSTEM
                    </text>
                  </svg>
              </div>

              <div className="flex gap-20 p-3">
                <div className="font-semibold text-gray-400 hover:text-white">Features</div>
                <div className="font-semibold text-gray-400 hover:text-white">How it works ?</div>
                <div className="font-semibold text-gray-400 hover:text-white">Contact</div>
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
       </div>


       <div>
          <h1 className="text-white  text-7xl font-bold  text-center font-mono mt-10 tracking-tighter ">Attendance made <br/>simple & effortless.</h1>
          <p className="text-gray-400 font-mono text-center text-xl font-bold tracking-tight mt-10">Designed to save time , simplify attendance <br />management and monitor everything in one smooth and reliable experience.
          </p>
          <div className="mx-auto  rounded-xl h-7 w-25  pl-5  mt-15 font-semibold bg-white text-black hover:bg-gray-400"> 
              <button onClick={() => {
              navigate("/Signup");
                }}>Try now</button>
          </div>
       </div>


      <div className="mt-15">
        <div className="flex">
          <motion.div
              initial={{ opacity:0, scale:0.3 }}
              whileInView={{ opacity:1, scale:1 }}
              transition={{ duration:.8 }}
              viewport={{ once:false }}
              className="ml-20 h-100 w-120 mr-20  border bg-[#4F1C51] rounded-3xl mt-30 "
              >
              IMAGE
          </motion.div>

          <motion.div 

              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration:.6, delay:.2 }}
              viewport={{ once: false }}
              className=" border border-3 border-[#7A1CAC] ml-auto h-140 w-200 mr-20  border bg-black p-5 rounded-3xl mt-10">
              <div className="flex gap-3 mt-15">
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


      <div className="flex">
          <motion.div 
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration:.6, delay:.2 }}
              viewport={{ once: false }}
              className="mr-auto   border-3 border-white h-140 w-200 ml-20 p-5 rounded-3xl mt-10">
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
              className="mr-20 h-100 w-120 ml-auto border bg-[#4F1C51] rounded-3xl mt-30 "
              >
              imag3
          </motion.div>
        </div>

        <div className="flex">
          <motion.div
              initial={{ opacity:0, scale:0.3 }}
              whileInView={{ opacity:1, scale:1 }}
              transition={{ duration:.8 }}
              viewport={{ once:false }}
              className="ml-20 h-100 w-120 mr-20  border bg-[#4F1C51] rounded-3xl mt-30 "
              >
              IMAGE
          </motion.div>
          <motion.div 
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration:.6, delay:.2 }}
              viewport={{ once: false }}
              className="ml-auto h-140 w-200 mr-20  border bg-[#4F1C51] rounded-3xl mt-10">
              text
          </motion.div>
        </div>
       </div>
   
       </body>
    </>
}