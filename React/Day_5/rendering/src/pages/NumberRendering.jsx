
import React from 'react'
import { Link } from 'react-router-dom'

const NumberRendering = () => {

    const number = 56799375267

    return (
        <div className="bg-green-300 font-bold p-10 ">
            <div className="flex gap-10 mx-25">

                <div className="flex flex-col items-center">
                    <h1 className="mt-3 bg-white text-center w-44 h-25 p-5 rounded-3xl text-xl">Number Rendering</h1>
                    <Link to="/" className="bg-blue-900 text-white px-4 py-3 rounded-3xl font-bold">Back</Link>
                </div>

                <div className="font-medium text-center flex-1">
                    <h2 className="text-2xl font-bold mb-5">Number Rendering Example</h2>
                    <p className="bg-white p-5 rounded-2xl">{number}</p>
                </div>

            </div>
        </div>
    )
}

export default NumberRendering