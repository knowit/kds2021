import React from 'react';

class DayButton extends React.Component<any, any> {
    render() {
        return (
            <button
                className="day-button"
                type="submit"
                onClick={this.props.showSchedule}
            >
                <h2>{this.props.day}</h2>
                <div className="right-arrow">
                    <img
                        className="baseline-chevron"
                        src={this.props.arrow}
                    />
                </div>
            </button>
        );
    }
}

export default DayButton;