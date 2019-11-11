import "../../styling/filterStyles.scss";
import React from 'react';
import FilterTag from './FilterTag';
import ShowOnlyFavoritesbutton from './ShowOnlyFavoritesButton';
import ApiHandler from '../../helpers/apiHandler';
import Languages from '../../models/Languages.json';
import Router from 'next/router';

interface IState {
    open: boolean
    tags: string[]
}

interface IProps {
    onTagChange: (tags: string[]) => void
    onFavoriteChange: (val: boolean) => void
    selectedTags: string[]
    showOnlyFavorites: boolean
    className?: string
    type?: 'dropdown' | 'slide-left'
}

class Filter extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            open: false
        }
    }

    async componentDidMount() {
        const id = Router.asPath.split('id=')[1]
        this.setState({
            tags: (await ApiHandler.getTags(id)).concat(Languages)
        });
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
        this.props.onTagChange(this.props.selectedTags.filter(t => t !=  tag));
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
                        {this.props.selectedTags && this.props.selectedTags.map(tag => <FilterTag key={tag} name={tag} selected={true} onClick={() => this.removeTag(tag)}></FilterTag>)}
                    </div>
                    <div className="nonActive">
                        <p className="subheader">Click to select filters</p>
                        {this.state.tags.filter(tag => this.props.selectedTags && !this.props.selectedTags.some(t => t == tag)).map(tag => <FilterTag key={tag} name={tag} onClick={() => this.addTag(tag)}></FilterTag>)}
                    </div>
                </div>
            </div>);
    }
}
export default Filter;
