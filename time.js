export function time(clock){
    function showTime() {
        let currentTime = new Date();
        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
        let am_pm = "AM";

        // Setting time for 12-hour format
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = "PM";
        } else if (hour == 0) {
            hour = 12;
        }

        // Formatting time components
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let Time =
            (hour +
            ":" +
            min +
            ":" +
            sec +
            " " +
            am_pm);

        // Displaying the time
        clock.innerHTML = Time;
    }
    // Calling showTime function every second
    setInterval(showTime, 1000);
}