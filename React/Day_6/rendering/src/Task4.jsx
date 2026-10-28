import { useState } from "react";

function Task4() {
  const [count, setCount] = useState(35);

  console.log("Component Rendered");

  return (
    <div className="bg-pink-400 p-10 text-white">
      <h2 className="bg-black p-2 rounded-2xl w-30 font-bold text-white text-center">Count: {count}</h2>
      <h3>{count>=40?"Pass":"Fail"}</h3>

      <button className="bg-white p-2 rounded-2xl w-30 font-bold text-black" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Task4;