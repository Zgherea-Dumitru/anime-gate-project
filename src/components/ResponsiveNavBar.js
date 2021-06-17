import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as List } from "./images/list.svg";
import { ReactComponent as Exit } from "./images/x.svg";
import { ReactComponent as Login } from "./images/login.svg";
import { ReactComponent as Signin } from "./images/signin.svg";
import { ReactComponent as Watchlist } from "./images/watchlist.svg";
import { ReactComponent as Browse } from "./images/browse.svg";
import { ReactComponent as About } from "./images/about.svg";
import "./styles/ResponsiveNavBar.css";

export default function ResponsiveNavBar() {
  const [navDisplay, setNavDisplay] = useState(false);

  return (
    <div className="responsive_navigation">
      <button
        className={
          navDisplay ? "responsive_nav_button close" : "responsive_nav_button"
        }
        onClick={() => setNavDisplay(!navDisplay)}
      >
        <List />
      </button>
      <div className={navDisplay ? "navigation_div" : "navigation_div close"}>
        <div className="navigation_row">
          <Link to="/list" className="nav_container_icon">
            <Watchlist className="nav_icon" />
            <p>Watch List</p>
          </Link>
          <Link to="/browse" className="nav_container_icon">
            <Browse className="nav_icon" />
            <p>Browse</p>
          </Link>
          <Link to="/about" className="nav_container_icon">
            <About className="nav_icon" />
            <p>About</p>
          </Link>
        </div>
        <div className="navigation_row">
          <div className="nav_container_icon">
            <Signin className="nav_icon" />
            <p>Sign up</p>
          </div>
          <div className="nav_container_icon">
            <Login className="nav_icon" />
            <p>Log in</p>
          </div>
          <div className="nav_container_icon">
            <Exit
              className="nav_icon"
              onClick={() => setNavDisplay(!navDisplay)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
