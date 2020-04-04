var playable = true;
var x = document.getElementById("rolled");
let openPlay = false;

setTimeout(openWindows, 3000);

function openWindows(){
  if(playable){
    openPlay = true;
    try{
      x.play();
    } catch(e){
      console.log(e);
    }
  }
}

function lateLoad() {
  if(openPlay){
    x.play();
  }
}

function yeet(){
  x.pause();
  playable = false;
}
