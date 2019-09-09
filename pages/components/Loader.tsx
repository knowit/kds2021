import React from 'react';

interface IProps {
    loading: boolean,
    className?: string
}

class Loader extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.loading) {
            return (
                    <div className={`loader ${this.props.className || ''}`}>
                    </div>);
        }
        else {
            return (<React.Fragment>
                {this.props.children}
            </React.Fragment>);

        }
    }
}

export default Loader;