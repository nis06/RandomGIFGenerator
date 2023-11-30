
import React,{useEffect, useState} from 'react'
import axios from 'axios';


const API_KEY='MmUWorPQcpESjJwMJNf33FelgXlpAx0v'
const Url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    
    const [gif,setGif]= useState('');
    const [loading,setLoading] = useState(false)
    
   
    async function fetchData(tag){
       setLoading(true)
       const {data}=await axios.get(tag?`${Url}&tag=${tag}` :Url);
       const imageSource=data.data.images.downsized_large.url;  
       setGif(imageSource);
       setLoading(false)
    }
    useEffect(()=>{
       fetchData();
    },[])
    
   
   return {gif,loading,fetchData}
   
}

export default useGif
