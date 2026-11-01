import React, { useState } from 'react';

const Task2 = () => {
const [count, setCount] = useState(0);

return (<>
<div className='bg-yellow-300 p-10'>
    <h1 className='text-xl font-bold p-3'>Count: {count}</h1>
<button onClick={() => setCount(count + 1)} className='bg-green-500 text-white p-2 rounded mx-2'>Increment</button>
<button onClick={() => setCount(count - 1)} className='bg-red-500 text-white p-2 rounded mx-2'>Decrement</button>
<button onClick={() => setCount(0)} className='bg-gray-500 text-white p-2 rounded mx-2'>Reset</button>
</div>
</>);
};

export default Task2;

