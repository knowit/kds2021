import React, { useState } from "react";
import Program from "../models/data.json";
import { FilterTag, ShowOnlyFavouritesButton } from "../components";



interface FilterProps {
  onTagChange: (tags: string[]) => void;
  onFavoriteChange: (val: boolean) => void;
  selectedTags: string[];
  showOnlyFavorites: boolean;
  className?: string;
  type?: "dropdown" | "slide-left";
}

const Filter = ({
  onTagChange,
  onFavoriteChange,
  selectedTags,
  showOnlyFavorites,
  className,
  type,
}: FilterProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const addTag = (tag) => {
    onTagChange(selectedTags.concat([tag]));
  };

  const removeTag = (tag) => {
    onTagChange(selectedTags.filter((t) => t != tag));
  };

  return (
    <div className={`filter-container ${className} ${type || "slide-left"}`}>
      <div className={`filter-button ${open ? "open" : ""}`} onClick={toggle}>
        <div className="filter-button-container">
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </div>
      <div className={`filter ${open ? "open" : ""}`}>
        <img
          src="../static/close-24px.svg"
          className="close"
          onClick={toggle}
        ></img>
        <h1 className="header">Filter by tag</h1>
        <div className="favorite">
          <p className="subheader">Show only your favorites: </p>
          <ShowOnlyFavouritesButton
            showOnlyFavorites={showOnlyFavorites}
            onClick={() => onFavoriteChange(!showOnlyFavorites)}
          ></ShowOnlyFavouritesButton>
        </div>

        <div className="active">
          <p className="subheader">Active filters:</p>
          {selectedTags &&
            selectedTags.map((tag) => (
              <FilterTag
                key={tag}
                name={tag}
                selected={true}
                onClick={() => removeTag(tag)}
              ></FilterTag>
            ))}
        </div>
        <div className="nonActive">
          <p className="subheader">Click to select filters</p>
          {Program.program.tags
            .concat(Program.program.languages)
            .filter(
              (tag) => selectedTags && !selectedTags.some((t) => t == tag)
            )
            .map((tag) => (
              <FilterTag
                key={tag}
                name={tag}
                onClick={() => addTag(tag)}
              ></FilterTag>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Filter;
