import "../styling/onlyFavoritesButtonStyles.scss";

interface ShowOnlyFavouritesButtonProps {
  showOnlyFavorites: any;
  onClick: any;
}

const ShowOnlyFavoritesButton = ({
  showOnlyFavorites,
  onClick,
}: ShowOnlyFavouritesButtonProps) => {
  return (
    <div
      className={`switch ${showOnlyFavorites ? "on" : ""}`}
      onClick={() => onClick(showOnlyFavorites)}
    >
      <div className="ball"></div>
    </div>
  );
};

export default ShowOnlyFavoritesButton;
