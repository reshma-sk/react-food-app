import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";


const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log("isLoggedIn:" + isLoggedIn);
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();
  return (
    <div className="w-screen h-20 flex justify-between items-center text-[#545454] px-6 py-0 bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c] font-bold fixed top-0 left-0 z-[999]">
      <div>
        <Link to="/">
          <img className="w-14 h-14 rounded-full cursor-pointer" src={LOGO_URL} alt="Sppons and Forks logo" />
        </Link>
      </div>
      <div>Online Status: {isOnline ? "🟢" : "❌ Disconnected"}</div>
      <div>
        <ul className="list-none flex items-center gap-[10px]">
          <li><Link className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]" to="/">Home</Link></li>
          <li><Link className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]" to="/about">About</Link></li>
          <li>
            <Link className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]" to="/contact">
              Contact
            </Link>
          </li>
          
          <li className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]"><FaCartArrowDown /></li>
          
          {isLoggedIn ? (
            <button className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]" onClick={() => navigate("/login")}>
              Login
            </button>
          )}   
        </ul>
      </div>
    </div>
  );
};

export default Header;