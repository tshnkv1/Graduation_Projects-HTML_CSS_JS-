'use strict';


//login tab
document.getElementById('name').addEventListener('blur',() => validname(false), false);

function validname() {
  var ec=0;
  var d=document.getElementById('name').value;
  if (!d) {
      document.getElementById('Error').innerHTML='Enter a name!';
      ec=1;
  }
  else {
      document.getElementById('Error').innerHTML=' ';
    }
    return ec;
}


var button=document.getElementById('buttonPage');
button.addEventListener('mouseover',buttonOver,false); //мышь пришла
button.addEventListener('mouseout',buttonOut,false);//мышь ушла
button.addEventListener('mousedown',buttonOn,false);//мышь нажата
button.addEventListener('mouseup',buttonOff,false);//мышь отпущена


button.addEventListener('touchstart',touchOn,false);//дотронулись пальцем
button.addEventListener('touchend',touchOff,false);



document.onkeydown=keyOn;//Нажата клавиша
document.onkeyup=keyOff;
document.onkeypress=keyPress;


function buttonOver(EO) {
  EO=EO||window.event;
  EO.target.style.background='white';
  EO.target.style.color='black';
}

function buttonOut(EO) {
  EO=EO||window.event;
  EO.target.style.background='#808080';
  EO.target.style.color='white';
}

function buttonOn(EO) {
  var ec=0;
  EO=EO||window.event;
  EO.target.style.boxShadow='0 0px 0px';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
  ec+=validname();
  if (ec==0) {
    open1();
  }
}

function buttonOff(EO) {
  var ec=0;
  EO=EO||window.event;
  EO.target.style.boxShadow='0 1px 1px #000';
}

function touchOn(EO) {
  EO=EO||window.event;
  EO.target.style.background='white';
  EO.target.style.color='black';
  EO.target.style.boxShadow='0 0px 0px';
  vibro();
}

function touchOff(EO) {
  EO=EO||window.event;
  EO.target.style.background='#808080';
  EO.target.style.color='white';
  EO.target.style.boxShadow='0 1px 1px #000';
}

function keyOn(EO) {
  EO=EO||window.event;
  if (EO.keyCode==13) {
    var keyEnter=document.getElementById('buttonPage');
    keyEnter.style.background='white';
    keyEnter.style.color='black';
    keyEnter.style.boxShadow='0 0px 0px';
  }
  if (EO.keyCode==27) {
    var keyEsc=document.getElementById('Exit');
    keyEsc.style.background='#cb3a3e';
    keyEsc.style.color='white';
  }
}

function keyOff(EO) {
  EO=EO||window.event;
  if (EO.keyCode==13) {
    var keyEnter=document.getElementById('buttonPage');
    keyEnter.style.background='#808080';
    keyEnter.style.color='white';
    keyEnter.style.boxShadow='0 1px 1px #000';
  }
  if (EO.keyCode==27) {
    var keyEsc=document.getElementById('Exit');
    keyEsc.style.background='white';
    keyEsc.style.color='black';
  }
}

function keyPress(EO) {
  EO=EO||window.event;
  if (EO.keyCode==13) {
    var ec=0;
    EO.target.style.boxShadow='0 0px 0px';
    ec+=validname();
    if (onAudioClick === false ) {
      audioClick.currentTime=0;
      audioClick.play( );
    }
    if (ec==0) {
      open1();
    }
  }
}

function open1() {
  var page2=document.getElementById('Page2').style.display='block';
  var page1=document.getElementById('Page1').style.display='none';
}

//выброотклик 
function vibro() {
  navigator.vibrate(30);
}