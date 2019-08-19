const DayButton = props => {

    return (
        <button
            className="day-button"
            type="submit"
            onClick={props.showSchedule}
        >
            <h2>{props.day}</h2>
            <div className="right-arrow">
                <img
                    className="baseline-chevron"
                    src={props.arrow}
                />
            </div>
        </button>
    );
}

export default DayButton;