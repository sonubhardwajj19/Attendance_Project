export function TopBar ( props) {
    return <nav className="bg-black/35  text-white   fixed w-full top-0 z-50  backdrop-blur-[5000px] " >
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
         
         {props.children}
     </div>
   </nav>
}