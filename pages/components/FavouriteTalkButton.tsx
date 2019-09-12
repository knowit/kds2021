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
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAAmJLR0QA/4ePzL8AAAEYSURBVEjHY2AYBahAlqGT4RLDF4avDFcZJjJowsW1gLyrQNEvDBcZOhhkcGnPYfjO8B8J/mHoYmBmYGHoBrKQxb8xZGPTXoWiCAY3M2zBKl6Brt2a4S9WhbjgXwZLVAP2kqQdBPcgaxcj0X5ICIkiDHAkWTsI2iMM8CHLAG+EATpkGaCNMIATmERI1f6FgQM5GBeRbMB81Gi0YPhHkvZ/DGboSWk5SQYsxkzK0gxviNb+mkEKW27wItIb/xj8cOXHUqIMKMFXIrQS1N5MqFDpxat9CuFSiQlY+uDSPpGBkbiirRyr9g5SSscEht9omTeD1ALWH1j2wbT/YAglp4y2gCat9wx25Bbz2gyPGJ4xGFBSU8gD4XAHAKoautd2XZI2AAAAAElFTkSuQmCC'
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAAmJLR0QA/4ePzL8AAAGNSURBVEgN7cG7ShUAAAbgr1SoB6ihCw5OdRpaDCvIoBy6kBBFRFHg4pDiUhRNkQRagVgPENHQAxQOYb5Dhi8Q2OARgjpeyOP5w0E5Hm9H26Lv81+NwwaNK5kxYdgRy44aNmFGyRcDDtlAjzkRERFlzzVo9EJZRETErHvW8VhEFI0YUxQRH3wUEUVjRhRFxCM1TlsU83o0WtLglikREVNua7CkUa95seikVT6LuKpai0kRk1pUuyZiVJX9FsUntQqmTSuoNSrK9llxVkSvtVq1WqtPRLsVl0XcUa+7Ii5ZcUzEU/XqF1GwYq+SGFevr6JkjypvRZxTjw4Rb6zSpiLGNdlKkwlRcUKN9yIGbeWliHfWOGhaVNywmZsqouiAdVxUEb9dsJHz5kXFFRt4IOKXNus5pSTivk08E1HSoVa7nyL6beG1iDmdqnWaE/HKlnYbFrGgy7IuCyKG7VKXhyIqnljSpyJiwDZ0K4sYMiSirNs2dZoVETHvuh1oMy3ihzN2qOCb7477C82a/ev+ABhYwYF0Ebe0AAAAAElFTkSuQmCC'
            return (
                <button onClick={() => this.favouriteButtonClick()} id="favourite-talk-button">
                    <img src={icon}></img>                
            </button>
        );
    }
}

export default FavouriteTalkButton;