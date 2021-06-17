import { useState } from "react";
import "./styles/MyList.css";

export default function MyList() {
  const [toWatch, setToWatch] = useState(true);
  return (
    <div className="mylist">
      <div className="watchList_buttons">
        <button
          onClick={() => setToWatch(true)}
          className={toWatch ? "openList" : "closeList"}
        >
          To Watch
        </button>
        <button
          onClick={() => setToWatch(false)}
          className={toWatch ? "closeList" : "openList"}
        >
          Watched
        </button>
      </div>
      <div className="watchlist_container"></div>
    </div>
  );
}
