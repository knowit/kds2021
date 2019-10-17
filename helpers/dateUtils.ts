export default class DateUtils {
    private static readonly weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    public static dayOfWeek(date: Date) {
        return this.weekdays[date.getDay()];
    }
}