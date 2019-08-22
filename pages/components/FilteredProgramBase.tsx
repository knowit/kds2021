import { Component } from "react";
import { program as Program } from "../../models/data.json";

class FilteredProgramBase  extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
          filteredProgram: JSON.parse(JSON.stringify(Program)), // Need a deep copy
          showOnlyFavorites: false,
          tags: []
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
    }

    
    handleFilterChange(newVal) {
        this.setState({tags: newVal}, this.filterProgram);
    }
    handleFavoriteChange(newVal) {
        this.setState({showOnlyFavorites: newVal}, this.filterProgram);
        
    }

    filterProgram() {
        let filteredProgram = JSON.parse(JSON.stringify(Program));
        filteredProgram.days
            .forEach(day => day.slots
                .forEach(slot => slot.rooms && slot.rooms
                    .forEach(room => {
                        room.talks = room.talks
                            .filter(talk => {
                                if (this.state.showOnlyFavorites && !localStorage.getItem(talk.talkId)) {
                                    return false;
                                }
                                if (this.state.tags.length > 0 && !talk.tags.some(tag => this.state.tags.includes(tag))) {
                                    return false;
                                }
                                return true;
                            })
                    })));

        this.setState({filteredProgram: filteredProgram});
    }
}


export default FilteredProgramBase