const dayOfWeekOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];    // order to sort days by

/**
 * The schedule dict (from ./scheduleMaker.js) contains a list of dicts representing days.
 * Sort this list with respect to value = day name, using the order defined in dayOfWeekOrder
 * 
 * @param {*} schedule dictionary created by scheduleMaker.buildSchedule()
 */
export function sortByDay(schedule) {
    var dayListShortcut = schedule["program"]["days"];   // list of dicts to be sorted by day of week
    if (dayListShortcut == undefined) throw Error("Schedule lacks conventional structure, should contain schedule[program][days]");
    dayListShortcut.sort((dict1, dict2) => {
        const day1 = dict1["day"];
        const day2 = dict2["day"];
        if (day1 == undefined || day2 == undefined) throw Error("Dicts in list of days doesn't contain key = 'day'");
        if (!dayOfWeekOrder.includes(day1)) throw Error(`Day: ${day1} is not a valid day of week, must be capitalized english`);
        if (!dayOfWeekOrder.includes(day2)) throw Error(`Day: ${day2} is not a valid day of week, must be capitalized english`);

        // sort by comparing each day's index in the dayOfWeekOrder list
        const i1 = dayOfWeekOrder.indexOf(day1);
        const i2 = dayOfWeekOrder.indexOf(day2);
        return i1 < i2 ? -1 : 1;
    })
}

/**
 * The schedule dict (from ./scheduleMaker.js) contains a list of dicts representing slots.
 * Sort this list with respect to timeStart integer
 * 
 * @param {*} schedule dictionary created by scheduleMaker.buildSchedule()
 */
export function sortByTimeStart(schedule) {
    var dayListShortcut = schedule["program"]["days"];   // "shortcut" to the list of days
    if (dayListShortcut == undefined) throw Error("Schedule lacks conventional structure, should contain schedule[program][days]");
    
    for (var i = 0; i < dayListShortcut.length; i++) { 
        var dayDict = dayListShortcut[i];                
        var slotListShortcut = dayDict["slots"];      // each day has a list of slots dicts
        if (slotListShortcut == undefined) throw Error("Schedule lacks conventional structure, should contain schedule[program][days][slots]");

        // sort the slot dicts by comparing their startTime value
        slotListShortcut.sort((dict1, dict2) => {
            const timeStart1 = dict1["timeStart"];
            const timeStart2 = dict2["timeStart"];
            if (timeStart1 == undefined || timeStart2 == undefined) throw Error("Dicts in list of slots doesn't contain key = 'timeStart'");
            return timeStart1 < timeStart2 ? -1 : 1;
        })
    }
}
// export default sortMethods = { sortByDay, sortByTimeStart };