import { Time } from '../helpers/time';

class Timeslot {
    rooms: Array<any> = []
    from: Time = new Time()
    to: Time = new Time()
    type: string = ""
}

export default Timeslot;