import { Component } from 'react';
import DateUtils from '../../helpers/dateUtils';

class DaySelect extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            edit: false
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
        this.props.day.day = new Date(evt.target.value);
        this.props.onDayUpdate(this.props.day);
        this.setState({
            edit: false
        });
    }

    render() {
        return (
            <span key={this.props.day.day.getDay()}>
                {this.props.seperator && <span className="seperator"> | </span>}
                <span onClick={this.handleSelect} className={`header-day ${this.props.active ? 'selected' : ''}`}>
                    {DateUtils.dayOfWeek(this.props.day.day)}
                </span>
                {this.state.edit && <input type="date" defaultValue={DateUtils.formatDate(this.props.day.day)} onKeyPress={this.submit}></input>}
                {this.props.edit && <span className="remove-day-button" onClick={() => this.props.onDayRemoved()}>X</span>}
            </span>)
    }
}

export default DaySelect;