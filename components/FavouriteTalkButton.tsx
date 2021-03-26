import React, { useState } from "react";

interface FavoriteTalkButtonProps {
  talkId: string;
  onClick?: (val) => void;
}

const FavouriteTalkButton = ({ talkId, onClick }: FavoriteTalkButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const favouriteButtonClick = () => {
    setClicked(!clicked);

    if (onClick !== undefined) {
      onClick(clicked);
    }

    if (typeof localStorage != "undefined" && !localStorage.getItem(talkId)) {
      localStorage.setItem(talkId, talkId);
    } else if (typeof localStorage != "undefined") {
      localStorage.removeItem(talkId);
    }
  };

  const isFavorited = (id) => {
    return localStorage.getItem(id) != null;
  };

  var icon = isFavorited(talkId)
    ? "../static/heart-filled.png"
    : "../static/heart.png";

  return (
    <button onClick={() => favouriteButtonClick()} id="favourite-talk-button">
      <img src={icon}></img>
    </button>
  );
};

export default FavouriteTalkButton;
