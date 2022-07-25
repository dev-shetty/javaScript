const hourEle = document.querySelector(".hour");
const minuteEle = document.querySelector(".minute");
const secondEle = document.querySelector(".second");
const AMPM = document.querySelector(".am-pm");
const dateEle = document.querySelector(".date");
const monthEle = document.querySelector(".month");
const yearEle = document.querySelector(".year");
const dayEle = document.querySelector(".day");



setInterval(time => {
    const date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let am_pm = "AM";
    let currentDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();


    // Converting to 12 Hr format
    if(hour > 12) {
        hour -= 12;
        am_pm = "PM"
    }
    if(hour == 0) {
        hour = 12;
        am_pm = "AM"
    }


    // Adding 0 infront if time is single digit since the Date gives without zero
    if(hour<10) {
        hour = "0" + hour;
    }
    if(minute<10) {
        minute = "0" + minute;
    }
    if(second<10) {
        second = "0" + second;
    }

    // For some reason the month is 1 less so...
    month += 1;

    // Converting month number to Month text 
    switch (month) {
        case 1: month = "JAN"
                break;
        case 2: month = "FEB"
                break;
        case 3: month = "MAR"
                break;
        case 4: month = "APR"
                break;
        case 5: month = "MAY"
                break;
        case 6: month = "JUN"
                break;
        case 7: month= "JUL"           
                break;
        case 8: month= "AUG"           
                break;
        case 9: month= "SEP"           
                break;
        case 10: month= "OCT"           
                break;
        case 11: month= "NOV"           
                break;
        case 12: month= "DEC"           
                break;
        default: month = "MON"
                break;
    }

    // Converting Day number to Day text
    switch (day) {
        case 0: day = "SUNDAY"
                break;
        case 1: day = "MONDAY"
                break;
        case 2: day = "TUESDAY"
                break;
        case 3: day = "WEDNESDAY"
                break;
        case 4: day = "THURSDAY"
                break;
        case 5: day = "FRIDAY"
                break;
        case 6: day = "SATURDAY"
                break;
        default: day= "DAY"
                break;
    }

    hourEle.textContent = hour;
    minuteEle.textContent = minute;
    secondEle.textContent = second;
    AMPM.textContent = am_pm;

    dayEle.textContent = day;
    dateEle.textContent = currentDate;
    monthEle.textContent = month;
    yearEle.textContent = year;
}, 1000);






// setTimeout(function() {
//     window.location.reload(1);
// }, 1000)
