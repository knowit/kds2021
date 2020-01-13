import React from 'react';
import '../../styling/pinStyles.scss';


class Pin extends React.Component<any, any> {
    render() {
        return (
            <div className={`pin ${this.props.small ? 'small' : ''} ${this.props.className}`}>
                <div className="top" style={{borderColor: '#FF00FF'}}/>
                <div className="bottom" style={{borderColor: `#FF00FF transparent transparent  transparent`}}/>
            </div>
        );
    }
}


export default Pin;