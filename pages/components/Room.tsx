import { CSSProperties, Component, Fragment } from 'react';
import { colorClassFromRoomName } from '../../helpers/colors';
import Pin from './Pin';
import '../../styling/roomStyles.scss';


class Room extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.props.edit && this.setState(prev => ({
            edit : !prev.edit
        }));
    }

    submit = (evt) => {
        if (evt.key == 'Enter') {
            this.props.room.name = evt.target.value;
            this.props.onRoomUpdate && this.props.onRoomUpdate(this.props.room);
            this.toggleEdit();
        }
    }

    render() {
        const color = colorClassFromRoomName(this.props.room && this.props.room.name);

        const style = {
            msGridColumn: this.props.index + 1,
            msGridRow: 1
        };
        return (
            <Fragment>
                {this.props.showRoomHeader && <div className={`room-header ${this.props.index % 2 == 0 ? 'room-even' : 'room-odd'}`} style={style as CSSProperties}>
                    <Pin className={color} small={true}></Pin> 
                    {!this.state.edit && <div className="room-header-text" onClick={this.toggleEdit}>Room {this.props.room.name}</div>}
                    {this.state.edit && <input type="text" defaultValue={this.props.room.name} onKeyPress={this.submit}/>}
                    {this.props.edit && <span className="remove-button" onClick={this.props.onRemove}>remove</span>}
                </div>}

                {this.props.children}
            </Fragment>
        );
    }
}


export default Room;