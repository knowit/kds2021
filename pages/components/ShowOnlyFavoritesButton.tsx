import { Component }from "react";
import '../../styling/onlyFavoritesButtonStyles.scss';

class ShowOnlyFavoritesButton extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`switch ${this.props.showOnlyFavorites ? 'on' : ''}`} onClick={() => this.props.onClick(!this.props.showOnlyFavorites)}>
                <div className="ball">

                </div>
            </div>
        );
    }
}

export default ShowOnlyFavoritesButton;