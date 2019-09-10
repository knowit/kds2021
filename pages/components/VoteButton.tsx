import React from 'react';
import FirestoreHandler from '../../helpers/firestoreHandler';
import { auth } from '../../firebase';

interface IProps {
    talkId: string,
    currentFavoriteId: string,
    onChange: (id: string) => void
}


class VoteButton extends React.Component<IProps, any> {
    async vote (talkId: string) {
        const auid = auth.currentUser.uid;

        const user = await FirestoreHandler.get('users', auid);

        user.vote = {
            talkId: talkId
        };

        const res = await FirestoreHandler.updateOrCreate('users', auid, user);
    }

    render() {
        return (<button onClick={() => this.vote(this.props.talkId)}>Vote</button>)
    }
}

export default VoteButton;