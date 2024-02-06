import "../styles/NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/hero/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#home">Skills</Link>
        <Link to="#home">Projects</Link>
      </ul>
    </div>
  );
}

export default NavBar;