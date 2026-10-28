import { useState } from "react";

const Task2 = () => {
    const [show, setShow] = useState(true);

    return (
    <div className="bg-yellow-400 p-10 text-white">
        <button className="bg-gray-200 p-2 rounded-2xl mx-5 font-bold text-black"onClick={() => setShow(true)}>Show</button>
        <button className="bg-gray-200 p-2 rounded-2xl mx-5 font-bold text-black"onClick={() => setShow(false)}>Hide</button>
        {show && <h2 className="font-bold text-black flex mx-6 py-3">Welcome to React</h2>}
    </div>
    );
};

export default Task2;
