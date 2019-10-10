import React from 'react';

class Pin extends React.Component<any, any> {
    render() {
        return (
            <div className={`pin ${this.props.small ? 'small' : ''} ${this.props.className}`}>
                <div className="top" style={{ borderColor: this.props.color }}></div>
                <div className="bottom" style={{ borderColor: `${this.props.color} transparent transparent  transparent` }}></div>
            </div>
        );
    }
}


export default Pin;