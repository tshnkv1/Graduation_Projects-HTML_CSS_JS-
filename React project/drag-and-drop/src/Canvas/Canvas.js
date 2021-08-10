import React, {Fragment} from 'react';
import './Canvas.css'

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
        var mouse = {
            x: 0,
            y: 0,
        }

        var selected = false;
       // var drop = false;

        const cnv = this.canvas.current;
        const ctx = cnv.getContext('2d');
        var width = 600, height = 350;

        //квадрат
        const figure = document.getElementById("it");
        
        figure.addEventListener('dragstart', handleDragstart);
        figure.addEventListener('dragend', handleDragend);
        //square.addEventListener('drag', handleDrag);

        //dropZone
        const figuresZone = document.getElementById('form');

        figuresZone.addEventListener('dragenter', handleDragenter);
        //figuresZone.addEventListener('dragleave', handleDragleave);
        figuresZone.addEventListener('dragover', handleDragover);


        cnv.addEventListener('dragenter', handleDragenter);
        //cnv.addEventListener('dragleave', handleDragleave);
        cnv.addEventListener('dragover', handleDragover);
        cnv.addEventListener('drop', handleDrop);



        //начало перемещаться
        function handleDragstart(event) {
            event.dataTransfer.setData("it", this.dataset.item);
            console.log('dragstart', this);
        };

        //закончило перемещаться
        function handleDragend(event) {
            console.log('dragend', this);
        };

        //function handleDrag(event) {
        //    console.log('drag', this);
        //};

        //над чем происходит перемещение
        function handleDragenter(event) {
            event.preventDefault();
        };

        //с чего ушло перемещение
        /*function handleDragleave(event) {
        };*/

        //
        function handleDragover(event) {
            event.preventDefault();
        }

        let element = 0;
        //куда уронили
        function handleDrop(event) {
            element = event.dataTransfer.getData("it");
            console.log(element);
            add(element);
        };


        cnv.style.background = "whitesmoke";
        cnv.width = width;
        cnv.height = height;

        
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "#001EFF";
        ctx.lineWidth = 3;

        var Rect1 = function (x,y,w,h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }

        Rect1.prototype = { //свойства 
            draw: function () {
                ctx.fillRect(this.x, this.y, this.w, this.h)
            },

            stroke: function() {
                ctx.strokeRect(this.x, this.y, this.w, this.h,)
            }
        };

        /*var Rect2 = function (x,y,w,h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }

        Rect2.prototype = { //свойства 
            draw: function () {
                ctx.fillRect(this.x, this.y, this.w, this.h)
            },

            stroke: function() {
                ctx.strokeRect(this.x, this.y, this.w, this.h,)
            }
        }; */

        /*var Circle = function (x,y,r,start, end) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.start = start;
            this.end = end;
        }

        Circle.prototype = {
            draw: function () {
                
                ctx.arc(this.x, this.y, this.r, this.start, this.end);
                ctx.fill();
            },

            stroke: function() {
                ctx.fillStyle = "aqua";
                ctx.strokeRect(this.x, this.y, this.w, this.h,)
            }
        } */

        

        var i, rect = [];

        var isCursorInRect = function (rect) { //выбран ли элемент
            
            return (mouse.x > rect.x && mouse.x < rect.x + rect.w && mouse.y > rect.y && mouse.y < rect.y + rect.h );
        
        }


        /*for (i = 0; i < 2; i++) {
            
            rect.push( new Circle(100 + i * (100 + 20), 50, 0, Math.PI/2) );
        
        } */


        //добавление обьекта
        function add(elem) {
            console.log('добавляем функцию');
            if(elem == 1){
                rect.push( new Rect1(100, 100, 100, 100) );
            }

            //if(elem === 2){
            //    rect.push( new Rect2(100, 100, 100, 100) );    
            //}
            return rect;
            
         }

         for (i in rect) {
         if (rect[i].x + rect[i].w >cnv.width ){
             rect[i].x = cnv.width - rect[i].x;
         }
        }

        setInterval(function () {  //рисование канваса
            ctx.clearRect(0, 0, cnv.width, cnv.height)
            for (i in rect) {
                rect[i].draw();

            if(isCursorInRect(rect[i])) {
                rect[i].stroke();
            }

            }

            if (selected) {
                selected.x = mouse.x - selected.w / 2;
                selected.y = mouse.y - selected.h / 2;
            }

        }, 30);

        window.onmousemove = function (event) {
            mouse.x = event.offsetX;
            mouse.y = event.offsetY;
        };

        window.onmousedown = function () {
            if (!selected) {
                var i;
                for (i in rect) {
                    if (isCursorInRect(rect[i])) {
                        selected = rect[i];
                    }
                }
            }
        };

        window.onmouseup = function () {
            selected = false;
        }

       

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

        this.delete.current.addEventListener('click', () => {
            
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