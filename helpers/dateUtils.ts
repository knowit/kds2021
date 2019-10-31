export default class DateUtils {
    private static readonly weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    public static dayOfWeek(date: Date) {
        return this.weekdays[date.getDay()];
    }
    public static formatDate(date: Date) {
        let str = "";
        str += date.getFullYear();
        str += "-";
        str += ("0" + date.getMonth()).slice(-2);
        str += "-";
        str += ("0" + date.getDate()).slice(-2);
        return str;
    }
}