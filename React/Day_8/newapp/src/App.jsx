
import React, { useState } from 'react';
import Task2 from './components/Task2';
import Student from './components/Student';

const App = () => {
const [isArun, setIsArun] = useState(true);

return (<>

<div>

<div className='bg-green-300 p-10'>
  <h1 className='text-xl font-bold p-3'>Student Name: {isArun? "Arun" : "Kumar"}</h1>
  <button onClick={() => setIsArun(!isArun)} className='bg-blue-500 text-white p-2 rounded mx-10 my-5'>Change Name</button>
</div>

<Task2/>

<div>
  <h1 className='font-bold text-xl p-3'>Student Details</h1>
  
  <Student name="Arun" age={20} course="BCA" />
  <Student name="Kumar" age={21} course="B.Sc" />
  <Student name="Priya" age={19} course="B.Com" />
</div>

</div>

</>);
};



export default App;




