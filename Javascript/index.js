function updateTime(){
    //Johannesburg
let johannesburgElement=document.querySelector('#johannesburg');
let johannesburgDateElement=johannesburgElement.querySelector('.date');
let johannesburgTimeElement=johannesburgElement.querySelector('.time');
let johannesburgTime=moment().tz("Africa/Johannesburg");
johannesburgDateElement.innerHTML=moment().format("MMMM Do YYYY");
johannesburgTimeElement.innerHTML=johannesburgTime.format("h:mm:ss [<small>]A[</small>]");

 //Stockholm
 let stockholmElement=document.querySelector('#stockholm');
 let stockholmDateElement=stockholmElement.querySelector('.date');
 let stockholmTimeElement=stockholmElement.querySelector('.time');
 let stockholmTime=moment().tz("Europe/Stockholm");
 stockholmDateElement.innerHTML=moment().format("MMMM Do YYYY");
 stockholmTimeElement.innerHTML=stockholmTime.format("h:mm:ss [<small>]A[</small>]");}

updateTime();
setInterval(updateTime,1000);