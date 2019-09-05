import Talk from './Talk';

// Room used in one timeslot
class Room {
    name: string = "room?"
    talks: Array<Talk> = []
}

export default Room;