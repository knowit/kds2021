import React from 'react';

interface IProps {
    speakers: Array<string>,
    onChange?: (val: string) => void
}

class SpeakerSelector extends React.Component<IProps, any> {


    render() {
        return (
            <div>
                <input list="list" onChange={(evt) => {
                    const val = evt.target.value;
                    this.props.speakers.includes(val) && this.props.onChange && this.props.onChange(val);
                }}>
                </input>
                <datalist id="list">
                    { this.props.speakers.map(speaker => <option key={speaker} value={speaker}/>)}
                </datalist>
            </div>
        );
    }

}

export default SpeakerSelector