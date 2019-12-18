import { CSSProperties, Component, Fragment } from 'react';
import { colorClassFromRoomName } from '../../helpers/colors';
import Pin from './Pin';
import '../../styling/roomStyles.scss';


class Room extends Component<any, any> {
    render() {
        const color = colorClassFromRoomName(this.props.room);

        const style = {
            msGridColumn: this.props.index + 1,
            msGridRow: 1
        };

        return (
            <Fragment>
                {this.props.showRoomHeader && <div className={`room-header ${this.props.index % 2 == 0 ? 'room-even' : 'room-odd'}`} style={style as CSSProperties}>
                    <Pin className={color} small={true}></Pin> <div className="room-header-text">{this.props.room}</div>
                </div>}

                {this.props.children}
            </Fragment>
        );
    }
}


export default Room;