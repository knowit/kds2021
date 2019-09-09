import React, { Ref } from 'react';
import { firestore } from '../../firebase'
import Loader from './Loader';

interface IProps {
    onChange: (val: Array<string>) => void,
    value: Array<any>,
    className: string
}

interface IState {
    tags: Array<string>,
    selectedTags: Array<string>
    loading: boolean
}

class TagSelector extends React.Component<IProps, IState> {
    private newTagNameInput: any;
    private valueUpdated: boolean = false;

    constructor(props) {
        super(props);

        this.newTagNameInput = React.createRef();

        this.state = {
            tags: [],
            selectedTags: this.props.value || [],
            loading: true
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

    componentDidUpdate() {
        if (!this.valueUpdated && this.props.value && this.props.value.length > 0) {
            this.valueUpdated = true;
            this.setState({
                selectedTags: this.props.value
            });
        }
    }

    async componentDidMount() {
        const tags = await this.getTags();
        this.setState({
            tags: tags.map(tag => tag.name),
            loading: false
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
        return (
            <Loader loading={this.state.loading}>
            <div className={this.props.className}>
                <div className="tags">
                        {this.state.tags.map(tag =>
                            <div className="tag-row tag" key={tag}>
                                <label>
                                    <input type="checkbox" hidden onChange={(evt) => this.updateTag(evt.target.checked, tag)} checked={this.state.selectedTags.includes(tag)} />
                                    <span className="no-select">{tag}</span>
                                </label>
                            </div>
                        )}
                </div>
                <div className="tag-row">
                    <span>Can't find a specific tag? Create a new one!</span><br></br>
                    <input type="text" ref={this.newTagNameInput} name="" id="" /><button onClick={() => this.newTag()}>Create tag</button>
                </div>
            </div>
            </Loader>);
    }
}

export default TagSelector;