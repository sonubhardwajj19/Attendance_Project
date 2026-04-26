
export function Policy () {

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
              <h1 className="text-3xl text-white font-bold">Privacy Policy</h1>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Service and informs you about your privacy rights and how the law protects you.
               We use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </li>
            </div>

            <div className="mt-30 border border-2 border-[#7A1CAC] p-5 rounded-xl mx-auto w-250">
              <h1 className="text-3xl text-white font-bold">Interpretation and Definitions</h1>
              <h2 className="text-2xl text-white font-semibold mt-5">Interpretation</h2>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">Words where the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
              </li>
              <h2 className="text-2xl text-white font-semibold mt-5">Definitions</h2>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">You means the individual using the Service or the company/legal entity on whose behalf the Service is being used</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Affiliate means an entity under common control (50% or more ownership).</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Account means a unique account created to access the Service.</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Service refers to the Website</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Country refers to Uttar Pradesh, India</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Service Provider refers to individuals/companies that process data on behalf of the Company.</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold">Third-party Social Media Service refers to any site that allows users to log in or create an account.</li>
                <li className="text-gray-300 mt-6 ml-5 font-semibold"> Usage Data refers to data collected automatically, such as device information and usage patterns.</li>
            </div>
              
            <div className="mt-30 border border-2 border-[#7A1CAC] p-4 rounded-xl mx-auto w-250">
              <h1 className="text-3xl text-white font-semibold">Use of Your Personal Data</h1>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To provide and maintain the Service</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To manage user accounts and access permissions</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To fulfill purchase contracts</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To contact you regarding updates, notices, and security notifications</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To provide offers and recommendations unless you opt-out</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To respond to support/assistance requests</li>
              <li className="text-gray-300 mt-6 ml-5 font-semibold">To analyze platform performance and usage</li>
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