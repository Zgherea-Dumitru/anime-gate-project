import { useState } from "react";
import "./styles/Schedule.css";

export default function Schedule() {
  const [day, setDay] = useState(0);
  const weekDays = [
    "Monday",
    "Thursday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="schedule_box">
      <div className="top_box_schedule">
        <svg
          onClick={() => (day === 0 ? setDay(6) : setDay(day - 1))}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path
            fil
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
        <p>{weekDays[day]}</p>
        <svg
          onClick={() => (day === 6 ? setDay(0) : setDay(day + 1))}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="white"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path
            fil
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
          />
        </svg>
      </div>
      <div className="schedule_content">
        <div className="schedule_element">
          <div className="schedule_image">
            <img src="https://cdn.myanimelist.net/images/anime/1134/111757.jpg" />
          </div>
          <p>Fumetsu no Anata e</p>
        </div>
        <div className="schedule_element">
          <div className="schedule_image">
            <img src="https://cdn.myanimelist.net/images/anime/1134/111757.jpg" />
          </div>
          <p>Fumetsu no Anata e</p>
        </div>
        <div className="schedule_element">
          <div className="schedule_image">
            <img src="https://cdn.myanimelist.net/images/anime/1134/111757.jpg" />
          </div>
          <p>Fumetsu no Anata e</p>
        </div>
      </div>
    </div>
  );
}
