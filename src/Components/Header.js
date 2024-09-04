import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className=" flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-58 h-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex  m-4" >
          <li className="px-4"> OnlineStatus: {onlineStatus ? "✅" : "❌"} </li>
          <li className="px-4">
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="Login"
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
