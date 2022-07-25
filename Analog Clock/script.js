const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

let i = 1

setInterval(time => {
    const date = new Date;      // declare it inside setInterval otherwise time won't update;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();



    if(hour > 12) {
        hour -= 12;
    }
    if(hour == 0) {
        hour = 12;
    }
    secondHand.style.transform = "rotate(" + second*6 + "deg)";
    minuteHand.style.transform = "rotate(" + minute*6 + "deg)";
    hourHand.style.transform = "rotate(" + hour*30 + "deg)";



    // secondHand.style.transform = "rotate(" + 6*i + "deg)";
    // minuteHand.style.transform = "rotate(" + 0.1*i + "deg)";
    // hourHand.style.transform = "rotate(" + 0.0083333335*i + "deg)";
    // i++;
}, 1000);