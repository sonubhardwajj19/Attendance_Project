export function Footer () {

    return <>
        
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
    </>
}   