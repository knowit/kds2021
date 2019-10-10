import React from 'react';
import { colorFromRoomName } from '../../helpers/colors';



class Room extends React.Component<any, any> {
    render() {
        return (
            <div className="room-container">
                {this.props.showRoomHeader && <div className="room-header" style={{backgroundColor: colorFromRoomName(this.props.room)}}>
                    Room {this.props.room}
                </div>}
                <div className="room-content">
                    {this.props.children}
                </div>
            </div >
        );
    }
}


export default Room;