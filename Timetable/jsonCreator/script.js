let people;
let schools;
let subjects;

let outputString;

let formElements;

let currentSelects = ["${line1Subject}", "${line2Subject}", "${line3Subject}", "${line4Subject}", "${line5Subject}", "${line6Subject}"];

let name = "${name}";

$( document ).ready(function() {
  formElements = [$('#line1'), $('#line2'), $('#line3'), $('#line4'), $('#line5'), $('#line6')];
  let continueButton = $('#continueButton');
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
      name = nameStr;
    }else{
      nameInput.addClass('formBad');
      nameInput.removeClass('formGood');
      name = "${name}";
    }
    updateOutput();

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
  outputString = `    "${name}": {
      "school": "Mahurangi College",
      "subjects": ["${currentSelects[0]}", "${currentSelects[1]}", "${currentSelects[2]}", "${currentSelects[3]}", "${currentSelects[4]}", "${currentSelects[5]}", "Whanau", "Assembly"]
    },`;

  let htmlOutput = `
  "${name}": { <br>
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

  let validError = "";
  if(checkDupesTest(currentSelects) && blankValueTest()){
    //check for name nameField
    if(name == "${name}"){
      validError = "Enter a valid Name to continue!";
    }
  }else{
    validError = "Enter all 6 subjects and a Name to continue!";
  }

 
  if(validError == ""){
    continueButton.text("Thank you, Click this button to copy!");
    continueButton.addClass('continueButtonEnabled');
    continueButton.removeClass('continueButtonDisabled');
    continueButton.attr('onClick', 'copyForDiscord()')
  }else{
    continueButton.text(validError);
    continueButton.attr('onClick', '')
    continueButton.removeClass('continueButtonEnabled');
    continueButton.addClass('continueButtonDisabled');
  }

}

function copyForDiscord() {
  copyToClipboard(`\`\`\`json
${outputString}
\`\`\``);
  continueButton.css("border-style", "green");
}

function checkDupesTest(a) {
  var counts = [];
  for(var i = 0; i <= a.length; i++) {
      if(counts[a[i]] === undefined) {
          counts[a[i]] = 1;
      }else{
          return false;
      }
  }
  return true;
}

function blankValueTest(){
  for(i=0; i<6; i++){
    if(currentSelects[i].includes('${')){
      return false;
    }
  }
  return true;
}


function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
