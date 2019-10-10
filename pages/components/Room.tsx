import React, { CSSProperties } from 'react';
import { colorClassFromRoomName } from '../../helpers/colors';
import Pin from './Pin';


class Room extends React.Component<any, any> {
    render() {
        const color = colorClassFromRoomName(this.props.room);

        const style = {
            msGridColumn: this.props.index + 1,
            msGridRow: 1
        };

        return (
            <React.Fragment>
                {this.props.showRoomHeader && <div className={`room-header ${this.props.index % 2 == 0 ? 'room-even' : 'room-odd'}`} style={style as CSSProperties}>
                    <Pin className={color} small={true}></Pin> <div className="room-header-text">Room {this.props.room}</div>
                </div>}

                {this.props.children}
            </React.Fragment>
        );
    }
}


export default Room;