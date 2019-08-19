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
        })
        if (!localStorage.getItem(this.props.talkId)) {
            localStorage.setItem(this.props.talkId, this.props.talkId)
        } else {
            localStorage.removeItem(this.props.talkId)
        }
    }

    render() {

            var icon = localStorage.getItem(this.props.talkId)
            ? '../../static/star.svg'
            : '../../static/outline-star.svg'
            return (
                <button onClick={() => this.favouriteButtonClick()} id="favourite-talk-button">
                <img src={icon} />
            </button>
        );
    }
}

export default FavouriteTalkButton;