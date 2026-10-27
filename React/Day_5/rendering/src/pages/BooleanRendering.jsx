
import React from 'react'
import { Link } from 'react-router-dom'

const BooleanRendering = () => {
    let isActive = true

    return (
    <div className='bg-teal-400 p-15'>
        <div className='bg-white w-48 p-5 rounded-2xl font-bold flex flex-col items-center'>
            <h1 className='text-center'>Boolean Rendering</h1>
            <Link to="/" className='bg-blue-900 text-white px-4 py-2 mt-3 rounded-xl'>Back</Link>
        </div>
        <div className='bg-white w-64 p-5 rounded-2xl text-center flex justify-center items-center mx-auto mt-10'>{isActive ? "This is Boolean" : "This is Not Boolean"}</div>

    </div>
    )
}

export default BooleanRendering
