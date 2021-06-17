import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/Logo.svg";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <Logo />
      </Link>
      <div className="footer_nagigation">
        <Link to="/" className="footer_column">
          <p>Home</p>
          <p>Today's releases</p>
          <p>All time popular</p>
        </Link>
        <Link to="list" className="footer_column">
          <p>Watch list</p>
          <p>To watch</p>
          <p>Watched</p>
        </Link>
        <Link to="browse" className="footer_column">
          <p>Browse</p>
          <p>Search</p>
          <p>Categories</p>
        </Link>
        <Link to="about" className="footer_column">
          <p>About</p>
          <p>Creators</p>
          <p>API</p>
        </Link>
      </div>
    </div>
  );
}
