import "./Media.scss";
import React from "react";
import MediaItem from "../../../components/MediaItem/MediaItem";
import Button from "../../../components/Button/Button";

function Media() {
  return (
    <div className="container">
      <div id="media" className="media">
        <h3 className="media-heading">Lastest Media</h3>
        <div className="media-list">
          <MediaItem />
        </div>
        <Button
          href="https://www.youtube.com/watch?v=4tYuIU7pLmI"
          target="_blank"
          primary
          learn
          learnBlackFull
          viewAll
        >
          VIEW ALL
        </Button>
      </div>
    </div>
  );
}

export default Media;
