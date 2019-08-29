import React from 'react';
import SpeakersSelector from './SpeakersSelector';

interface IProps {
    speakers: Array<any>,
    onChange?: (val) => void
}

class SpeakerSelector extends React.Component<IProps, any> {

    // This uses name as id, for now there is no way to differenciate 2 people with same name, first one will selected and 2nd wont be able to be selected
    handleChange(evt) {
        const val = evt.target.value;

        const speakers = this.props.speakers.filter(speaker => speaker.data.name == val);
        if (speakers.length > 0) {
            const speaker = speakers[0]; // Just choose first match for now
            this.props.onChange(speaker);
        }
    }

    render() {
        return (
            <div>
                <input list="list" onChange={this.handleChange.bind(this)}>
                </input>
                <datalist id="list" onInput={console.log}>
                    { this.props.speakers.map((speaker, i) => <option key={i} value={speaker.data.name}></option>)}
                </datalist>
            </div>
        );
    }

}

export default SpeakerSelector