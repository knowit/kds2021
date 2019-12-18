class Time {
    public hours: number
    public minutes: number

    public constructor(hours: string = "0", minutes: string = "0") {
        this.hours = parseInt(hours);
        this.minutes = parseInt(minutes);
    }

    public toString(del: string = "."): string {
        return ("0" + this.hours).slice(-2) + del + ("0" + this.minutes).slice(-2);
    }

    public add(time: Time): Time {
        this.hours += time.hours + Math.floor((this.minutes + time.minutes) / 60);
        this.minutes = (this.minutes + time.minutes) % 60;

        return this;
    }

    public copy(): Time {
        const t = new Time();
        t.add(this);

        return t;
    }

    // Returns diff in minutes
    public diff(time: Time): Number {
        return Math.abs(this.hours * 60 + this.minutes - time.minutes - time.hours * 60);
    }

    public static fromString(str: string, del: string = '.') {
        const strs = str.split(del);
        return new Time(strs[0], strs[1]);
    }

    public static fromNumber(int: number) {
        var tt = int.toString().substring(0, int.toString().length-2)
        var mm = int.toString().substring(int.toString().length-2, int.toString().length)
        return new Time(tt, mm);
    }
}


interface Talk {
    type: string,
    duration?: string
}

function getDuration(talk: Talk): Time {
    switch (talk.type) {
        case "Lightning talk (10 minutes)": return new Time("00", "10");
        case "Short presentation (30 minutes)": return new Time("00", "30");
        case "Long presentation (60 minutes)": return new Time("01", "00");
        case "Workshop (90 minutes)":return new Time("01", "30");
    }
    return new Time();
}

export {
    Time,
    getDuration
};