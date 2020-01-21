let timtableFormat = [
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 6],
  [2, 7, 1, 6, 5],
  [1, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4],
  [5, 7, 6, 1, 2],
  [3, 4, 5, 6, 1],
  [2, 3, 4, 5, 6]
]

let classes = {
  "line1Classes": {
    "Physics" : {
      "Teacher" : "Mr Yates",
      "Class": "K8",
      "People": ["Ben"]
    },
  },
 "line2Classes" : {
    "Chemistry" : {
      "Teacher" : "Mrs Caldwell ",
      "Class": "K3",
      "People": ["Ben"]
    }
  },
 "line3Classes" : {
    "Biology" : {
      "Teacher" : "Mrs Moran",
      "Class": "K1",
      "People": ["Ben"]
    }
  },
 "line4Classes" : {
    "Maths" : {
      "Teacher" : "Mrs Light",
      "Class": "B15",
      "People": ["Ben"]
    }
  },
 "line5Classes" : {
    "English" : {
      "Teacher" : "Mrs Ruland",
      "Class": "E8",
      "People": ["Ben"]
    }
  },
  "line6Classes" : {
    "Digi Tech" : {
      "Teacher" : "Mr Schnetler",
      "Class": "B13",
      "People": ["Ben", "Nick", "Bread"]
    }
  }
};



$(document).ready(function(){

  let table = $("#timetable");
  let tr = $("<tr> </tr>");
  let i = 1;

  tr.append($("<th></th>"));

  for(j of timtableFormat){

    let td = $(`<th> Day ${i} </th>`);

    tr.append(td);

    i++;
  }
  console.log(tr);
  table.append(tr);



  for(let i=0; i < 5; i++){
    console.log(i);
    tr = $("<tr> </tr>");
    tr.append($(`<td>Period ${i+1}</td>`));
    for(j of timtableFormat){
      let lineNo = j[i];
      let lesson = $(`<td>Line ${lineNo}</td>`);
      lesson.attr("class", "line"+lineNo);
      lesson.attr("onclick", `openTab('line${lineNo}Tab')`);
      tr.append(lesson)
    }
    table.append(tr);

  }

  // tr = $("<tr> </tr>");
  // tr.append($(`<td>Period ${0}</td>`));
  // for(j of timtableFormat){
  //   tr.append(`<td>Line ${j[0]}</td>`)
  // }

  table.append(tr);

  openTab("line1Tab");

  for(let i = 1; i <= 6;i++){
    let parentDiv = $(`#line${i}Tab`);
    let lineData = classes[`line${i}Classes`];
    let subjects = Object.keys(lineData);
    console.log(subjects);
    for(o of subjects){
      let subject = lineData[o];
      let element = $('<h2></h2>').text(o);
      let element2 = $('<h4></h4>').text(`${subject.Teacher} | ${subject.Class}`);
      let peopleElement = $("<ul></ul>");
      for(p of subject.People){
        peopleElement.append($('<li></li>').text(p));
      }
      parentDiv.append(element, element2, peopleElement);
    }
  }

});




function openTab(tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  console.log(tab);
  document.getElementById(tab).style.display = "block";
  document.getElementById(tab+"Link").className += " active";
  if(tab[5] == "T"){
    $('#highlightLineStyle').text(`.line${tab[4]}{background-color: rgba(242, 228, 22, 0.41);}`);
  }else{
    $('#highlightLineStyle').text('');
  }
}
