let timtableFormat = [
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4],
  [5, 7, 6, 1, 2],
  [3, 4, 5, 6, 1],
  [2, 3, 4, 5, 6],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 6],
  [2, 7, 1, 6, 5],
  [1, 6, 5, 4, 3],
  [6, 5, 4, 3, 2]

]

let peopleList = [
  {"name": "Ben", "id": 0},
  {"name": "Nick", "id": 1},
  {"name": "Bread", "id": 2},
  {"name": "Marizanne", "id": 3},
  {"name": "Gretel", "id": 4},
  {"name": "Nathan", "id": 5},
  {"name": "Michaela", "id": 6},
  {"name": "Alex", "id": 7},
  {"name": "Lexie", "id": 8}

];


let classes = {
  "line1Classes": {
    "Physics" : {
      "Teacher" : "Mr Yates",
      "Class": "K8",
      "People": [0, 1, 4],
      "Code": "L2PHY"
    },
    "Chemistry" : {
      "Teacher" : "Mrs Caldwell ",
      "Class": "B3",
      "People": [3, 7, 8],
      "Code": "L2BIO"
    },
    "Business" : {
      "Teacher" : "Mrs West ",
      "Class": "A3",
      "People": [5],
      "Code": "L2BUS"
    },
    "Maths" : {
      "Teacher" : "Mrs Light ",
      "Class": "B15",
      "People": [6],
      "Code": "L2MA2"
    }
  },
 "line2Classes" : {
    "Chemistry" : {
      "Teacher" : "Mrs Caldwell",
      "Class": "K3",
      "People": [0, 1, 5],
      "Code": "L2CHE"
    },
    "Drama" : {
      "Teacher" : "Mr Dutton",
      "Class": "DRA",
      "People": [3, 6, 8],
      "Code": "L2DRA"
    },
    "Biology" : {
      "Teacher" : "Mr Walker",
      "Class": "K5",
      "People": [4, 7],
      "Code": "L2BIO"
    }
  },
 "line3Classes" : {
    "Biology" : {
      "Teacher" : "Mrs Moran",
      "Class": "K1",
      "People": [0, 3, 5],
      "Code": "L2BIO"
    },
    "Design" : {
      "Teacher" : "Mr Pulsford",
      "Class": "D4/5",
      "People": [1, 6],
      "Code": "L2DES"
    },
    "Graphics" : {
      "Teacher" : "STE",
      "Class": "T2",
      "People": [4],
      "Code": "L2DVC"
    },
    "Maths" : {
      "Teacher" : "BUK",
      "Class": "B3",
      "People": [7, 8],
      "Code": "L2MA1"
    }
  },
 "line4Classes" : {
    "Maths" : {
      "Teacher" : "Mrs Light",
      "Class": "B15",
      "People": [0, 1],
      "Code": "L2MA1"
    },
    "English" : {
      "Teacher" : "CRO",
      "Class": "E1",
      "People": [3, 4, 5, 6, 7],
      "Code": "L2EN1"
    },
    "Geography " : {
      "Teacher" : "GIP",
      "Class": "A5",
      "People": [8],
      "Code": "L2GEO"
    }
  },
 "line5Classes" : {
    "English" : {
      "Teacher" : "Mrs Ruland",
      "Class": "E8",
      "People": [0, 1],
      "Code": "L2EN1"
    },
    "Media" : {
      "Teacher" : "Mr King",
      "Class": "A2",
      "People": [3, 6, 7, 8],
      "Code": "L2MED"
    },
    "Chemistry" : {
      "Teacher" : "Mrs McMillan",
      "Class": "K6",
      "People": [4],
      "Code": "L2CHE"
    },
    "Maths" : {
      "Teacher" : "NEV",
      "Class": "B1",
      "People": [5],
      "Code": "L2MA1"
    }
  },
  "line6Classes" : {
    "Digi Tech" : {
      "Teacher" : "Mr Schnetler",
      "Class": "B13",
      "People": [0, 1, 2],
      "Code": "L2DIT"
    },
    "Maths" : {
      "Teacher" : "Mr Welch",
      "Class": "B6",
      "People": [3, 4],
      "Code": "L2MA1"
    },
    "Physics" : {
      "Teacher" : "Mrs McMillan",
      "Class": "K7",
      "People": [5, 7],
      "Code": "L2PHY"
    },
    "Painting" : {
      "Teacher" : "Mrs Maday",
      "Class": "D1",
      "People": [6],
      "Code": "L2PAI"
    },
    "English" : {
      "Teacher" : "SHI",
      "Class": "E2",
      "People": [8],
      "Code": "L2EN1"
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
  //table.append(tr);

  openTab("welcomeTab");

  for(let i = 1; i <= 6;i++){
    let parentDiv = $(`#line${i}Tab`);
    let lineData = classes[`line${i}Classes`];
    let subjects = Object.keys(lineData);
    console.log(subjects);
    for(o of subjects){
      let subject = lineData[o];
      let element = $('<h2></h2>').text(`${o} (${subject.Code})`);
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

  $("#giveLink").hover( function() {
    $("#giveGif").show();
  }, function(){
    $("#giveGif").hide();
  });
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
  newHash = decodeURIComponent(newHash.substr(1));
  let person = peopleList.find(({name}) => name.toLowerCase() == newHash);
  if(person){
    for(i=1;i <= 6; i++){
      let currLine = classes[`line${i}Classes`];
      for(let j in currLine){
        let toSetText = "Line " + i;
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
