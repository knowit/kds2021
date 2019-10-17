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
}


interface Talk {
    type: string,
    duration?: string
}

function getDuration(talk: Talk): Time {
    switch (talk.type) {
        case "Lightning talk": return new Time("00", "10");
        case "Short-talk": return new Time("00", "30");
        case "Long-talk": return new Time("01", "00");
        case "Workshop":
            if (!talk.duration) break;
            const time = talk.duration.split(':');
            return new Time(time[0], time[1]);
    }
    return new Time();
}

export {
    Time,
    getDuration
};