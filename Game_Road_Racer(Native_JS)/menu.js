'use strict';


//рингтон
let onAudio = false;
const audio = new Audio('audio/screen.mp3');
audio.loop = true;
audio.volume = 0.3;

//клик
let onAudioClick = false;
const audioClick = new Audio('audio/click1.mp3');
audioClick.volume = 0.3;


//выход
var exitBut=document.getElementById('Exit');
exitBut.addEventListener('mouseover',buttonOver,false);//мышь пришла
exitBut.addEventListener('mouseout',buttonOut,false);//мышь ушла
exitBut.addEventListener('mousedown',buttonOn,false);//мышь нажата
exitBut.addEventListener('mouseup',buttonOff, false);//мышь успустили
exitBut.addEventListener('click',open2, false);//щелчок мыши

function open2() {
  vibro();
  var open2 = confirm('Вы уверены что хотите выйти из игры?');
  if ( open2 ) {
    var page2=document.getElementById('Page2').style.display='none';
    var page1=document.getElementById('Page1').style.display='block';
  }
  
}
//button 1 
// мышь
var menuBut1=document.getElementById('menu-button1');
menuBut1.addEventListener('mouseover',buttonOver,false); //мышь пришла
menuBut1.addEventListener('mouseout',buttonOut,false);//мышь ушла
menuBut1.addEventListener('mousedown',buttonOn,false);//мышь нажата
menuBut1.addEventListener('mouseup',buttonOff, false);//мышь успустили
menuBut1.addEventListener('click',openGame, false);//щелчок мыши
//палец
menuBut1.addEventListener('touchstart',touchOn,false);//палец на экране
menuBut1.addEventListener('touchend',touchOff, false);//убрали палец


function openGame() {
  vibro();
  var page2=document.getElementById('Page2').style.display='none';
  var page3=document.getElementById('Page3').style.display='block';
}

//button 3 мышь
var menuBut3=document.getElementById('menu-button3');
menuBut3.addEventListener('mouseover',buttonOver,false); //мышь пришла
menuBut3.addEventListener('mouseout',buttonOut,false);//мышь ушла
menuBut3.addEventListener('mousedown',buttonOn,false);//мышь нажата
menuBut3.addEventListener('mouseup',buttonOff, false);//мышь успустили
menuBut3.addEventListener('click',openRules, false);//щелчок мыши
//палец
menuBut3.addEventListener('touchstart',touchOn,false);//палец на экране
menuBut3.addEventListener('touchend',touchOff, false);//убрали палец

//button 4 
//мышь
var menuBut4=document.getElementById('menu-button4');
menuBut4.addEventListener('mouseover',buttonOver,false); //мышь пришла
menuBut4.addEventListener('mouseout',buttonOut,false);//мышь ушла
menuBut4.addEventListener('mousedown',buttonOn,false);//мышь нажата
menuBut4.addEventListener('mouseup',buttonOff, false);//мышь успустили
menuBut4.addEventListener('click',openRecords, false);//щелчок мыши
//палец
menuBut4.addEventListener('touchstart',touchOn,false);//палец на экране
menuBut4.addEventListener('touchend',touchOff, false);//убрали палец

//button 5 
//мышь
var menuBut5=document.getElementById('menu-button5');
menuBut5.addEventListener('mouseenter',buttonOver,false); //мышь пришла
menuBut5.addEventListener('mouseleave',buttonOut,false);//мышь ушла
menuBut5.addEventListener('mousedown',buttonOn,false);//мышь нажата
menuBut5.addEventListener('mouseup',buttonOff, false);//мышь утпустили
menuBut5.addEventListener('click', soundClick, false);//щелчок мыши
//палец
menuBut5.addEventListener('touchstart',touchOn,false);//палец на экране
menuBut5.addEventListener('touchend',touchOff, false);//убрали палец

// Звук
function soundClick() {
  vibro();
  if ( onAudio === false )  {
    // включаем
    onAudio = true;
    this.innerHTML='Sound off';
    audio.play();
  }
  else {
    // выключаем
    onAudio = false;
    this.innerHTML='Sound on';
    audio.pause();
  }
}

// подносим мышь
function buttonOver(EO) {
  EO=EO||window.event;
  EO.target.style.background='#cb3a3e';
  EO.target.style.color='white';
}

//убираем мышь
function buttonOut(EO) {
  EO=EO||window.event;
  EO.target.style.background='white';
  EO.target.style.color='black';
}

//нажимаем на мышь
function buttonOn(EO) {
  EO=EO||window.event;
  EO.target.style.boxShadow='0 0px 0px';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
}

//отпускаем мышь
function buttonOff(EO) {
  EO=EO||window.event;
  EO.target.style.boxShadow='0 1px 1px #000';
}

//нажали пальцем
function touchOn(EO) {
  EO=EO||window.event;
  EO.target.style.background='#cb3a3e';
  EO.target.style.color='white';
  EO.target.style.boxShadow='0 0px 0px';
}

//убрали палец
function touchOff(EO) {
  EO=EO||window.event;
  EO.target.style.background='white';
  EO.target.style.color='black';
  EO.target.style.boxShadow='0 1px 1px #000';
}


//открываем окно правила
function openRules() {
  var infoRules=document.querySelector('.info-rules').style.display='block';
  vibro();
}
//закрыть окно правила
var xClose3 = document.getElementById('close3');
xClose3.addEventListener('mouseover', closeOver,false)//мышь пришла
xClose3.addEventListener('mouseout',closeOut,false);//мышь ушла
xClose3.addEventListener('click',clickCloseRules,false);//шелчок мыши
xClose3.addEventListener('touchstart',closeOver,false);//палец на экране
xClose3.addEventListener('touchend',closeOut, false);//убрали палец



//открыть окно рекордов
function openRecords() {
  vibro();
  var infoRecord=document.querySelector('.info-records').style.display='block';
}
//закрыть окно рекордов
var xClose4 = document.getElementById('close4');
xClose4.addEventListener('mouseover', closeOver,false)//мышь пришла
xClose4.addEventListener('mouseout',closeOut,false);//мышь ушла
xClose4.addEventListener('click',clickCloseRecords,false);//шелчок мыши
xClose4.addEventListener('touchstart',closeOver,false);//палец на экране
xClose4.addEventListener('touchend',closeOut, false);//убрали палец



//нажатие на крестик
//мышь пришла
function closeOver(EO) {
  EO=EO||window.event;
  EO.target.style.fill='white';
}

//мышь ушла
function closeOut(EO) {
  EO=EO||window.event;
  EO.target.style.fill='black';
}

//щелчок мыши
function clickCloseCar() {
  var infoCar=document.querySelector('.info-car').style.display='none';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
}

//щелчок мыши
function clickCloseRules() {
  var infoRules=document.querySelector('.info-rules').style.display='none';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
  vibro();
}

//щелчок мыши
function clickCloseRecords() {
  var infoRecord=document.querySelector('.info-records').style.display='none';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
  vibro();
}



//Нажатие клавиш
document.onkeydown = enterKey;
document.onkeyup = outKey;
document.onkeypress = pressKey;

function enterKey(EO) {
  EO=EO||window.event;
  if (EO.keyCode==27) {
    var ex = document.getElementById('Exit');
    ex.style.background='#cb3a3e';
    ex.style.boxShadow='0 0px 0px';
  }
}

function outKey(EO) {
  EO=EO||window.event;
  if (EO.keyCode==27) {
    var ex = document.getElementById('Exit');
    ex.style.background='white';
    ex.style.boxShadow='0 1px 1px #000';
  }
}

function pressKey(EO) {
  EO=EO||window.event;
  if (EO.keyCode==27) {
    var win2=document.getElementById('Page2').style.display='none';
    var win1=document.getElementById('Page1').style.display='block';
  }
}

