/*
const ashs = {
  day1: ["spanish", "english", "digi"],4
  day2: ["tutorial", "science", "maths"],
  day3: ["arcade", "arcade", "arcade"],
  day4: ["tutorial", "spanish", "english"],
  day5: ["maths", "science", "digi"]

}*/

//Cursor Position, Display Time


const schools = {
  mahu: {
    days: 5,
    repeats: 0,
    timeGaps: [45, 65, 60, 20, 60, 60, 50, 20, 60],
    lessonNames: ["B4", "Period 1", "Period 2", "Interval", "Period 3", "Period 4", "Lunch", "Whanau", "Period 5"]
  }
};

const people = {
  me: {
    school: schools.mahu
  }
};

function load(){
  //printThis(people.me);
  alert(yes.hello);
}

function printThis(person){
  let timeArray = person.school.timeGaps;
  for(i = 0; i < timeArray.length; i++){
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = wrapper.innerHTML + `<div class="lessonBox" style="height:${timeArray[i]*3}px;"}> <b>${person.school.lessonNames[i]}:</b> <br> Length: ${timeArray[i]} Minutes </div`;
  }
}


// document.write(people.ben.school.days);

/*

0-6




*/
//
// var dt= new Date();
// const yday = dt.getDay();
// if(yday===0){
//   var day = 0;
// }else if(yday === 6){
//   var day = 0;
// }else{
//   var day = yday -1;
// }
// var activeDayButton = 'dayButton0';
//
// var weekNo = 1;
// var mahuTimetable = timetable.mahu;
//
// function checkBox(weekNo){
//   if(weekNo === 1){
//     mahuTimetable = timetable.mahu;
//     document.getElementById('weekButton2').classList.remove("activeDayButton")
//     document.getElementById('weekButton1').classList.add("activeDayButton")
//   }else if(weekNo === 2){
//     mahuTimetable = timetable.mahu2;
//     document.getElementById('weekButton1').classList.remove("activeDayButton")
//     document.getElementById('weekButton2').classList.add("activeDayButton")
//   }
//   fillTimetables(day);
//
// }
//
// function fillTimetables(cday){
//   for(var d = 0; d<=2;d++){//ashs
//     var lowSubject = timetable.ashs[cday][d];
//     var subject = lowSubject.charAt(0).toUpperCase() + lowSubject.slice(1);
//     var lesson = d+1;
//     var time = times.ashs[d];
//     var element = document.getElementById('ashsP'+lesson);
//     element.className = '';
//     element.innerHTML="<h4>P"+lesson+" - "+subject+"</h4><h5>"+time+"</h5>";
//     element.classList.add(lowSubject);
//     element.classList.add('cube');
//   }
//   for(e=0;e<=4;e++){
//     var lowSubject = mahuTimetable[cday][e];
//     var subject = lowSubject.charAt(0).toUpperCase() + lowSubject.slice(1);
//     var lesson = e+1;
//     var time = times.mahu[e];
//     var element = document.getElementById('mahuP'+lesson);
//     element.className = '';
//     element.innerHTML="<h4>P"+lesson+" - "+subject+"</h4><h5>"+time+"</h5>";
//     element.classList.add(lowSubject);
//     element.classList.add('cube');
//   }
// }
//
// function load(){
//   fillTimetables(day);
//   document.getElementById("dayButton"+day).classList.add("activeDayButton");
// }
//
// function myFunction() {
//   fillTimetables(day);
// }
//
// function changeDay(buttonNum){
//   document.getElementById('dayButton'+day).classList.remove("activeDayButton");
//   day = buttonNum;
//   document.getElementById("dayButton"+buttonNum).classList.add("activeDayButton");
//   fillTimetables(day);
//
// }
