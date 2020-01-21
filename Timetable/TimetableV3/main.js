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

let peopleList = [
  {"name": "Ben", "id": 0},
  {"name": "Nick", "id": 1},
  {"name": "Bread", "id": 2},
  {"name": "Marizanne", "id": 3}
];


let classes = {
  "line1Classes": {
    "Physics" : {
      "Teacher" : "Mr Yates",
      "Class": "K8",
      "People": [0]
    },
    "Chemistry" : {
      "Teacher" : "Mrs Caldwell ",
      "Class": "B3",
      "People": [3]
    }
  },
 "line2Classes" : {
    "Chemistry" : {
      "Teacher" : "Mrs Caldwell",
      "Class": "K3",
      "People": [0]
    },
    "Drama" : {
      "Teacher" : "Mr Dutton",
      "Class": "DRA",
      "People": [3]
    }
  },
 "line3Classes" : {
    "Biology" : {
      "Teacher" : "Mrs Moran",
      "Class": "K1",
      "People": [0, 3]
    }
  },
 "line4Classes" : {
    "Maths" : {
      "Teacher" : "Mrs Light",
      "Class": "B15",
      "People": [0]
    },
    "English" : {
      "Teacher" : "CRO",
      "Class": "E1",
      "People": [3]
    }
  },
 "line5Classes" : {
    "English" : {
      "Teacher" : "Mrs Ruland",
      "Class": "E8",
      "People": [0]
    },
    "Media" : {
      "Teacher" : "Mr King",
      "Class": "A2",
      "People": [3]
    }
  },
  "line6Classes" : {
    "Digi Tech" : {
      "Teacher" : "Mr Schnetler",
      "Class": "B13",
      "People": [0, 1, 2]
    },
    "Maths" : {
      "Teacher" : "Mr Welch",
      "Class": "B6",
      "People": [3]
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
        let anchor = $('<a></a>');
        anchor.attr("href", "#"+peopleList[p].name);
        anchor.text(peopleList[p].name)
        peopleElement.append($('<li></li>').append(anchor));
      }
      parentDiv.append(element, element2, peopleElement);
    }
  }

  changedHash();

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


function changedHash(){
  console.log("change hash");
  let newHash = location.hash.toLowerCase();
  newHash = newHash.substr(1);
  let person = peopleList.find(({name}) => name.toLowerCase() == newHash);
  if(person){

    for(i=1;i <= 6; i++){
      // $('.line' + i);

      let currLine = classes[`line${i}Classes`];
      for(let j in currLine){
        let toSetText = "Line " + i;
        console.log(j);
        if(currLine[j].People.includes(person.id)){
          $('.line' + i).text(j);

          break;
        }
          $('.line' + i).text(toSetText);
      }
    }
    $('.line7').text("Assembly");
  }else{
    for(let i=1;i <= 7; i++){
      $('.line' + i).text("Line " + i);
    }
  }
}

function resetLines(){
  for(let i=1;i <= 6; i++){
    $('.line' + i).text("Line " + i);
  }
}
