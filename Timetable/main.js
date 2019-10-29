$(document).ready(function(){
  console.log("Functionslaalls");
  $.getJSON('info.json', function(data){
    console.log("Functionslaall");
    console.log(data);
  });

});
