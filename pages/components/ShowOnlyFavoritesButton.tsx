import { Component }from "react";

class ShowOnlyFavoritesButton extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const src = this.props.showOnlyFavorites ? '../static/only-favorite-button.svg' : '../static/only-favorite-button-off.svg';
        return (
            <img src={src} onClick={this.props.onClick}></img>
        );
    }
}

export default ShowOnlyFavoritesButton;