import React from 'react';
import Room from '../../models/Room';
import Time from '../../models/Time';

class EventHeader extends React.Component<any, any> {
  type: any;
  fromHours: any;
  fromMinutes: any;
  toHours: any;
  toMinutes: any;


  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.type = React.createRef();
    this.fromHours = React.createRef();
    this.fromMinutes = React.createRef();
    this.toHours = React.createRef();
    this.toMinutes = React.createRef();
  }

  toggleEdit = () => {
    this.props.edit && this.setState((prev) => ({
      edit: !prev.edit
    }))
  }

  submit = (evt) => {
    if (evt.key == 'Enter') {
      this.props.timeslot.type = this.type.current.value;
      this.props.timeslot.from.hours = this.fromHours.current.value;
      this.props.timeslot.from.minutes = this.fromMinutes.current.value;
      this.props.timeslot.to.hours = this.toHours.current.value;
      this.props.timeslot.to.minutes = this.toMinutes.current.value;
      this.props.onTimeslotUpdate && this.props.onTimeslotUpdate(this.props.timeslot);
      this.toggleEdit();
    }
  }

  addRoom = () => {
    this.props.timeslot.rooms.push(new Room());
    this.props.onTimeslotUpdate(this.props.timeslot);
  }

  render() {
    return (
      <div className="event-header">
        {!this.state.edit && <span className="type" onClick={this.toggleEdit}>{this.props.type || 'ingen type'}</span>}
        {this.state.edit && <input type="text" className="edit-type" ref={this.type} defaultValue={this.props.timeslot.type} onKeyPress={this.submit} />}
        {this.props.edit && [
          <span className="remove-button" onClick={this.props.onRemove}>remove</span>,
          <span className="add-room-button" onClick={this.addRoom}>Add room</span>
        ]}

        {!this.state.edit && <span className="time" onClick={this.toggleEdit}>{Time.toString(this.props.timeStart)} - {Time.toString(this.props.timeEnd)}</span>}
        {this.state.edit && <div className="time-pickers">
          <input type="number" className="time-picker" ref={this.fromHours} defaultValue={this.props.timeslot && this.props.timeslot.from && this.props.timeslot.from.hours} onKeyPress={this.submit} />
          <input type="number" className="time-picker" ref={this.fromMinutes} defaultValue={this.props.timeslot && this.props.timeslot.from &&this.props.timeslot.from.minutes} onKeyPress={this.submit} />
          -
          <input type="number" className="time-picker" ref={this.toHours} defaultValue={this.props.timeslot && this.props.timeslot.to && this.props.timeslot.to.hours} onKeyPress={this.submit} />
          <input type="number" className="time-picker" ref={this.toMinutes} defaultValue={this.props.timeslot && this.props.timeslot.to && this.props.timeslot.to.minutes} onKeyPress={this.submit} />
        </div>
        }
      </div>
    );
  }
}

export default EventHeader;
