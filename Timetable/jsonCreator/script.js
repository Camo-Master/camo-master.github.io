let people;
let schools;
let subjects;

let outputString;

let currentSelects = ["${line1Subject}", "${line2Subject}", "${line3Subject}", "${line4Subject}", "${line5Subject}", "${line6Subject}"];

let name = "${name}";

$( document ).ready(function() {

  $.getJSON('./../info.json', function(data){
    people = data.people;
    schools = data.schools;
    subjects = data.subjects;

    console.log(data);

    populateSelects();
  });

  let nameInput = $('#nameField');
  nameInput.focusout( () => {
    if(nameInput.val() !== ""){
      let nameStr = nameInput.val();
      nameStr.replace( /(<([^>]+)>)/ig, '');
      console.log(nameStr);
      nameInput.removeClass('formBad');
      nameInput.addClass('formGood');
    }else{
      nameInput.addClass('formBad');
      nameInput.removeClass('formGood');
    }

  })
});

function updatedValue(lineNo){
  let currElement = $(`#line${lineNo}`);
  let newVal = currElement.val();

  if(currentSelects.includes(newVal)){
    currElement.addClass('formBad');
    currElement.removeClass('formGood');
  }else{
    currElement.removeClass('formBad');
    currElement.addClass('formGood');
  }

  switch (lineNo) {
    case 1:
      currentSelects[0] = newVal;
      break;
    case 2:
      currentSelects[1] = newVal;
      break;
    case 3:
      currentSelects[2] = newVal;
      break;
    case 4:
      currentSelects[3] = newVal;
      break;
    case 5:
      currentSelects[4] = newVal;
      break;
    case 6:
      currentSelects[5] = newVal;
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
        "subjects": ["${currentSelects[0]}", "${currentSelects[1]}", "${currentSelects[2]}", "${currentSelects[3]}", "${currentSelects[4]}", "${currentSelects[5]}", "Whanau", "Assembly"]
      },`;

  let htmlOutput = `
  ${name}": { <br>
    &emsp;"school": "Mahurangi College", <br>
    &emsp;"subjects": [ <br>
    &emsp;&emsp;"${currentSelects[0]}", <br>
    &emsp;&emsp;"${currentSelects[1]}", <br>
    &emsp;&emsp;"${currentSelects[2]}", <br>
    &emsp;&emsp;"${currentSelects[3]}", <br>
    &emsp;&emsp;"${currentSelects[4]}", <br>
    &emsp;&emsp;"${currentSelects[5]}", <br>
    &emsp;&emsp;"Whanau", <br>
    &emsp;&emsp;"Assembly"<br>
    &emsp;]<br>
  },`;

  $('#jsonOutput').html(htmlOutput);
}
