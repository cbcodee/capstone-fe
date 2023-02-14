import React from "react";
import "./Player.css";

function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <a href="https://localhost:3002">
          <img
            className="spLogo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="spotifylogo"
          />
        </a>
      </div>
    </div>
  );
}

export default Player;
