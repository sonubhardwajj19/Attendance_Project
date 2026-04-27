import { div, input } from "framer-motion/client";
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import axios from "axios";


export function DashBoard () {
  const navigate = useNavigate();
  const [showInput ,setshowInput] = useState(false);
  const [createSubject , setcreateSubject] = useState("");
  const [showDiv , setshowDiv] = useState(false);
  const [showsub , setshowsub] = useState([]);

    return <>
             <div>
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


            <div>
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
            </div>
    </>
}