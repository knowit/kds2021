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

    public static parse(str: string) {
        const splitted = str.split(":");
        return new Time(+splitted[0], +splitted[1]);
    }
}

export default Time;