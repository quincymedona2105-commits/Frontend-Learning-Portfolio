import { useState } from "react";

const Task1=()=> {
  const [login, setLogin] = useState(false);

  return (
    <div className="bg-gray-900 p-10 text-white ">
      <h2>
        {login ? "Welcome User" : "Please Login"}
      </h2>

      <button className="bg-gray-200 p-2 rounded-2xl mx-5 font-bold text-black"onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Task1;