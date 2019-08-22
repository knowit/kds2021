import React from "react";
interface IProps {
    remove: () => void,
    name: string
}

class FilterTag extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <span className="filter-tag">
                {this.props.name}
                <button onClick={() => this.props.remove()}>X</button>
            </span>
        );
    }
}

export default FilterTag;