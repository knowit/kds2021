
const TagsMenu = props => {
    return (
        <div className="dropdown-content">
            {props.program.tags.map(tag =>
                <div>
                    <button onClick={() => applyFilter(tag, props.program)} id="tag-button">{tag}</button>
                    <br />
                </div>
            )}
        </div>
    );
}

function applyFilter(tag, program) {
    var talksWithTag = [];
    program.days
        .map(day => day.slots
            .map(slot => slot.rooms && slot.rooms
                .map(room => room.talks
                    .map(talk => {
                        if (talk.tags.includes(tag)) {
                            talksWithTag.push(talk.talkId);
                        }
                    }
                    ))))
    console.log(talksWithTag);
}

export default TagsMenu;