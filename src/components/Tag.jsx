import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./spinner";
import useGif from "../hooks/useGif";


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const Tag =()=>{
  
 const [tag, setTag] = useState('')
 const {gif, loading, fetchData} = useGif(tag);
 
 

  return (
    <div className=" w-1/2 bg-blue-500 mx-auto rounded-lg border  border-black flex flex-col items-center gap-y-5 mt-[15px] ">
     <h1 className="mt-[15px] text-2xl font-bold underline uppercase ">
     Random {tag} Gif
     </h1>
   {
     loading ? (<Spinner/>) : (  <img 
     className="h-[250px]"
     src={gif}/>)
   }
   <input 
   className="w-11/12 text-lg py-2 bg-white rounded-lg mb-2 text-center"
   onChange={(event)=>{setTag(event.target.value)}}
   type="text"
   value={tag}
    required
    />
     <button
     className=" w-11/12 bg-yellow-400 text-lg py-2 rounded-lg mb-5 "
      onClick={()=>{fetchData(tag)}}
      >Generate</button>
    </div>
  )
}
export default Tag