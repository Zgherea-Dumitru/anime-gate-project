import Carousel2 from "./Carousel2";
import ClockJapan from "./ClockJapan";
import RandomAnime from "./RandomAnime";
import Genres from "./Genres";
import "./styles/Home.css";

export default function Home() {
  return (
    <section className="home">
      <section className="main">
        <h1>Trending</h1>
        <div className="carousel_main_page">
          <div>
            <Carousel2 />
          </div>
          <div>
            <ClockJapan />
            <RandomAnime />
          </div>
        </div>
      </section>
      <section>
        <Genres
          key={"Popular this season"}
          apiCall={
            "https://api.jikan.moe/v3/search/anime?q=&page=1&start_date=2021-01-01&order_by=members"
          }
          categorie={"Popular this season"}
        />
        <Genres
          key={"Upcoming next season"}
          apiCall={"https://api.jikan.moe/v3/season/2021/summer"}
          categorie={"Upcoming next season"}
        />
        <Genres
          key={"Today's Releases"}
          apiCall={"https://api.jikan.moe/v3/schedule"}
          categorie={"Today's Releases"}
        />
        <Genres
          key={"All Time Popular"}
          apiCall={"https://api.jikan.moe/v3/top/anime/1/tv"}
          categorie={"All Time Popular"}
        />
      </section>
    </section>
  );
}
