import React from 'react';

const Student = (props) => {
return (
<div className='bg-blue-300 p-5 m-5 w-50 rounded'>
    <h2 className='text-lg font-bold'>Name: {props.name}</h2>
    <p className='text-md'>Age: {props.age}</p>
    <p className='text-md'>Course: {props.course}</p>
</div>
);
};

export default Student;

