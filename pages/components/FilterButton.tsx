import React from "react";
import TagsMenu from './TagsMenu';
import FilterTag from "./FilterTag";

interface IProps {
    tags: any,
    handleChange: any,
    value: any
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
        return (<TagsMenu />);
    }

    addTag(tag) {
        if (this.props.value.includes(tag)) { // Avoid duplicates
            return;
        }
        this.props.handleChange(this.props.value.concat([tag]));
    }

    removeTag(tag) {
        this.props.handleChange(this.props.value.filter(tag1 => tag1 != tag));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.showFilters()} id="filter-button"> Filter by tags</button>
                {this.props.value && this.props.value.map(tag => <FilterTag key={tag} name={tag} remove={this.removeTag.bind(this, tag)}></FilterTag>) }
                {this.state.clicked && <div id="filter-dropdown"><TagsMenu tags={this.props.tags} handleChange={this.addTag.bind(this)}/> </div>}
            </div>
        );
    }
}

export default FilterButton;