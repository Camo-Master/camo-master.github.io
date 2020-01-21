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


});
