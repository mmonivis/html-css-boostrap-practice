function Timer(id, endtime){
    this.endtime = endtime;
    this.id = id;
    var clock = document.getElementById(id);
    this.weeksSpan = clock.querySelector('.weeks');
    this.daysSpan = clock.querySelector('.days');
    this.hoursSpan = clock.querySelector('.hours');
    this.minutesSpan = clock.querySelector('.minutes');
    this.secondsSpan = clock.querySelector('.seconds');
}

Timer.prototype.getTimeRemaining = function(){
    var t = Date.parse(this.endtime) - Date.parse(new Date());
    // console.log(t);
    this.seconds = Math.floor((t / 1000) % 60);
    this.minutes = Math.floor((t / 1000 / 60) % 60);
    this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    this.days = Math.floor((t / (1000 * 60 * 60 * 24)) % 7);
    this.weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
}

Timer.prototype.updateTimer = function(){
    this.getTimeRemaining();
    this.weeksSpan.innerHTML = this.weeks;
    this.daysSpan.innerHTML = this.days;
    this.hoursSpan.innerHTML = this.hours;
    this.minutesSpan.innerHTML = this.minutes;
    this.secondsSpan.innerHTML = this.seconds;
}

// var endDate = new Date();
// var newDate = document.getElementById(document.forms['newDate']);
var endDate = new Date(Date.parse(newDate));
// console.log(endDate);
var countdownToGraduationTimer = new Timer('timer-div', endDate);
setInterval(
    function(){
        countdownToGraduationTimer.updateTimer();
    },1000
)