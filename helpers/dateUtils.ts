import { Time } from './time'

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dayOfWeek(date: Date) {
    return date && weekdays[date.getDay()];
}

// Used to format date for date inputs when edting the schedule
function formatDate(date: Date) {
    let str = "";
    str += date.getFullYear();
    str += "-";
    str += ("0" + (date.getMonth() + 1)).slice(-2);
    str += "-";
    str += ("0" + date.getDate()).slice(-2);
    return str;
}

function createDate(time: Time, date: Date) {
    const d = new Date(date.getTime())
    d.setHours(time.hours);
    d.setMinutes(time.minutes);
    return d;
}

export {
    dayOfWeek,
    formatDate,
    createDate
}