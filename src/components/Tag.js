import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Spinner  from './Spinner';
import useGif from '../hooks/useGif';
// const API_KEY='MmUWorPQcpESjJwMJNf33FelgXlpAx0v'
//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
 
//  const [gif,setGif]= useState('');
//  const [loading,setLoading] = useState(false)
 const [tag,setTag]=useState('')

//  async function fetchData(){
//     setLoading(true)
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     //const url=`https://api.giphy.com/v1/gifs/random?api_key=MmUWorPQcpESjJwMJNf33FelgXlpAx0v&tag=${tag}`
//     const {data}=await axios.get(url);
//     const imageSource=data.data.images.downsized_large.url;  
//     console.log(imageSource) 
//     setGif(imageSource);
//     setLoading(false)
//  }
//  useEffect(()=>{
//     fetchData();
//  },[])

const   {gif,loading,fetchData}=useGif(tag);
 function clickHandler(){   
   fetchData(tag);
 }



  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] mb-[20px]'>
      <h1 className='mt-[15px] mb-[20px] text-2xl underline uppercase font-semibold'> Random {tag} Gif</h1>

      {
        loading?(<Spinner/>):(<img src={gif} width='450'/>)
      }
      
      <input
        className='w-10/12 bg-white text-lg py-3 rounded-lg mb-[3px] text-center'
        onChange={(event)=>setTag(event.target.value) }
        value={tag}
      />
      <button 
      className='w-10/12 bg-white text-lg py-3 rounded-lg mb-[10px] '
      onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Tag

