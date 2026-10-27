import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-blue-900 font-bold p-5 flex justify-start gap-20 items-center text-white">
      <div className="mx=15 ">Logo</div>

      <div className="flex gap-10">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NavBar;