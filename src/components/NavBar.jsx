import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/hero/logo.png";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <IoMenu />
        </button>
      </div>

      <div className="links">
        <img src={logo} className="logo" alt="logo" />
        <ul>
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#skills">Skills</Link>
          <Link to="#projects">Projects</Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
