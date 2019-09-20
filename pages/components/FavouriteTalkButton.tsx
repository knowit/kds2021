import React from "react";

interface IProps {
    talkId: string
}
class FavouriteTalkButton extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    favouriteButtonClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
        if (typeof localStorage != 'undefined' && !localStorage.getItem(this.props.talkId)) {
            localStorage.setItem(this.props.talkId, this.props.talkId)
        } else if (typeof localStorage != 'undefined') {
            localStorage.removeItem(this.props.talkId)
        }
    }
    isFavorited(id) {
        return typeof localStorage != 'undefined' && localStorage.getItem(id);
    }

    render() {
            var icon = '../static/heart-filled.png';
            
            if (this.isFavorited(this.props.talkId)) {
                icon = '../static/heart.png';
            }
            return (
                <button onClick={() => this.favouriteButtonClick()} id="favourite-talk-button">
                    <img src={icon}></img>                
            </button>
        );
    }
}

export default FavouriteTalkButton;