/* eslint-disable */
import { Link } from "react-router-dom";
import "./styles/AnimeCardMainPage.css";

export default function AnimeCard({ mal_id, title, image_url }) {
  return (
    <div className="anime_card_box">
      <Link to={`/anime/${mal_id}`} style={{ textDecoration: "none" }}>
        <div className="anime_card_image">
          <img src={image_url} alt={title} />
          <img className="anime_card_bg_color" alt="backgroud"></img>
        </div>
        <p>{title}</p>
      </Link>
    </div>
  );
}
