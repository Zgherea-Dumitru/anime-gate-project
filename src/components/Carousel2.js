/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./styles/Carousel2.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel2() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/season/2021/spring")
      .then((response) =>
        setTrending(response.data.anime.filter((e, i) => i <= 25))
      );
  }, []);

  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "progressbar",
      }}
    >
      {trending === undefined
        ? null
        : trending.map((e) => {
            return (
              <SwiperSlide key={e.title}>
                <div className="anime_card_carousel">
                  <div className="left_panel">
                    <h1 className="carousel_h1">{e.title}</h1>
                    <div className="anime_info">
                      <p>{e.type === "TV" ? "TV Show" : e.type}</p>
                      <hr />
                      <p>
                        {e.airing_start === null
                          ? null
                          : e.airing_start.split("-")[0]}
                      </p>
                      {e.episodes ? <hr /> : null}
                      {e.episodes ? <p>{e.episodes} episodes</p> : null}
                    </div>
                    <Link to={`/anime/${e.mal_id}`}>
                      <button className="anime_details">DETAILS</button>
                    </Link>
                    <div className="anime_genre">
                      <p>
                        {e.genres[0] === undefined ? null : e.genres[0].name}
                      </p>
                      <p>
                        {e.genres[1] === undefined ? null : e.genres[1].name}
                      </p>
                      {e.genres[2] === undefined ? null : (
                        <p>{e.genres[2].name}</p>
                      )}
                    </div>
                  </div>
                  <img
                    className="anime_image"
                    src={e.image_url}
                    alt={e.title}
                  />
                </div>
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}
