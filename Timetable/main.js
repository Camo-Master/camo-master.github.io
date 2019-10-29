let people;
let schools;

let timetableWrapper;


$(document).ready(function(){
  timetableWrapper = $('#timetableWrapper');
  $.getJSON('info.json', function(data){
    people = data.people;
    schools = data.schools;

    defaultValues();

    $("#personChoice").change(function(){
      loadDays(0)
      loadTimes($('#personChoice').val(), $('#dayChoice').val())
    });

    $("#dayChoice").change(function(){
      loadTimes($('#personChoice').val(), $('#dayChoice').val())
    });


  });
});

function defaultValues(){
  let personList = Object.keys(people);

  console.log(personList.length);
  for(i=0; i<personList.length; i++){
    let option = $(`<option value="${personList[i]}"></option>`).text(personList[i]);
    if(personList[i] == "Ben"){
      option.attr("selected", "");
    }
    console.log(option);

    $('#personChoice').append(option);

  }
  loadTimes("Ben", 0);
  loadDays(0);
}


function loadDays(selected){
  $("#dayChoice").html('');
  let thisSchool = schools[people[ $("#personChoice").val()].school];
  console.log(thisSchool);
  for(j=1; j<thisSchool.days+1; j++){
    let option = $(`<option value="${j}"></option>`).text("Day: " + j);
    if(j == ""){
      option.attr("selected", "");
    }
    console.log(option);
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
    lessonBox.setAttribute('class', 'lessonBox');
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
