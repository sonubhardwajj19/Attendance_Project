
export function Conditions () {

    return <>
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:80px_80px]">

         <div className="sticky top-0 z-50  backdrop-blur-[4000px]">
             <nav className="bg-black/35 text-white  " >
               <div className="flex justify-between p-3 mr-20">
                     <div className="h-12 mt-1 hover:cursor-pointer  mx-auto">       
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
                 </div>
              </nav>
         </div>




         <div className="mt-30 border border-2 border-[#7A1CAC] p-5 rounded-xl mx-auto w-250">
           <h1 className="text-3xl text-white font-bold">Terms & Conditions</h1>
           <li className="text-gray-300 mt-6 ml-5 font-semibold"> Welcome, if you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Attendle relationship with you in relation to this website.
           </li>
         </div>

         <div className="mt-30 border border-2 border-[#7A1CAC] p-5 rounded-xl mx-auto w-250">
           <h1 className="text-3xl text-white font-bold">Use of This Website</h1>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">The content of this website is for general information and use only and is subject to change without notice.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials on this website for any particular purpose.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
            
         </div>




         <div className="mt-30 border border-2 border-[#7A1CAC] p-5 rounded-xl mx-auto w-250">
           <h1 className="text-3xl text-white font-bold">Copyright & Trademarks</h1>
        
             <li className="text-gray-300 mt-6 ml-5 font-semibold">This website contains material which is owned by or licensed to us, including design, layout, graphics and appearance.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">Reproduction is prohibited other than in accordance with the copyright notice.</li>
             <li className="text-gray-300 mt-6 ml-5 font-semibold">All trademarks that are not the property of or licensed to the operator are acknowledged on the website.</li>
         </div>
           
         <div className="mt-30 border border-2 border-[#7A1CAC] p-4 rounded-xl mx-auto w-250">
             <li className="text-white  ml-5 font-semibold">By continuing to use the app and website, you fully accept and agree to these terms and conditions.</li>
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