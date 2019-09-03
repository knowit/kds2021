import React from 'react';
import Talk from '../../models/Talk';

interface IProps {
    talk: Talk,
    onStartDrag: (talk: Talk, x: number, y: number) => void
}

interface IState {
    dragging: boolean
}

class ProgramBuilderTalk extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);

        this.state = {
            dragging: false
        }
    }

    render() {
        return (
            <div className="talk" onMouseDown={(evt) => {
                    evt.preventDefault();    
                    this.props.onStartDrag(this.props.talk, evt.clientX, evt.clientY);
                }}>
                {this.props.talk.name}
            </div>
        );
    }

}

export default ProgramBuilderTalk;