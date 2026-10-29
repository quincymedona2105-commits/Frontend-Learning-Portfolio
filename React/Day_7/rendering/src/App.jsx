import React from 'react'
import Student from './components/Student';
import Employee from './components/Employee';

const App = () => {

  const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <>
    <div className='bg-green-300 p-5'>
      <h1 className='font-bold'>Programming languages</h1><br></br>
      <ul className="list-disc ml-6">{languages.map((language, i) => (
        <li key={i}>{language}</li>
  ))}
  </ul>
  </div>

  <Student/>
  <Employee/>
  </>

  
)
}

export default App