import React from "react";

interface DifficultyProps {
  difficulty: any;
}

//CLSX

const Difficulty = ({ difficulty }: DifficultyProps) => {
  return (
    <div className="difficulty">
      <span className={`first active`}></span>
      {/*clsx("second", {active: difficulty == "Intermediate" || difficulty == "Advanced"}) */}
      <span
        className={`second ${
          difficulty == "Intermediate" || difficulty == "Advanced"
            ? "active"
            : ""
        }`}
      ></span>
      <span
        className={`third ${difficulty == "Advanced" ? "active" : ""}`}
      ></span>
    </div>
  );
};

export default Difficulty;
