/*
const ashs = {
  day1: ["spanish", "english", "digi"],4
  day2: ["tutorial", "science", "maths"],
  day3: ["arcade", "arcade", "arcade"],
  day4: ["tutorial", "spanish", "english"],
  day5: ["maths", "science", "digi"]

}*/

//Cursor Position, Display Time

const timetable ={
  ashs: [
    ["spanish", "english", "digi"],
    ["tutorial", "science", "maths"],
    ["arcade", "arcade", "arcade"],
    ["tutorial", "spanish", "english"],
    ["maths", "science", "digi"]
  ],
  mahu: [
    ["spanish", "maths", "science", "english", "history"],
    ["science", "assembly", "history", "spanish", "digi"],
    ["digi", "maths", "spanish", "science", "english"],
    ["english", "history", "digi", "spanish" , "maths"],
    ["science", "maths", "english", "history", "digi"]
  ],
  mahu2: [
    ["history", "digi", "maths", "spanish", "science"],
    ["spanish", "assembly", "digi", "science", "english"],
    ["spanish", "maths", "science", "english", "history"],
    ["science", "digi", "english", "history", "maths"],
    ["english", "history", "digi", "maths","spanish"]
  ]
}//Make: Assembly Arcade  tutorial and pct

const times ={
  ashs:['9:00am - 10:40am', '11:00am - 12:40pm', '1:30pm - 3:10pm'],
  mahu:['8:45am - 9:50am', '9:50am - 10:50am', '11:10am - 12:10pm', '12:10pm - 1:10pm', '2:20pm - 3:20pm']
}
/*

0-6


*/

var dt= new Date();
const yday = dt.getDay();
if(yday===0){
  var day = 0;
}else if(yday === 6){
  var day = 0;
}else{
  var day = yday -1;
}
var activeDayButton = 'dayButton0';

var weekNo = 1;
var mahuTimetable = timetable.mahu;

function checkBox(weekNo){
  if(weekNo === 1){
    mahuTimetable = timetable.mahu;
    document.getElementById('weekButton2').classList.remove("activeDayButton")
    document.getElementById('weekButton1').classList.add("activeDayButton")
  }else if(weekNo === 2){
    mahuTimetable = timetable.mahu2;
    document.getElementById('weekButton1').classList.remove("activeDayButton")
    document.getElementById('weekButton2').classList.add("activeDayButton")
  }
  fillTimetables(day);

}

function fillTimetables(cday){
  for(var d = 0; d<=2;d++){//ashs
    var lowSubject = timetable.ashs[cday][d];
    var subject = lowSubject.charAt(0).toUpperCase() + lowSubject.slice(1);
    var lesson = d+1;
    var time = times.ashs[d];
    var element = document.getElementById('ashsP'+lesson);
    element.className = '';
    element.innerHTML="<h4>P"+lesson+" - "+subject+"</h4><h5>"+time+"</h5>";
    element.classList.add(lowSubject);
    element.classList.add('cube');
  }
  for(e=0;e<=4;e++){
    var lowSubject = mahuTimetable[cday][e];
    var subject = lowSubject.charAt(0).toUpperCase() + lowSubject.slice(1);
    var lesson = e+1;
    var time = times.mahu[e];
    var element = document.getElementById('mahuP'+lesson);
    element.className = '';
    element.innerHTML="<h4>P"+lesson+" - "+subject+"</h4><h5>"+time+"</h5>";
    element.classList.add(lowSubject);
    element.classList.add('cube');
  }
}

function load(){
  fillTimetables(day);
  document.getElementById("dayButton"+day).classList.add("activeDayButton");
}

function myFunction() {
  fillTimetables(day);
}

function changeDay(buttonNum){
  document.getElementById('dayButton'+day).classList.remove("activeDayButton");
  day = buttonNum;
  document.getElementById("dayButton"+buttonNum).classList.add("activeDayButton");
  fillTimetables(day);

}
