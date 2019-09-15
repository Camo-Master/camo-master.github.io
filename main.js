var playable = true;
var x = document.getElementById("rolled");

setTimeout(openWindows, 3000);

function openWindows(){
  if(playable){
    try{
      x.play();
    } catch(e){
      console.log(e);
    }
  }
}

function yeet(){
  x.pause();
  playable = false;
}
