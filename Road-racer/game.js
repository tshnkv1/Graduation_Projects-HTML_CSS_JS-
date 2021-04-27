
//игра
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');
ctx.save();

var car = new Image();
var line1 = new Image(); 
var line2 = new Image();
var car2 = new Image();
var car3 = new Image();


line1.src = "image/line.png";
line2.src = "image/line.png";
car.src = "image/car.png";
car2.src = "image/car2.png";
car3.src = "image/car3.png";

var start = false; //начата ли игра
var again = false;
var crash = false; //есть ли авария
var score = 0; // счет в игре
var myReq;


//левая разметка
var newLine = [
  { road: 5, h: 50, w: 3, y: 0, x: 200 },
  { road: 5, h: 50, w: 3, y: 200, x: 200 },
  { road: 5, h: 50, w: 3, y: 400, x: 200 },
  { road: 5, h: 50, w: 3, y: 600, x: 200 },
  { road: 5, h: 50, w: 3, y: 800, x: 200 }
];

//средняя линия
var newLineCenter = [
  { road: 5, h: 50, w: 3, y: 0, x: 400 },
  { road: 5, h: 50, w: 3, y: 200, x: 400 },
  { road: 5, h: 50, w: 3, y: 400, x: 400 },
  { road: 5, h: 50, w: 3, y: 600, x: 400 },
  { road: 5, h: 50, w: 3, y: 800, x: 400 }
];

//правая разметка
var newLineRight = [
  { road: 5, h: 50, w: 3, y: 0, x: 600 },
  { road: 5, h: 50, w: 3, y: 200, x: 600 },
  { road: 5, h: 50, w: 3, y: 400, x: 600 },
  { road: 5, h: 50, w: 3, y: 600, x: 600 },
  { road: 5, h: 50, w: 3, y: 800, x: 600 }
];

//позиция главной машинки
var carP = {
  h: 150, //высота машинки
  w: 100,//ширина машинки
  x: 350, //позиция машинки по x
  y: 600, // позиция машинки по y
  move: 5,  //сдвиг машинки влево
};



var okLeft = false; //движение в лево
var okRight = false; //движние вправо




//машинки по первой полосе
var carFirst = {
  h: 150, //высота машинки
  w: 100,//ширина машинки
  x: randomDiap(10, 100), //позиция машинки по x
  y: -randomDiap(270, 350), // позиция машинки по y
  move: 5
}

//машинки по второй полосе
var carSecond = {
  h: 150, //высота машинки
  w: 100,//ширина машинки
  x: randomDiap(210, 300), //позиция машинки по x
  y: -randomDiap(350, 750), // позиция машинки по y // позиция машинки по y
  move: 5
}

//машинки по третьей полосе
var carThird = {
  h: 150, //высота машинки
  w: 100,//ширина машинки
  x: randomDiap(410, 500), //позиция машинки по x
  y: -randomDiap(400, 800), // позиция машинки по y
  move: 5,
}

//машинки по четвертой полосе
var carFourth = {
  h: 150, //высота машинки
  w: 100,//ширина машинки
  x: randomDiap(610, 700), //позиция машинки по x
  y: -randomDiap(350, 750), // позиция машинки по y
  move: 5,
}



//   ---Функции ---

//случайное число в нужном интервале
function randomDiap(n,m) { return Math.floor(Math.random()*(m-n+1))+n; }


//столкновение произошло
function stop(gameover) {
  start = false;
  var gamescore = gameover;
  if (crash) {
  var game = document.getElementById('game-stop').style.display='block'; 
  var viewScore = document.getElementById('score-results').innerHTML='Your score: '+gamescore;
  }
}


// функция заливки фона
function drawRect() {
  ctx.fillStyle = "Gray";
  ctx.fillRect(0,0, 800, 800)
}


//обнулить счет
function nullScore() {
  if (crash) {
    score = 0;
  }
}

//рисуем игру
function draw() {

  // --- Рисуем фон и разметку --- //
  //фон
  drawRect();

  //левая разметка на дороге
  for (var i=0; i<newLine.length; i++ ) {
    ctx.drawImage(line1, newLine[i].x, newLine[i].y, newLine[i].w, newLine[i].h);

    if (start) { newLine[i].y += newLine[i].road; }//движение полосы

    if (newLine[i].y > 800) { newLine[i].y = -200; } //перемещение полосы вверх

    if (start) { 
      if( newLine[i].y == 610) {
        score ++;
        var divScore = document.getElementById('score').innerHTML='Score: '+score+' m';
      } 
    }
  }

  //разметка на дороге посередине
  for (var i=0; i<newLineCenter.length; i++ ) {
    
    ctx.drawImage(line1, newLineCenter[i].x, newLineCenter[i].y, newLineCenter[i].w, newLineCenter[i].h);//рисуем линию
    
    if (start) { newLineCenter[i].y += newLineCenter[i].road; }//движение линии
    
    if (newLineCenter[i].y > 800) { newLineCenter[i].y = -200; }
  }

  //правая разметка на дороге
  for (var i=0; i<newLineRight.length; i++ ) {
    ctx.drawImage(line1, newLineRight[i].x, newLineRight[i].y, newLineRight[i].w, newLineRight[i].h);
  
    if (start) { newLineRight[i].y += newLineRight[i].road; }
  
    if (newLineRight[i].y > 800) { newLineRight[i].y = -200; }
  }


  // --- Попутные машинки --- //
  //машинки по 1 полосе
  ctx.drawImage(car3, carFirst.x, carFirst.y, carFirst.w, carFirst.h);
  if (start) { carFirst.y += carFirst.move; }
  if (carFirst.y > 800) { carFirst.y = -randomDiap(275, 600); }

  //машинки по 2 полосе
  ctx.drawImage(car2, carSecond.x, carSecond.y, carSecond.w, carSecond.h);
  if (start) { carSecond.y += carSecond.move; }
  if (carSecond.y > 800) { carSecond.y = -randomDiap(320, 720); }

  //машинки по 3 полосе
  ctx.drawImage(car2, carThird.x, carThird.y, carThird.w, carThird.h);
  if (start) { carThird.y += carThird.move; }
  if (carThird.y > 800) { carThird.y = -randomDiap(310, 720); }

  //машинки по 4 полосе
  ctx.drawImage(car3, carFourth.x, carFourth.y, carFourth.w, carFourth.h);
  if (start) { carFourth.y += carFourth.move; }
  if (carFourth.y > 800) { carFourth.y = -randomDiap(200, 400); }


    // --- Рисуем машину --- //
  if ( //логика врезания
    (carFirst.y + carFirst.h > carP.y &&
     carFirst.x + carFirst.w >carP.x &&
     carFirst.x < carP.x + carP.w) ||
    (carSecond.y + carSecond.h > carP.y &&
     carSecond.x + carSecond.w >carP.x &&
     carSecond.x < carP.x + carP.w) ||
    (carThird.y + carThird.h > carP.y &&
     carThird.x + carThird.w >carP.x &&
     carThird.x < carP.x + carP.w) ||
    (carFourth.y + carFourth.h > carP.y &&
     carFourth.x + carFourth.w >carP.x &&
     carFourth.x < carP.x + carP.w)) {
    crash = true;
    stop(score);
  }
  else { crash = false; }


  //если врезания нет
  if (!crash) {
    ctx.drawImage(car, carP.x, carP.y, carP.w, carP.h); //рисуем машинку
    if (start) { //если игра идет то двигаем машинку
      if (okLeft === true && carP.x > 0) { carP.x -= carP.move; }
      if (okRight === true && carP.x < 700) { carP.x += carP.move; } 
    }
  }
  myReq = requestAnimationFrame(draw, 60); //анимируем игру
}

car3.onload = draw; //как последняя картинка загрузиться игра нарисуется






// --- События --- //

//кнопка play
var pl = document.getElementById('playOn');
pl.addEventListener('mousedown',on,false);//мышь нажата
pl.addEventListener('mouseup',off, false);//мышь успустили
pl.addEventListener('click',startGame, false);//щелчок мыши

//кнопка pause
var pal = document.getElementById('playOff');
pal.addEventListener('mousedown',on,false);//мышь нажата
pal.addEventListener('mouseup',off, false);//мышь успустили
pal.addEventListener('click',pauseGame, false);//щелчок мыши


//нажимаем на мышь
function on(EO) {
  EO=EO||window.event;
  EO.target.style.backgroundColor='grey';
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
}

//отпускаем мышь
function off(EO) {
  EO=EO||window.event;
  EO.target.style.backgroundColor='white';
}

function startGame() { start = true; vibro(); }; //начали игру
function pauseGame() { start = false; vibro();  }; //нажали на паузу



//нажатие на клавишу заново
var replays = document.getElementById('replay');
replays.addEventListener('click', replayGame);

function replayGame() {
  if (onAudioClick === false ) {
    audioClick.currentTime=0;
    audioClick.play( );
  }
  nullScore();
  start = false;
  crash = false;
  var game = document.getElementById('game-stop').style.display='none';
  var divScore = document.getElementById('score').innerHTML='Score: '+0+' m';
    carP.x = 350;
    carP.y = 600;
    carFirst.y = -randomDiap(270, 350)
    carSecond.y = -randomDiap(350, 750);
    carThird.y = -randomDiap(400, 800);
    carFourth.y = -randomDiap(350, 750); 
  
}


// --- Выход из игры --- //
//выход
var exitBut2=document.getElementById('Exit2');
exitBut2.addEventListener('mouseover',buttonOver,false);//мышь пришла
exitBut2.addEventListener('mouseout',buttonOut,false);//мышь ушла
exitBut2.addEventListener('mousedown',buttonOn,false);//мышь нажата
exitBut2.addEventListener('mouseup',buttonOff, false);//мышь успустили
exitBut2.addEventListener('click',closeGame, false);//щелчок мыши


//подносим мышь
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
  EO.target.style.background='white';
  EO.target.style.color='black';
  if (onAudioClick === false ) {
    audioClick.play( );
  }
}

//отпускаем мышь
function buttonOff(EO) {
  EO=EO||window.event;
  EO.target.style.boxShadow='0 1px 1px #000';
  EO.target.style.background='#cb3a3e';
  EO.target.style.color='white';
}


function closeGame() {
  vibro();
  start = false;
  var goOut = confirm('Вы уверены что хотите выйти и сбросить счет?');
  if ( goOut ) {
    var page3=document.getElementById('Page3').style.display='none';
    var page2=document.getElementById('Page2').style.display='block';
    var divScore = document.getElementById('score').innerHTML='Score: '+0+' m';
    carP.x = 350;
    carP.y = 600;
    carFirst.y = -randomDiap(270, 350)
    carSecond.y = -randomDiap(350, 750);
    carThird.y = -randomDiap(400, 800);
    carFourth.y = -randomDiap(350, 750);
    score = 0;
  }

}



// --- Управление клавиатурой --- //

document.addEventListener('keydown', keyboard); //нажимаем клавишу
document.addEventListener('keyup', notKeyboard); //отпускаем клавишу

//клавиша нажата
function keyboard(EO) {
  EO=EO||window.event;
  console.log(EO.keyCode);
  if (EO.keyCode === 65) { okLeft = true; } //машинка влево (D)
  if (EO.keyCode === 68) { okRight = true; } //машинка вправо (A)
  if (EO.keyCode === 32) { //пауза (Space)
    start = false;
    var playOffkey = document.getElementById('playOff').style.backgroundColor='grey';
    if (onAudioClick === false ) {
      audioClick.currentTime=0;
      audioClick.play( );
    }
  } 
  
}

//клавиша отпущена
function notKeyboard(EO) {
  EO=EO||window.event;
  if (EO.keyCode === 65) { okLeft = false; }
  if (EO.keyCode === 68) { okRight = false; }
  if (EO.keyCode === 32) { var playOffkey = document.getElementById('playOff').style.backgroundColor='white'; } 
}



// --- Управление нажатием на экран --- //

//движение влево
var leftTouch = document.getElementById('leftTouch');
leftTouch.addEventListener('touchstart', moveCarLeft);
leftTouch.addEventListener('touchend', notMoveCarLeft);

function moveCarLeft() { okLeft = true; };
function notMoveCarLeft() { okLeft = false; };



//движение вправо
var rightTouch = document.getElementById('rightTouch');
rightTouch.addEventListener('touchstart', moveCarRight);
rightTouch.addEventListener('touchend', notMoveCarRight);

function moveCarRight() { okRight = true; };
function notMoveCarRight() { okRight = false; };