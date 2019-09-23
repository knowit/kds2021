import "../../styling/filterStyles.scss";
import React from 'react';
import Program from '../../models/data.json';
import FilterTag from './FilterTag';

interface IState {
    open: boolean
}

interface IProps {
    onChange: (tags: string[]) => void
    selectedTags: string[]
}

class Filter extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState(prev => ({
            open: !prev.open
        }));
    }

    addTag(tag) {
        this.props.onChange(this.props.selectedTags.concat([tag]));
    }

    removeTag(tag) {
        this.props.onChange(this.props.selectedTags.filter(t => t != tag));
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
                        {this.props.selectedTags.map(tag => <FilterTag key={tag} name={tag} selected={true} onClick={() => this.removeTag(tag)}></FilterTag>)}
                    </div>
                    <div className="nonActive">
                        <p>Click to select filters</p>
                        {Program.program.tags.filter(tag => !this.props.selectedTags.some(t => t == tag)).map(tag => <FilterTag key={tag} name={tag} onClick={() => this.addTag(tag)}></FilterTag>)}
                    </div>
                </div>
            </div>);
    }
}
export default Filter;
