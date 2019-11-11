class Time {
    public hours: number
    public minutes: number

    public constructor(hours: string | number = "0", minutes: string | number = "0") {
        this.hours = Number(hours);
        this.minutes = Number(minutes);
    }

    public toString(del: string = ".") : string {
        return ("0" + this.hours).slice(-2) + del +  ("0" + this.minutes).slice(-2); 
    }

    public add(time: Time) : Time {
        this.hours += time.hours + Math.floor((this.minutes + time.minutes) / 60);
        this.minutes = (this.minutes + time.minutes) % 60;

        return this;
    }

    public toMinutes() {
        return this.hours * 60 + this.minutes;
    }

    public copy(): Time {
        const t = new Time();
        t.add(this);

        return t;
    }

    // Returns diff in minutes
    public diff(time: Time) : Number {
        return Math.abs(this.hours * 60 + this.minutes - time.minutes - time.hours * 60);
    }

    public static fromString(str: string, del: string = '.') {
        const strs = str.split(del);
        return new Time(strs[0], strs[1]);
    }

    // When getting objects back from firestore and casting them to Time they will not inherit the prototype...
    // Static methods are used instead
    public static diff(time1: Time, time2: Time) {
        return Math.abs(time2.hours * 60 + time2.minutes - time1.minutes - time1.hours * 60);    
    }

    public static parse(str: string) {
        const splitted = str.split(":");
        return new Time(splitted[0], splitted[1]);
    }

    public static compare(time1: Time, time2: Time) {
        return time1.hours == time2.hours ? (time1.minutes - time2.minutes) : (time1.hours - time2.hours);
    }

    public static toString(time: Time, del: string = ".") : string {
        return time && ("0" + time.hours).slice(-2) + del +  ("0" + time.minutes).slice(-2); 
    }

}

function getDuration(type: string) : Time {
    switch(type) {
        case "Lightning talk": return new Time("00", "10");
        case "Short-talk": return new Time("00", "30");
        case "Long presentation": return new Time("01", "00");
        case "Workshop": return new Time("01", "30");
    }
    return new Time();
}

function getDurationMinutes(type: string) : Number {
    return getDuration(type).toMinutes();
}

export {
    Time,
    getDuration,
    getDurationMinutes,
};