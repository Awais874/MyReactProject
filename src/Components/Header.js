import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className=" flex justify-between bg-blue-200 shadow-lg">
      <div className="logo-container">
        <img className="w-58 h-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex  m-4" >
          <li className="px-3 mx-1 font-bold " > OnlineStatus: {onlineStatus ? "✅" : "❌"} </li>
          <li className="px-3 mx-1 font-bold bg-blue-50 rounded-md">
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="px-3 mx-1 font-bold bg-blue-50 rounded-md">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-3 mx-1 font-bold bg-blue-50 rounded-md">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3 mx-1 font-bold bg-blue-50 rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 mx-1 font-bold bg-blue-50 rounded-md">Cart</li>
          <button
            className=" px-3 mx-1 Login font-bold bg-blue-50 rounded-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
