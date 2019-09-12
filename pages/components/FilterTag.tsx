import React from "react";
interface IProps {
    onClick?: () => void,
    name: string,
    selected?: boolean
}

class FilterTag extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={`filter-tag ${this.props.selected ? 'selected' : ''}`} onClick={this.props.onClick ? () => this.props.onClick() : () => {}}>
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default FilterTag;