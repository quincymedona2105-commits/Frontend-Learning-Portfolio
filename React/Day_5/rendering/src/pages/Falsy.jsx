
import React from 'react'
import { Link } from 'react-router-dom'

const BooleanRendering = () => {
    let falsy = null

    return (
    <div className='bg-teal-400 p-10'>
        <div className='bg-white w-48 p-5 rounded-2xl font-bold flex flex-col items-center'>
            <h1 className='text-center'>Falsy</h1>
            <Link to="/" className='bg-blue-900 text-white px-4 py-2 mt-3 rounded-xl'>Back</Link>
        </div>
        <div className='bg-white w-64 p-5 rounded-2xl text-center flex justify-center items-center mx-auto mt-10'>
        {falsy?? "React"}
        </div>

    </div>
    )
}

export default BooleanRendering
