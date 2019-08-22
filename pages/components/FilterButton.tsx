import React from "react";
import TagsMenu from './TagsMenu';
import FilterTag from "./FilterTag";

interface IProps {
    program: any,
    handleChange: any
}

class FilterButton extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            tags: []
        }
    }

    showFilters = () => {
        this.setState({ clicked: !this.state.clicked });
        return (<TagsMenu />);
    }

    addTag(tag) {
        if (this.state.tags.includes(tag)) { // Avoid duplicates
            return;
        }

        this.setState((prevState) => ({
            tags: prevState.tags.concat([tag])
        }), () => this.props.handleChange(this.state.tags));
    }

    removeTag(tag) {
        this.setState((prevState) => ({
            tags: prevState.tags.filter(tag1 => tag1 != tag)
        }), () => this.props.handleChange(this.state.tags));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.showFilters()} id="filter-button"> Filter by tags</button>
                {this.state.tags.map(tag => <FilterTag key={tag} name={tag} remove={this.removeTag.bind(this, tag)}></FilterTag>) }
                {this.state.clicked && <div id="filter-dropdown"><TagsMenu program={this.props.program} handleChange={this.addTag.bind(this)}/> </div>}
            </div>
        );
    }
}

export default FilterButton;