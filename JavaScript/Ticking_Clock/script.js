function getSecondsSinceStartOfDay() {
    var date = new Date();

    var secondsOfDay = date.getSeconds();
    var degreesSeconds = secondsOfDay * 6 - 180;
    console.log(secondsOfDay)

    var minutesOfDay =  date.getMinutes();
    var degreesMinutes = minutesOfDay * 6 -180;
    console.log(minutesOfDay)

    var hoursOfDay =  date.getHours();
    var degreesHours = hoursOfDay * 30 - 180;
    console.log(hoursOfDay)

    return [document.getElementById("seconds").style = 'transform: rotate(' + degreesSeconds + 'deg);',document.getElementById("minutes").style = 'transform: rotate(' + degreesMinutes + 'deg);', document.getElementById("hour").style = 'transform: rotate(' + degreesHours + 'deg);'];
}

window.onload = getSecondsSinceStartOfDay();
      
setInterval(getSecondsSinceStartOfDay, 1000);
// 12 is at 180 degrees
// 12 hours, 30 degrees per hour
// 60 minutes, 6 degrees per minute
// 60 seconds, 6 degrees per second
