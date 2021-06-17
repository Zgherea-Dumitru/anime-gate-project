import React, { useState, useEffect } from "react";
import "./styles/ClockJapan.css";

export default function ClockJapan() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="clock">
      <p>Japan Time 🇯🇵</p>
      <p>
        {date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
        })}
      </p>
    </div>
  );
}
