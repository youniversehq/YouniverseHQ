var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "cyan", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    var gameArea : document.getElementById("gameCanvas"),
    start : function() {
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle= "black";
        ctx.fillRect(0,0,myGameArea.canvas.width,myGameArea.canvas.height);
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
}