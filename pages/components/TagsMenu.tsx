
const TagsMenu = props => {
    return (
        <div className="dropdown-content">
            {props.program.tags.map(tag =>
                <div key={tag}>
                    <button onClick={() => props.handleChange(tag)} id="tag-button">{tag}</button>
                    <br />
                </div>
            )}
        </div>
    );
}

export default TagsMenu;