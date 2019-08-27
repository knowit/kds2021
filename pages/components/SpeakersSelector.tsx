import React from 'react';
import SpeakerSelector from './SpeakerSelector';
import { firestore, auth } from './../../firebase'

interface IState {
    speakers: Array<string>,
    cospeakers: Array<string>,
    speaker: string
}

interface IProps {
    value: Array<string>,
    onChange: (val: Array<string>) => void
}

class SpeakersSelector extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            speakers: [],
            cospeakers: this.props.value,
            speaker: ""
        }
    }

    async getSpeakers() {
        const res = await firestore.collection('speakers').get();
        const speakers = res.docs.map(doc => {
            return doc.data();
        });

        return speakers;
    }

    async getTalkSpeaker() {
        const speaker = await firestore.collection('speakers').where('email', '==', auth.currentUser.email).get();
        if (speaker.docs.length > 0) {
            return speaker.docs[0].data();
        }
        return null;
    }

    async componentDidMount() {
        const talkSpeaker = await this.getTalkSpeaker();
        const speakers = await this.getSpeakers();
        this.setState({
            speakers: speakers.map(speaker => speaker.name),
            speaker: talkSpeaker.name
        });
    }

    addSpeaker() {
        this.setState((prev) => ({
            cospeakers: prev.cospeakers.concat([""])
        }));
    }

    updateSpeakers(index, speaker) {
        this.setState((prev) => {
            const speakers = prev.cospeakers;
            speakers[index] = speaker;
            return {
                cospeakers: speakers
            }
        }, () => this.props.onChange(this.state.cospeakers.concat([this.state.speaker])));
    }

    render() {
        return (
            <div>
                <p>{this.state.speaker}</p>
                {
                    this.state.cospeakers.map((speaker, i) => {
                        return <SpeakerSelector key={i} speakers={this.state.speakers} onChange={(val) => this.updateSpeakers(i, val)}></SpeakerSelector>
                    })
                }
                
                <br></br><button onClick={() => this.addSpeaker()}>Add cospeaker</button>
            </div>
        );
    }

}

export default SpeakersSelector