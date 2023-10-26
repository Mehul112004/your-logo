import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/mehul112004")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // })
    const data =useLoaderData();

  return (
   <>
   <div className='flex justify-center align-middle flex-col p-8' >
    <h1 className='text-center m-4 bg-gray-400 text-2xl p-4 text-white'>Github Followers :{data.followers}</h1>
    <div className='overflow-hidden w-full flex align-middle justify-center'>
    <img src={data.avatar_url} alt="github profile picture" className='round'/>
    </div>
   </div>
   </>
  )
}

export default Github

export const githubInfo=async()=>{
    const response = await fetch("https://api.github.com/users/mehul112004")
    const data = await response.json()
    return data;
}