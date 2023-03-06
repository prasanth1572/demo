'use strict'

const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

function updateTime(){
const currentYear=new Date().getFullYear();
//finding new year date
const newYear = new Date(`Mar 24 2023 08:00:00`);
//finding current date
const currentDate = new Date();
//finding difference between newyear and current date
const diff = newYear - currentDate;
//Math.floor() function is used to take integer as whole number and ignore the fraction number
const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor((diff/1000/60/60)%24);
const m = Math.floor((diff/1000/60)%60);
const s = Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

}

setInterval(updateTime,1000);