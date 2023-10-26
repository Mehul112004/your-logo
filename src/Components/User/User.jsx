import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    
  return (
    <div className='bg-gray-600 text-white p-6 w-full text-4xl text-center'>User : {id.toUpperCase()}</div>
  )
}

export default User