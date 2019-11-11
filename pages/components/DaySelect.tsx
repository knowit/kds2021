import { Component } from 'react';
import { dayOfWeek, formatDate } from '../../helpers/dateUtils';

class DaySelect extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            day: props.day && props.day.day
        }
    }


    handleSelect = () => {
        if (this.props.active && this.props.edit) {
            this.setState({
                edit: true
            });
        }
        else {
            this.props.onSelect();
        }
    }

    submit = (evt) => {
        if (evt.key == 'Enter') {
            console.log(formatDate(this.state.day));
            this.props.day.day = new Date(evt.target.value);
            this.props.onDayUpdate(this.props.day);
            this.setState({
                edit: false
            });
        }
    }

    render() {
        return (
            <span>
                {this.props.seperator && <span className="seperator"> | </span>}
                <span onClick={this.handleSelect} className={`header-day ${this.props.active ? 'selected' : ''}`}>
                    {dayOfWeek(this.props.day && this.props.day.day)}
                </span>
                {this.state.edit && <input type="date" defaultValue={formatDate(this.state.day)} onKeyPress={this.submit}></input>}
                {this.props.edit && <span className="remove-day-button" onClick={() => this.props.onDayRemoved && this.props.onDayRemoved()}>X</span>}
            </span>)
    }
}

export default DaySelect;