//Selector Setup
const clock = document.querySelector("h2#clock");
const viewToday = document.querySelector(".date");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() +1 ;
const day = today.getDate();

const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const week = WEEKDAY[today.getDay()];

viewToday.innerText = `${year}년 ${month}월 ${day}일 ${week}`;

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

setInterval(() => {
    getClock();
}, 1000);