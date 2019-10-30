let people;
let schools;
let subjects;

let outputString;

let currentSelects = ["", "", "", "", "", ""];

let name = "${name}";
let line1Subject = "${line1Subject}";
let line2Subject = "${line2Subject}";
let line3Subject = "${line3Subject}";
let line4Subject = "${line4Subject}";
let line5Subject = "${line5Subject}";
let line6Subject = "${line6Subject}";

$( document ).ready(function() {

  $.getJSON('./../info.json', function(data){
    people = data.people;
    schools = data.schools;
    subjects = data.subjects;

    console.log(data);

    populateSelects();
  });
});

function updatedValue(lineNo){
  let newVal = $(`#line${lineNo}`).val();
  switch (lineNo) {
    case 1:
      line1Subject = newVal;
      break;
    case 2:
      line2Subject = newVal;
      break;
    case 3:
      line3Subject = newVal;
      break;
    case 4:
      line4Subject = newVal;
      break;
    case 5:
      line5Subject = newVal;
      break;
    case 6:
      line6Subject = newVal;
      break;
    default:
  }
  updateOutput();
}


function populateSelects(){
  let subjectList = Object.keys(subjects);
  let subjectString = "";

  for(i=0; i< subjectList.length; i++){
    switch (subjectList[i]) {
      case "Before School":
        break;
      case "Interval":
        break;
      case "Lunch":
        break;
      case "Whanau":
        break;
      case "Assembly":
        break;
      default:
        let option = $(`<option></option>`).text(subjectList[i]);
        option.attr("value", subjectList[i]);

        subjectString = subjectString + option.prop('outerHTML');
    }
  }

  let option = $(`<option></option>`).text(subjectList[i]);
  option.attr("value", subjectList[i]);

  for(j=1; j<=6; j++){
    $(`#line${j}`).append(subjectString);
  }

}
function updateOutput(){
  outputString = `
      "${name}": {
        "school": "Mahurangi College",
        "subjects": ["${line1Subject}", "${line2Subject}", "${line3Subject}", "${line4Subject}", "${line5Subject}", "${line6Subject}", "Whanau", "Assembly"]
      },`;

  let htmlOutput = `
  ${name}": { <br>
    &emsp;"school": "Mahurangi College", <br>
    &emsp;"subjects": [ <br>
    &emsp;&emsp;"${line1Subject}", <br>
    &emsp;&emsp;"${line2Subject}", <br>
    &emsp;&emsp;"${line3Subject}", <br>
    &emsp;&emsp;"${line4Subject}", <br>
    &emsp;&emsp;"${line5Subject}", <br>
    &emsp;&emsp;"${line6Subject}", <br>
    &emsp;&emsp;"Whanau", <br>
    &emsp;&emsp;"Assembly"<br>
    &emsp;]<br>
  },`;

  $('#jsonOutput').html(htmlOutput);
}
