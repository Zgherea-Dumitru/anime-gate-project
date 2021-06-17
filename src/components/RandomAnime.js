import { Link } from "react-router-dom";
import "./styles/RandomAnime.css";

export default function RandomAnime() {
  return (
    <div
      className="random_anime_box"
      style={{
        backgroundImage:
          "url(https://cdn.myanimelist.net/images/anime/1900/110097.jpg?s=a76c99cff8021c0dffdbae14f0ab141b)",
      }}
    >
      <Link to="/anime/42361" style={{ textDecoration: "none" }}>
        <button>DETAILS</button>
      </Link>
      <div className="random_anime_info">
        <div className="random_anime_title">
          <h4>Ijiranaide, Nagatoro-san</h4>
        </div>
        <div className="random_infos">
          <p>2021</p>
          <hr />
          <p>12 episodes</p>
          <hr />
          <p>7.2/10</p>
        </div>
      </div>
    </div>
  );
}
