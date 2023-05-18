import calendarInfo from "./calendarInfo";

class generateCalendar {
    constructor(options) {
        this.options = options;
        this.minYear = 2000;
        this.maxYear = 3000;
    }

    drawCalendar(year = !1, month = !1, day = !1) {
        function drawWeek() {};
        function drawDay() {};
    };

    getSettings({year, month, day}) {
        const settings = {today: {}}, date = new Date();
        let ind, strDate;

        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(day);

        const {today} = settings;

        strDate = date.toString().split(' ')[0];

        ind = calendarInfo.dayName.ddd.indexOf(strDate);

        today.dayIndex = ind;
        today.dayName = strDate;
        today.dayFullName = calendarInfo.dayName.full[ind];
    };

    activateYear(years, thisYear) {};
}

export default generateCalendar;