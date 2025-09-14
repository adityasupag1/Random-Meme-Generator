import axios from 'axios'
import { useEffect, useState } from "react";
 
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const TagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=r`;

const useGif=(tag)=>{
  
 const [gif, setGif] = useState('')
 const [loading, setLoading] = useState(false)


 async function fetchData(tag) {
  setLoading(true)
 const {data} = await axios.get(tag ? `${url}&tag=${tag}&rating=r` : url);
 const imageSource = data.data.images.downsized_large.url;
 setGif(imageSource);
 setLoading(false)

 }

 useEffect(()=>{
  setTimeout(()=>{
     fetchData();
  },1000)
 },[])

 return {gif,loading,fetchData}
 
}
export default useGif