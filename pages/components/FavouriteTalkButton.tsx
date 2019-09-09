import React from "react";

interface IProps {
    talkId: string,
    onChange: (val: boolean) => void
}
class FavouriteTalkButton extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    favouriteButtonClick = () => {
        if (!localStorage.getItem(this.props.talkId)) {
            localStorage.setItem(this.props.talkId, this.props.talkId)
        } else {
            localStorage.removeItem(this.props.talkId)
        }
        
        this.setState({
            clicked: !this.state.clicked
        }, () => this.props.onChange(this.state.clicked));
        

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