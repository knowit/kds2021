import "../../styling/filterStyles.scss";
import React from 'react';
import Program from '../../models/data.json';
import FilterTag from './FilterTag';

interface IState {
    open: boolean
    selectedTags: string[]
    nonSelectedTags: string[]
}

interface IProps {
    onChange: (tags: string[]) => void
}

class Filter extends React.Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedTags: [],
            nonSelectedTags: Program.program.tags
        }
    }

    toggle() {
        this.setState(prev => ({
            open: !prev.open
        }));
    }

    addTag(tag) {
        this.setState((prev) => ({
            nonSelectedTags: prev.nonSelectedTags.filter(t => t != tag),
            selectedTags: prev.selectedTags.concat([tag])
        }), () => this.props.onChange(this.state.selectedTags));
    }

    removeTag(tag) {
        this.setState((prev) => ({
            nonSelectedTags: prev.nonSelectedTags.concat([tag]),
            selectedTags: prev.selectedTags.filter(t => t != tag)
        }), () => this.props.onChange(this.state.selectedTags));
    }

    render() {
        return (
            <div>
                <div className={`filterButton ${this.state.open ? 'open' : ''}`} onClick={() => this.toggle()}>
                    <span className="top" />
                    <span className="middle" />
                    <span className="bottom" />
                </div>
                <div className={`filter ${this.state.open ? 'open' : ''}`}>
                    <h1>Filter by tag</h1>
                    <div className="active">
                        <p>Active filters:</p>
                        {this.state.selectedTags.map(tag => <FilterTag key={tag} name={tag} selected={true} onClick={() => this.removeTag(tag)}></FilterTag>)}
                    </div>
                    <div className="nonActive">
                        <p>Click to select filters</p>
                        {this.state.nonSelectedTags.map(tag => <FilterTag key={tag} name={tag} onClick={() => this.addTag(tag)}></FilterTag>)}
                    </div>
                </div>
            </div>);
    }
}
export default Filter;
