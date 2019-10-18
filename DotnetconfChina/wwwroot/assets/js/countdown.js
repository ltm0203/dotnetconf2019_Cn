function getTimeRemaining(endtime) {
    var dateToday = new Date();
    var t = endtime.getTime() - dateToday.getTime();
    var seconds = Math.floor((t/1000) % 60);
    var minutes = Math.floor((t/1000 / 60) % 60);
    var hours = Math.floor((t/(1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


//function getTimeRemaining(endtime) {
//    var dateBegin = new Date(endtime);
//    var dateEnd = new Date();
//    var dateDiff = dateBegin.getTime() - dateEnd.getTime();
//    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
//    var leave1 = dateDiff % (24 * 3600 * 1000);
//    var hoursDiff = Math.floor(leave1 / (3600 * 1000));
//    //计算相差分钟数
//    var leave2 = leave1 % (3600 * 1000);
//    var minutesDiff = Math.floor(leave2 / (60 * 1000));
//    //计算相差秒数
//    var leave3 = leave2 % (60 * 1000);    //计算分钟数后剩余的毫秒数
//    var secondsDiff = Math.round(leave3 / 1000);
//    return {
//        'total': dateDiff,
//        'days': dayDiff,
//        'hours': hoursDiff,
//        'minutes': minutesDiff,
//        'seconds': secondsDiff
//    };
//}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("2019-11-09T09:00:00");
initializeClock('clockdiv', deadline);