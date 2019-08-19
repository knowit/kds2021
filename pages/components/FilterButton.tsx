import React from "react";
import TagsMenu from './TagsMenu';

interface IProps {
    program: any
}

class FilterButton extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    showFilters = () => {
        this.setState({ clicked: !this.state.clicked });
        console.log(this.state.clicked);
        return (<TagsMenu />);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.showFilters()} id="filter-button"> Filter by tags</button>
                {this.state.clicked && <div id="filter-dropdown"><TagsMenu program={this.props.program} /> </div>}
            </div>
        );
    }
}

export default FilterButton;