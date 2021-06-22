const display = document.getElementById('display');
const startTimer = document.getElementById('start');
const stopTimer = document.getElementById('stop');
const message = document.getElementById('message');
const resume = document.getElementById('resume');
const stop = document.getElementById('stop');


const workoutTimer = () => {
    
    //declaring variables
    let second = 0, minute = 0, hour = 0;
    let secDigit = null, minDigit = null, hourDigit = null, interval = null, start = 'stopped';

const timer = () => {
        second++;
        
        if (second >= 60) {
            second = 0;
            minute++;

            if (minute >= 60) {
                minute = 0;
                hour++;
            }
        }
        
        if (second < 10) {
            secDigit = `0${second}`;
        } else {
            secDigit = second;
        }
        if (minute < 10) {
            minDigit = `0${minute}`;
        } else {
            minDigit = minute;
        }
        if (hour < 10) {
            hourDigit = `0${hour}`;
        } else {
            hourDigit = hour;
        }
        display.innerHTML = `${hourDigit}:${minDigit}:${secDigit}`;
    }

const startTime = () => {
        if (start === 'stopped') {
            second = 0, minute = 0, hour = 0;
            display.innerHTML = '00:00:00';
            display.style.color = 'grey';
            interval = setInterval(timer, 1000);
            startTimer.innerHTML = 'Pause &#x23f8;';
            startTimer.style.backgroundColor = 'black';
            start = 'started';
            message.innerHTML = 'Timer started';
        } else {
            clearInterval(interval);
            start = 'paused';
            display.style.color = 'black';
            message.innerHTML = 'Timer is paused';
        }
    }
    startTimer.addEventListener('click', startTime);

const resumeTime = () => {
        if (start === 'paused') {
            interval = setInterval(timer, 1000);
            display.style.color = 'grey';
            start = 'started';
            message.innerHTML = 'Timer On';    
            
        } else if (start === 'stopped') {
            message.innerHTML = 'Timer is not paused';

        } else {
            message.innerHTML = 'Timer not paused';
        }
    }
    resume.addEventListener('click', resumeTime);

const stopTime = () => {
        if (start !== 'stopped') {
            clearInterval(interval);
            display.style.color = 'red';
            start = 'stopped';
            startTimer.innerHTML = 'Start &#9658;';
            message.innerHTML = 'Timer Stopped';
          
        } else {
           message.innerHTML = 'Timer not On';
        }
    }
    stopTimer.addEventListener('click', stopTime);
}
workoutTimer();
