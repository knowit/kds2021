class Time {
    minutes: number
    hours: number

    constructor(hour?: number, minute?: number) {
        this.hours = hour || 0;
        this.minutes = minute || 0;
    }

    public toString() {
        return ("0" + this.hours).slice(-2) + ":" +  ("0" + this.minutes).slice(-2);
    }

    public static toString(time: Time, del: string = ".") : string {
        return time && ("0" + time.hours).slice(-2) + del +  ("0" + time.minutes).slice(-2); 
    }

    public static parse(str: string) {
        const splitted = str.split(":");
        return new Time(+splitted[0], +splitted[1]);
    }

    public static compare(time1: Time, time2: Time) {
        return time1.hours == time2.hours ? (time1.minutes - time2.minutes) : (time1.hours - time2.hours);
    }
}

export default Time;