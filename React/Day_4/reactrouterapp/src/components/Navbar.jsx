import { Link } from "react-router-dom"
const NavBar =()=>{

    return(<>
    <div className="bg-blue-900 font-bold p-2 flex justify-between items-center text-white  ">

    <div className="mx-15 bg-green-400 p-1 rounded-2xl w-30 text-center "> Logo</div>
    <div className="mx-15 flex gap-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
    </div>



    </div>

    </>)
}

export default NavBar