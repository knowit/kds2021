import React from "react";

interface FilterTagProps {
  onClick?: () => void;
  name: string;
  selected?: boolean;
}

const FilterTag = ({ selected, onClick, name }: FilterTagProps) => {
  return (
    <div
      className={`filter-tag ${selected ? "selected" : ""}`}
      onClick={onClick ? onClick : () => {}}
    >
      <span>{name}</span>
    </div>
  );
};

export default FilterTag;
