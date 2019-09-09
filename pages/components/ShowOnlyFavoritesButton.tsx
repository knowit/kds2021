import { Component }from "react";

class ShowOnlyFavoritesButton extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="only-favorites-button">
                <label>
                    <input type="checkbox" onChange={e => this.props.handleChange(e.target.checked)} defaultChecked={this.props.value}/>
                    Show only favorites
                </label>
            </div>
        );
    }
}

export default ShowOnlyFavoritesButton;