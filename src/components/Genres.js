/* eslint-disable */
import axios from "axios";
import { useState, useEffect } from "react";
import AnimeCardMainPage from "./AnimeCardMainPage";
import "./styles/Genres.css";

export default function Genres({ categorie, apiCall }) {
  const [apiRes, setApiRes] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}`).then((response) => {
      if (response.data.results !== undefined) {
        return setApiRes(response.data.results.filter((e, i) => i < 6));
      } else if (response.data.top !== undefined) {
        return setApiRes(response.data.top.filter((e, i) => i < 6));
      } else if (response.data.anime) {
        return setApiRes(response.data.anime.filter((e, i) => i < 6));
      } else {
        const daysWeek = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ];
        const date = new Date();
        const day = daysWeek[date.getDay()];
        return setApiRes(response.data[day].filter((e, i) => i < 6));
      }
    });
  });

  return (
    <section className="anime_categorie">
      <h1>{categorie}</h1>
      <section className="anime_genre_container">
        {apiRes.map((e, i) => {
          return <AnimeCardMainPage key={i} {...e} />;
        })}
      </section>
    </section>
  );
}
