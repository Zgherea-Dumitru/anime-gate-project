import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/Logo.svg";
import { ReactComponent as LogoSmall } from "./images/LogoSmall.svg";
import "./styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="navigation_Main">
      <Link className="big_logo" style={{ cursor: "pointer" }} to="/">
        <Logo />
      </Link>
      <Link className="small_logo" to="/">
        <LogoSmall />
      </Link>
      <div className="navigation_links">
        <Link className="navBar_Link" to="/list">
          <p>Watch List</p>
        </Link>
        <Link className="navBar_Link" to="/browse">
          <p>Browse</p>
        </Link>
        <Link className="navBar_Link" to="/about">
          <p>About</p>
        </Link>
      </div>
      <div className="login_nav">
        <p>Log In</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
