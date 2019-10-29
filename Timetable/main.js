let people;
let schools;

let timetableWrapper;


$(document).ready(function(){
  timetableWrapper = document.getElementById('timetableWrapper');
  $.getJSON('info.json', function(data){
    people = data.people;
    schools = data.schools;

    loadTimes("Ben", 0);

  });

});

function loadTimes(person, day){
  let school = schools[people[person].school];
  person = people[person];
  let timeArray = school.timeGaps;

  for(i = 0; i < timeArray.length; i++){
    let lesson = school.lines[day][i];

    lessonBox = document.createElement("div");
    lessonBox.setAttribute('class', 'lessonBox');
    lessonBox.setAttribute('style', `height:${timeArray[i]*3-5}px;`);

    textBox = document.createElement("div");
    let textBoxString;

    if(lesson === "N"){
      textBoxString = `<b>${school.lessonNames[i]}:</b>`;
    }else{
      textBoxString = `<b>${school.lessonNames[i]}:</b> ${person.subjects[lesson-1]}`;
    }


    textBox.innerHTML = textBoxString + `<br>Length: ${timeArray[i]} Minutes`;

    lessonBox.appendChild(textBox);

    console.log(lessonBox)

    timetableWrapper.appendChild(lessonBox);



  }
}
