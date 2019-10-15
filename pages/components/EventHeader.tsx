import React from 'react';

class EventHeader extends React.Component<any, any> {
  render() {
    return (
      <div className="event-header">
        <span className="type">{this.props.type}</span>
        <span className="time">{this.props.timeStart} - {this.props.timeEnd}</span>
      </div>
    );
  }
}

export default EventHeader;
