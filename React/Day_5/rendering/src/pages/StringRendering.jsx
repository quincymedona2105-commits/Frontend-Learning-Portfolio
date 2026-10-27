
import React from 'react'
import { Link } from 'react-router-dom'

const StringRendering = () => {
    let title = "A.P.J. Abdul Kalam"
    const number = 1931

    return (
    <div className="bg-green-300 font-bold p-10">
        <div className="flex gap-10 mx-25">
        <div className="flex flex-col items-center">
            <h1 className="mt-3 bg-white text-center w-45 h-25 p-5 rounded-3xl text-xl">String Rendering</h1>
            <Link to="/" className="bg-blue-900 text-white px-4 py-3 rounded-3xl font-bold">Back</Link>
        </div>
    <div className="font-medium text-center flex-1">
        <h2 className="text-2xl font-bold mb-5">A great scientist</h2>
            <p className="mb-1">{title} was a great scientist. {title} was born on 15 October <span className="bg-yellow-600 text-white p-2 rounded-2xl ml-2">{number}</span></p>
            <p className="mb-1">{title} was known as the Missile Man of India. {title} became the 11th President of India.</p>
            <p className="mb-1">{title} loved students. {title} inspired young people to dream big. {title} received the Bharat Ratna award.</p>
        </div>
        </div>
    </div>
    )
}

export default StringRendering
