import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gray-300 font-bold p-10">
      <div className="flex gap-20 mx-25 ">
        <Link to="/string" className="bg-white p-2 rounded-2xl w-40 text-center ">String Rendering</Link>
        <Link to="/number" className="bg-white p-2 rounded-2xl w-40 text-center ">Number Rendering</Link>
        <Link to="/boolean" className="bg-white p-2 rounded-2xl w-40 text-center ">Boolean Rendering</Link>
        <Link to="/falsy" className="bg-white p-2 rounded-2xl w-40 text-center ">Falsy Rendering</Link>
      </div>
    </div>
  );
};

export default Banner;