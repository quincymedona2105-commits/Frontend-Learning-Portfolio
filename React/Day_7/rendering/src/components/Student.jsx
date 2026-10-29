import React from 'react'

const Student = () => {

const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (<>

  <div className='bg-pink-300 p-5'>
  <h1 className='font-bold'>Student details</h1><br></br>
  <p>{student.name}</p>
  <p>{student.age}</p>
  <p>{student.department}</p>
  <p>{student.city}</p>

  </div>

  </>
    
  )
}

export default Student