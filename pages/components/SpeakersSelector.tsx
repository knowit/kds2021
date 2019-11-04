import React from 'react';
import SpeakerSelector from './SpeakerSelector';
import Loader from './Loader';
import { firestore, auth } from '../../firebase_utils';
import FirestoreHandler from '../../helpers/firestoreHandler';
import ApiHandler from '../../helpers/apiHandler';

interface IState {
    speakers: Array<any>,
    cospeakers: Array<any>,
    speaker: any,
    loading: boolean
}

interface IProps {
    className: string,
    value: Array<any>,
    onChange: (val: Array<any>) => void
}

class SpeakersSelector extends React.Component<IProps, IState> {
    private valueUpdated: boolean = false;

    constructor(props) {
        super(props);

        this.state = {
            speakers: [],
            cospeakers: this.props.value || [],
            speaker: {
                name: ""
            },
            loading: true
        }
    }

    async getSpeakers() {
        const res = await ApiHandler.getSpeakers();
        return res;
    }

    async componentDidMount() {
        const speakers = await this.getSpeakers();

        const auid = auth.currentUser.uid;
        const talkSpeaker = speakers.find(speaker => speaker.id === auid);

        this.setState({
            speakers: speakers.filter(speaker => speaker.id !== auid),
            speaker: talkSpeaker,
            loading: false
        }, () => {
            this.setDefaultValue();
            this.onChange();
        });
    }

    setDefaultValue() {
        // Only set defaut if not been updated before and data is ready
        if (!this.valueUpdated && this.state.speakers && this.state.speakers.length > 0 && this.props.value && this.props.value.length > 0) {
            this.valueUpdated = true;
            const mappedDefaultValues = this.props.value.map((id) => {
                return this.state.speakers.filter((speaker) => speaker.id == id)[0] || null
            });

            this.setState({
                cospeakers: mappedDefaultValues
            });
        }
    }

    onChange() {
        const val = [this.state.speaker.id].concat(this.state.cospeakers.filter(speaker => speaker != null).map(speaker => speaker.id));
        this.props.onChange(val);
    }

    componentDidUpdate() {
        this.setDefaultValue();
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
        this.valueUpdated = true;

        this.setState((prev) => {
            const speakers = prev.cospeakers;
            speakers[index] = speaker;
            return {
                cospeakers: speakers
            }
        }, () => this.onChange());
    }

    render() {
        return (
            <Loader loading={this.state.loading}>

                <div className={`speakers-selector ${this.props.className}`}>
                    <p>{this.state.speaker.name}</p>
                    {
                        this.state.cospeakers && this.state.cospeakers.map((speaker, i) => {
                            return <SpeakerSelector key={i} speakers={this.state.speakers} onChange={(val) => { this.updateSpeakers(i, val) }} value={speaker}></SpeakerSelector>
                        })
                    }

                    <button onClick={() => this.addSpeaker()}>Add cospeaker</button>
                </div>
            </Loader>
        );
    }

}

export default SpeakersSelector