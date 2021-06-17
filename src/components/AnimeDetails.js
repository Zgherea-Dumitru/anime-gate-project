/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as Check } from "./images/check.svg";
import { ReactComponent as Plus } from "./images/plus.svg";
import "./styles/AnimeDetails.css";

export default function AnimeDetails(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [pictures, setPictures] = useState([]);
  const [general, setGeneral] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [staff, setStaff] = useState([]);
  const [myList, setMyList] = useState(false);
  const [watched, setWatched] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    const one = `https://api.jikan.moe/v3/anime/${id}/pictures`;
    const two = `https://api.jikan.moe/v3/anime/${id}`;
    const four = `https://api.jikan.moe/v3/anime/${id}/characters_staff`;

    axios.get(one).then((res) => setPictures(res.data.pictures));

    axios.get(two).then((res) => setGeneral(res.data));

    axios.get(four).then((res) => {
      setCharacters(res.data.characters.filter((e, i) => i < 8));
      setStaff(res.data.staff.filter((e, i) => i < 4));
    });
  }, []);

  return (
    <section className="anime_details_page">
      <div className="details_img_top">
        <img
          src={pictures[0] !== undefined ? pictures[0].large : null}
          alt={general.title}
        />
        <div className="details_img_top_bg_color"></div>
      </div>
      <div className="details_upper_info">
        <div className="details_smallImg_buttons">
          <img
            src={pictures[1] !== undefined ? pictures[1].small : null}
            alt={general.title}
          ></img>
          <div className="details_list_buttons">
            <button onClick={() => setMyList(!myList)}>
              {" "}
              {myList ? (
                <Check className="adding_list" />
              ) : (
                <Plus className="adding_list" />
              )}
              To Watch
            </button>
            <button onClick={() => setWatched(!watched)}>
              {" "}
              {watched ? (
                <Check className="adding_list" />
              ) : (
                <Plus className="adding_list" />
              )}
              Watched
            </button>
          </div>
        </div>
        <div className="details_upperInfo_text">
          <h1>{general.title}</h1>
          <p>{general.synopsis}</p>
        </div>
      </div>
      <div className="details_anime_infos">
        <div>
          <h3>Score</h3>
          <p>{general.score}/10</p>
        </div>
        <div>
          <h3>Episodes</h3>
          <p>{general.episodes}</p>
        </div>
        <div>
          <h3>Status</h3>
          <p>{general.airing ? "Airing" : "Finished"}</p>
        </div>
        <div>
          <h3>Start Date</h3>
          <p>
            {general.aired !== undefined
              ? months[general.aired.prop.from.month] +
                ", " +
                general.aired.prop.from.year
              : null}
          </p>
        </div>
        <div>
          <h3>End Date</h3>
          <p>
            {general.aired !== undefined && general.aired.to !== null
              ? months[general.aired.prop.to.month] +
                ", " +
                general.aired.prop.to.year
              : "-"}
          </p>
        </div>
        <div>
          <h3>Studio</h3>
          <p>
            {general.studios !== undefined ? general.studios[0].name : null}
          </p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>
            {general.genres !== undefined
              ? general.genres[0].name + ", " + general.genres[1].name
              : null}
          </p>
        </div>
      </div>
      <div className="details_title">
        <h1>Characters</h1>
      </div>
      <div className="details_characters_container">
        {characters.map((c, i) => {
          return (
            <div className="details_characters_box" key={i}>
              <div className="datails_box_actors">
                <img src={c.image_url} alt={c.title} />
                <div>
                  <p>{c.name}</p>
                  <p>{c.role}</p>
                </div>
              </div>
              <div className="datails_box_actors">
                <div>
                  <p>
                    {c.voice_actors[0] !== undefined
                      ? c.voice_actors[0].name
                      : null}
                  </p>
                  <p>Japanese</p>
                </div>
                <img
                  src={
                    c.voice_actors[0] !== undefined
                      ? c.voice_actors[0].image_url
                      : null
                  }
                  alt={
                    c.voice_actors[0] !== undefined
                      ? c.voice_actors[0].name
                      : null
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="details_title">
        <h1>Staff</h1>
      </div>
      <div className="details_characters_container">
        {staff.map((s, i) => {
          return (
            <div className="details_characters_box" key={i}>
              <div className="datails_box_staff">
                <img src={s.image_url} alt={s.title} />
                <div>
                  <p>{s.name}</p>
                  <p>{s.positions[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {general.trailer_url ? (
        <iframe
          className="details_video"
          src={general.trailer_url}
          title={general.title}
        />
      ) : null}
    </section>
  );
}
