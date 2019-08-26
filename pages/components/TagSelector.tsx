import React, { Ref } from 'react';
import { firestore } from '../../firebase'
import TagsMenu from './TagsMenu';

interface IState {
    tags: Array<String>,
    selectedTags: Array<String>
}

class TagSelector extends React.Component<any, IState> {
    newTagNameInput: any;

    constructor(props) {
        super(props);

        this.newTagNameInput = React.createRef();

        this.state = {
            tags: [],
            selectedTags: []
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

    render() {
        console.log(this);
        return (<div>
            {this.state.tags.map(tag =>
                <div className="tag-row">
                    <label >{tag}</label>
                    <input type="checkbox" />
                </div>
            )}
            <div className="tag-row">
                <input type="text" ref={this.newTagNameInput} name="" id="" /><button onClick={() => this.newTag()}>+</button>
            </div>
        </div>);
    }
}

export default TagSelector;