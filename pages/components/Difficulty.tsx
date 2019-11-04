import "../../styling/difficultyStyles.scss";
import React from 'react';

class Difficulty extends React.Component<any, any> {
    render() {
        return (
            <div className="difficulty">
                <span className={`first active`}></span>
                <span className={`second ${(this.props.difficulty == 'intermediate' || this.props.difficulty == 'advanced') ? 'active' : ''}`}></span>
                <span className={`third ${this.props.difficulty == 'advanced' ? 'active' : ''}`}></span>
            </div>
        );
    }
}

export default Difficulty;

