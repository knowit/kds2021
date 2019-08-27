import React, { Ref } from 'react';
import { firestore } from '../../firebase'
import TagsMenu from './TagsMenu';

interface IProps {
    onChange: (val: Array<string>) =>  void,
    value: Array<string>
}

interface IState {
    tags: Array<string>,
    selectedTags: Array<string>
}

class TagSelector extends React.Component<IProps, IState> {
    newTagNameInput: any;

    constructor(props) {
        super(props);

        this.newTagNameInput = React.createRef();

        this.state = {
            tags: [],
            selectedTags: this.props.value
        };
    }

    async getTags() {
        const res = await firestore.collection('tags').get();
        const tags = res.docs.map(doc => {
            return doc.data();
        });

        return tags;
    }

    newTag() {
        const tag = this.newTagNameInput.current.value;

        this.newTagNameInput.current.value = "";

        if (tag == '' || this.state.tags.includes(tag)) {
            return;
        }

        this.setState((prev) => ({
            tags: prev.tags.concat([tag])
        }));

        firestore.collection('tags').add({
            name: tag
        }).then(console.log)
        .catch(console.log)
    }

    async componentDidMount() {
        const tags = await this.getTags();
        this.setState({
            tags: tags.map(tag => tag.name)
        });
    }

    selectTag(tag: string) {
        this.setState((prev) => ({
            selectedTags: prev.selectedTags.concat([tag])
        }), () => this.props.onChange(this.state.selectedTags));
    }

    deselectTag(tag: string) {
        this.setState((prev) => ({
            selectedTags: prev.selectedTags.filter(t => t !== tag)
        }), () => this.props.onChange(this.state.selectedTags));
    }

    updateTag(checked: boolean, tag: string) {
        if (checked && !this.state.selectedTags.includes(tag)) {
            this.selectTag(tag);
        }
        else {
            this.deselectTag(tag);
        }
    }

    render() {
        return (<div>
            {this.state.tags.map(tag =>
                <div className="tag-row" key={tag}>
                    <label >{tag}</label>
                    <input type="checkbox" onChange={(evt) => this.updateTag(evt.target.checked, tag)} checked={this.state.selectedTags.includes(tag)}/>
                </div>
            )}
            <div className="tag-row">
                <input type="text" ref={this.newTagNameInput} name="" id="" /><button onClick={() => this.newTag()}>+</button>
            </div>
        </div>);
    }
}

export default TagSelector;