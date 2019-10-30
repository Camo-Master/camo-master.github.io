let people;
let schools;
let subjects;

let timetableWrapper;


$(document).ready(function(){
  timetableWrapper = $('#timetableWrapper');
  $.getJSON('info.json', function(data){
    people = data.people;
    schools = data.schools;
    subjects = data.subjects;

    console.log(subjects);

    defaultValues();

    $("#personChoice").change(function(){
      loadDays(0);
      loadTimes($('#personChoice').val(), $('#dayChoice').val()-1);
    });

    $("#dayChoice").change(function(){
      loadTimes($('#personChoice').val(), $('#dayChoice').val()-1);
    });


  });
});

function defaultValues(){
  let personList = Object.keys(people);

  //set the values of the person list select
  for(i=0; i<personList.length; i++){
    let option = $(`<option value="${personList[i]}"></option>`).text(personList[i]);
    if(personList[i] == "Ben"){
      option.attr("selected", "");
    }
    $('#personChoice').append(option);
  }

  //load tings
  loadTimes("Ben", 0);
  loadDays(0);
  loadColours()
}

function loadColours(){
  let subjectList = Object.keys(subjects);

  let styleString = "";



  for(k=0; k < subjectList.length; k++){
    let subject = subjectList[k];
    styleString = `${styleString} .subject${subject}{background-color: #${subjects[subject][colour]};}
    .science:hover{background-color: #${subjects[subject].hoverColour};-webkit-transition: .4s;}`
  }
  console.log(styleString);
}


function loadDays(selected){
  $("#dayChoice").html('');
  let thisSchool = schools[people[ $("#personChoice").val()].school];

  for(j=1; j<thisSchool.days+1; j++){
    let option = $(`<option value="${j}"></option>`).text("Day: " + j);
    if(j == ""){
      option.attr("selected", "");
    }
    $('#dayChoice').append(option);

  }
}

function loadTimes(person, day){
  $("#timetableWrapper").html('');
  let school = schools[people[person].school];
  person = people[person];
  let timeArray = school.timeGaps;

  for(i = 0; i < timeArray.length; i++){
    let lesson = school.lines[day][i];

    lessonBox = document.createElement("div");
    lessonBox.setAttribute('class', `lessonBox subject${person.subjects[lesson-1]}`);
    lessonBox.setAttribute('style', `height:${timeArray[i]*3-5}px;`);

    textBox = document.createElement("div");
    let textBoxString = `<b>${school.lessonNames[i]}:</b>`;

    if(lesson !== "N"){
      textBoxString = `<b>${school.lessonNames[i]}:</b> ${person.subjects[lesson-1]}`;
    }


    textBox.innerHTML = textBoxString + `<br>Length: ${timeArray[i]} Minutes`;

    lessonBox.appendChild(textBox);

    timetableWrapper.append(lessonBox);



  }
}
