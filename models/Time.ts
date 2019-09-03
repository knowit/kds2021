class Time {
    minute: number
    hour: number

    constructor(hour?: number, minute?: number) {
        this.hour = hour || 0;
        this.minute = minute || 0;
    }

    public toString() {
        return ("0" + this.hour).slice(-2) + ":" +  ("0" + this.minute).slice(-2);
    }

    public static parse(str: string) {
        const splitted = str.split(":");
        return new Time(+splitted[0], +splitted[1]);
    }
}

export default Time;