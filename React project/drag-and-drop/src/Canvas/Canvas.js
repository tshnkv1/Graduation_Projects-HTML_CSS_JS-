import React, {Fragment} from 'react';
import './Canvas.css'

/*оставляю небольшой комментарий

в данном проекте, который я должен был доработать, не получилось сделать одну вещь, от которой зависели пару других

при добавлении в массив arrayShapes очередного элемента через перетягивание, не получилось передать помимо координат, ещё и id по которому в дальнейшем можно было бы взаимодействовать

пытался сделать что то на подобии: 
arrayShapes.push( figure: new Rect(50, 50, 100, 100), id: arrayShapes.length),
]

чтобы мне дал id фигуры

я бы реализовал удаление по последнему выделенному элементу, запомнил id в переменной, и потом при клике на кнопку вызывалась бы функция 

// -- удаление элемента -- // 

        this.delete.current.addEventListener('click', () => {
            console.log('удаляем');
            arrayShapes.map( v => {
                console.log('удалить');
                if(v.id == selected.id ){
                    delete(arrayShapes.v);
                    console.log(arrayShapes);
                }
            })
        });

удаление через перетягивание 
подписался на событие когда зажата мыш, и выбран элемент 
и происхдит перетягивние элемента, и при  
mouse.x < 0 
mouse.y < 0
я прохожу циклом по массиву и удаляю элемент с этим id

поперемещению обьекта выделеного на передний план:

по id я бы нашел выделенный элемент массива и вставил бы его в конец ветки

до конца не получилось реализовать перемещение круга, 

//если элемент выбран, он следует за мышью
            if (selected) {
                arrayShapes[i].stroke();
                selected.x = mouse.x - selected.w / 2;// || mouse.x + selected.r/2
                selected.y = mouse.y - selected.h / 2;// || mouse.y + selected.r/2
                //selected.x = mouse.x - selected.x;
                //selected.y = mouse.y - selected.y;
                //selected.startposition = mouse.x - selected.r;
                //selected.endposition = mouse.x - selected.r;
            }
            
*/

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.save = React.createRef();
        this.delete = React.createRef();
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        
        //координаты мыши
        var mouse = {
            x: 0,
            y: 0,
        }

        //параметр элемента: true - выбран, false -  не выбран
        var selected = false;

        var lastSelect = null;

        var arrayShapes = []; // массив со всеми элементами
        var i; //переменная для циклов

        //параметры канваса
        const cnv = this.canvas.current;
        //console.log(cnv);
        const ctx = cnv.getContext('2d');
        var width = 600, height = 350;

        cnv.style.background = "whitesmoke";
        cnv.width = width;
        cnv.height = height;


        // -- квадрат -- //

        const square = document.getElementById("square");
        //console.log(figure);

        //подписка квадрата на события
        square.addEventListener('dragstart', handleDragstart);//элемент начали перетаскивать
        //square.addEventListener('dragend', handleDragend);//элемент закончили перетаскивать



        // -- круг -- //

        const circle = document.getElementById("circle");

        //подписка квадрата на события
        circle.addEventListener('dragstart', handleDragstart);//элемент начали перетаскивать
        //circle.addEventListener('dragend', handleDragend);//элемент закончили перетаскивать


        
        // -- зона из которой выносят -- //

        const  startZone = document.getElementById('third');

        //подписка на событие стартовой зоны
        //startZone.addEventListener('dragenter', handleDragenter); //когда в него входит перетаскиваемый объект
        //startZone.addEventListener('dragleave', handleDragleave);//когда из него выходит перетаскиваемый обьект
        //startZone.addEventListener('dragover', handleDragover);//когда в нем находиться перетаскиваемый элемент
        


        // -- зона canvas -- //
        cnv.addEventListener('dragenter', handleDragenter);//когда в него входит перетаскиваемый объект
        //cnv.addEventListener('dragleave', handleDragleave);//когда из него выходит перетаскиваемый обьект
        cnv.addEventListener('dragover', handleDragover);//когда в нем находиться перетаскиваемый элемент
        cnv.addEventListener('drop', handleDrop);

        //для мыши
        cnv.addEventListener('mousemove', handleMouseMove);
        cnv.addEventListener('mousedown', handleMousedown);
        cnv.addEventListener('mouseup', handleMouseup);

        cnv.addEventListener('click', handleClick);



        // -- функции перемещения -- //



        // -- для фигур -- //

        //начало перемещаться
        function handleDragstart(event) {
            event.dataTransfer.setData("id", event.target.id);
        //    console.log('dragstart', event.target.id);
        };

        //закончило перемещаться
        function handleDragend(event) {
        //    console.log('dragend', this);
        };


        // -- для областей куда перетаскивают -- //

        //над чем происходит перемещение
        function handleDragenter(event) {
            console.log('dragstart', this);
            event.preventDefault();
        };

        //с чего ушло перемещение
        //function handleDragleave(event) {
        //    console.log('dragleave', this);
        //};

        function handleDragover(event) {
            event.preventDefault();
        }

        function handleDrop(event) {
            let itemID = event.dataTransfer.getData("id");
            console.log(itemID);
            addItems(itemID);
        };


        // -- для мыши -- //

        function handleMouseMove(event) {
            mouse.x = event.offsetX;
        //    console.log(mouse.x);
            mouse.y = event.offsetY;
        //    console.log(mouse.y);
        };

        function handleMousedown(event) {
            if (!selected) {
                for (i in arrayShapes) {
                    if (isCursorInRect(arrayShapes[i])) {
                        selected = arrayShapes[i];
                        //arrayShapes[i].id = i;
                    }
                }
            }
        };

        function handleMouseup(event) {
            selected = false;
        };
        

        function handleClick(event) {
            console.log(event.id);
        }



        // -- отрисовка фигур -- //


        // -- квадрат -- //
        

        var Rect = function (x,y,w,h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }


        //методы
        Rect.prototype = { 
            draw: function () {
                ctx.fillStyle = "yellow";
                ctx.lineWidth = 3;
                ctx.fillRect(this.x, this.y, this.w, this.h);
            },

            stroke: function() {
                ctx.strokeStyle = "#001EFF";
                ctx.strokeRect(this.x, this.y, this.w, this.h)
            }
        };


        // -- круг -- //
        

        var Circle = function (x,y,r, startposition, endposition, id) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.startposition = startposition;
            this.endposition = endposition;
            this.id = id
        }

        Circle.prototype = {
            draw: function() {
                ctx.fillStyle = "aqua";
                ctx.arc(this.x, this.y, this.r, this.startposition, this.endposition);
                ctx.fill();
            },
            stroke: function() {
                ctx.strokeStyle = "#001EFF";
                ctx.stroke();
            }
        }


        // -- добавление элементов в массив -- //


        function addItems(object) {
            switch(object) {

                case "square":
                    
                   //for (i = 0; i<arrayShapes.length; i++) {
                    //    if(arrayShapes[i] == "square") {
                    //        console.log()

                    //    }
                    //}
                    let itemSq = new Rect(50, 50, 100, 100);
                    arrayShapes.push( itemSq);
                    console.log(arrayShapes.length + 1);
                    break;
                
                case "circle":
                    let itemCi = new Circle(250, 100, 50, 0, 360);
                    arrayShapes.push( itemCi );
                    console.log(arrayShapes);
                    break;
            }
        }



        //добавление 2 квадратов в массив
        //for (i = 0; i < 2; i++) {
            //var item = { id}
           //item.circle = new Circle(100 + i * (100 + 100), 100, 50, 0, 360);
           // arrayShapes.push( new Rect(100 + i * (100 + 100), 100, 100, 100) );
        
        //}

        console.log(arrayShapes);



        // -- проверка находиться ли мышь в элементе -- //

        var isCursorInRect = function (rect) {
            
            return (mouse.x > rect.x && mouse.x < rect.x + rect.w && mouse.y > rect.y && mouse.y < rect.y + rect.h 
                || mouse.x < rect.x && mouse.x > rect.x - rect.r && mouse.y > rect.y && mouse.y < rect.y + rect.r);
        
        }


        // -- функция отрисовки -- //
        function CanvasDraw() {
            
            //очищаем canvas
            ctx.clearRect(0, 0, cnv.width, cnv.height);

            //рисуем все элементы массива
            for (i in arrayShapes) {
                arrayShapes[i].draw();
                //console.log(arrayShapes[i].id);

                if(isCursorInRect(arrayShapes[i])) {
                    arrayShapes[i].stroke();
                    lastSelect = arrayShapes[i].x;

                }
            }

            //если элемент выбран, он следует за мышью
            if (selected) {
                arrayShapes[i].stroke();
                selected.x = mouse.x - selected.w / 2;// || mouse.x + selected.r/2
                selected.y = mouse.y - selected.h / 2;// || mouse.y + selected.r/2
                //selected.x = mouse.x - selected.x;
                //selected.y = mouse.y - selected.y;
                //selected.startposition = mouse.x - selected.r;
                //selected.endposition = mouse.x - selected.r;
            }

        }

        // -- добавление setInterval -- //

        setInterval(CanvasDraw, 30 );

        console.log(arrayShapes);


        // -- cохранение в JSON формате -- //

        this.save.current.addEventListener('click', () => {
            var canvasContents = cnv.toDataURL();
            console.log("URL");
            var data = { image: canvasContents, date: Date.now() };
            var string = JSON.stringify(data);

            var file = new Blob([string], {
                type: 'application/json'
            });

            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = 'canvas.json';
            console.log(a)
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
        
        
    }

    render() {
        return (
            <Fragment>
                <canvas ref={this.canvas}/>
                <button ref={this.save}>Save</button>
                <button ref={this.delete}>Delete</button>
            </Fragment>
        );
    }
}

export default CanvasComponent;