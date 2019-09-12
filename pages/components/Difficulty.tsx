import "../../styling/difficultyStyles.scss";

const Difficulty = (props) => (
    <div className="difficulty">
        <span className={`first active`}></span>
        <span className={`second ${(props.difficulty == 'Intermediate' || props.difficulty == 'Advanced') ? 'active' : ''}`}></span>
        <span className={`third ${props.difficulty == 'Advanced' ? 'active' : ''}`}></span>
    </div>
);

export default Difficulty;

