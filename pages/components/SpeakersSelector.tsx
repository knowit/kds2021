import React from 'react';
import SpeakerSelector from './SpeakerSelector';
import { firestore, auth } from './../../firebase'

interface IState {
    speakers: Array<any>,
    cospeakers: Array<any>,
    speaker: any
}

interface IProps {
    className: string,
    value: Array<any>,
    onChange: (val: Array<any>) => void
}

class SpeakersSelector extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            speakers: [],
            cospeakers: this.props.value,
            speaker: {
                data: {
                    name: ""
                },
                ref: null
            }
        }
    }

    async getSpeakers() {
        const res = await firestore.collection('speakers').get();
        const speakers = res.docs.map(doc => {
            return {
                data: doc.data(),
                ref: doc.ref
            };
        });

        return speakers;
    }

    async getTalkSpeaker() {
        const speaker = await firestore.collection('speakers').where('email', '==', auth.currentUser.email).get();
        if (speaker.docs.length > 0) {
            return {
                data: speaker.docs[0].data(),
                ref: speaker.docs[0].ref
            };
        }
        return null;
    }

    async componentDidMount() {
        const talkSpeaker = await this.getTalkSpeaker();
        const speakers = await this.getSpeakers();
        this.setState({
            speakers: speakers,
            speaker: talkSpeaker
        });
    }

    addSpeaker() {
        this.setState((prev) => ({
            cospeakers: prev.cospeakers.concat([{
                data: null,
                ref: null
            }])
        }));
    }

    updateSpeakers(index, speaker) {
        this.setState((prev) => {
            const speakers = prev.cospeakers;
            speakers[index] = speaker;
            return {
                cospeakers: speakers
            }
        }, () => this.props.onChange([this.state.speaker].concat(this.state.cospeakers)));
    }

    render() {
        return (
            <div className={`speakers-selector ${this.props.className}`}>
                <p>{this.state.speaker.data.name}</p>
                {
                    this.state.cospeakers.map((speaker, i) => {
                        return <SpeakerSelector key={i} speakers={this.state.speakers} onChange={(val) => {this.updateSpeakers(i, val)}}></SpeakerSelector>
                    })
                }
                
                <button onClick={() => this.addSpeaker()}>Add cospeaker</button>
            </div>
        );
    }

}

export default SpeakersSelector