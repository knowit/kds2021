import React, { useState } from "react";

interface FavoriteTalkButtonProps {
  talkId: string;
  onClick?: (val) => void;
}

const FavouriteTalkButton = ({ talkId, onClick }: FavoriteTalkButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const updateLocalStorage = () => {
    if (typeof localStorage != "undefined" && !localStorage.getItem(talkId)) {
      localStorage.setItem(talkId, talkId);
    } else if (typeof localStorage != "undefined") {
      localStorage.removeItem(talkId);
    }
  }

  const favouriteButtonClick = () => {
    setClicked(!clicked);

    updateLocalStorage();

    if (onClick !== undefined) {
      onClick(clicked);
    }
  };

  const isFavorited = (id) => {
    return localStorage.getItem(id) != null;
  };

  var icon = isFavorited(talkId)
    ? "/heart-filled.png"
    : "/heart.png";

  return (
    <button onClick={() => favouriteButtonClick()} id="favourite-talk-button">
      <img src={icon}></img>
    </button>
  );
};

export default FavouriteTalkButton;
