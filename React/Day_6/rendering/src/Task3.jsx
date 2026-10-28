import { useState } from "react";

function Task3() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  return (
    <div className="bg-green-400 p-10 text-white">
      <h2 className="bg-black p-2 rounded-2xl w-30 font-bold text-white text-center">Count: {count}</h2>
      <h3>{count%2==0?"Even Number":"Odd Number"}</h3>

      <button className="bg-white p-2 rounded-2xl w-30 font-bold text-black" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Task3;