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
