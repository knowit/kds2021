import "../../styling/filterStyles.scss";
import React from 'react';
import Program from '../../models/data.json';
import FilterTag from './FilterTag';
import ShowOnlyFavoritesbutton from './ShowOnlyFavoritesButton';

interface IState {
    open: boolean
}

interface IProps {
    onTagChange: (tags: string[]) => void
    onFavoriteChange: (val: boolean) => void
    selectedTags: string[]
    showOnlyFavorites: boolean
    className?: string,
    type?: 'dropdown' | 'slide-left'
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
        this.props.onTagChange(this.props.selectedTags.concat([tag]));
    }

    removeTag(tag) {
        this.props.onTagChange(this.props.selectedTags.filter(t => t != tag));
    }

    render() {
        return (
            <div className={`filter-container ${this.props.className} ${this.props.type || 'slide-left'}`}>
                <div className={`filter-button ${this.state.open ? 'open' : ''}`} onClick={() => this.toggle()}>
                    <div className="filter-button-container">
                        <span className="top" />
                        <span className="middle" />
                        <span className="bottom" />
                    </div>
                </div>
                <div className={`filter ${this.state.open ? 'open' : ''}`}>
                    <img src='../static/close-24px.svg' className="close" onClick={() => this.toggle()}></img>
                    <h1 className="header">Filter by tag</h1>
                    <div className="favorite">
                        <p className="subheader">Show only favorites: </p>
                        <ShowOnlyFavoritesbutton showOnlyFavorites={this.props.showOnlyFavorites} onClick={() => this.props.onFavoriteChange(!this.props.showOnlyFavorites)}></ShowOnlyFavoritesbutton>
                    </div>

                    <div className="active">
                        <p className="subheader">Active filters:</p>
                        {this.props.selectedTags.map(tag => <FilterTag key={tag} name={tag} selected={true} onClick={() => this.removeTag(tag)}></FilterTag>)}
                    </div>
                    <div className="nonActive">
                        <p className="subheader">Click to select filters</p>
                        {Program.program.tags.concat(Program.program.languages).filter(tag => !this.props.selectedTags.some(t => t == tag)).map(tag => <FilterTag key={tag} name={tag} onClick={() => this.addTag(tag)}></FilterTag>)}
                    </div>
                </div>
            </div>);
    }
}
export default Filter;
