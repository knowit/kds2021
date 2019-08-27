import React from 'react';
import SpeakerSelector from './SpeakerSelector';
import { firestore } from './../../firebase'

interface IState {
    speakers: Array<string>,
    selectedSpeakers: Array<string>,
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
            selectedSpeakers: this.props.value.concat([""])
        }
    }

    async getSpeakers() {
        const res = await firestore.collection('speakers').get();
        const tags = res.docs.map(doc => {
            return doc.data();
        });

        return tags;
    }

    async componentDidMount() {
        const speakers = await this.getSpeakers();
        this.setState({
            speakers: speakers.map(speaker => speaker.name)
        });
    }

    addSpeaker() {
        this.setState((prev) => ({
            selectedSpeakers: prev.selectedSpeakers.concat([""])
        }));
    }

    updateSpeakers(index, speaker) {
        this.setState((prev) => {
            const speakers = prev.selectedSpeakers;
            speakers[index] = speaker;
            return {
                selectedSpeakers: speakers
            }
        }, () => this.props.onChange(this.state.selectedSpeakers));
    }

    render() {
        return (
            <div>
                {
                    this.state.selectedSpeakers.map((speaker, i) => {
                        return <SpeakerSelector key={i} speakers={this.state.speakers} value={speaker} onChange={(val) => this.updateSpeakers(i, val)}></SpeakerSelector>
                    })
                }
                
                <br></br><button onClick={() => this.addSpeaker()}>Add cospeaker</button>
            </div>
        );
    }

}

export default SpeakersSelector