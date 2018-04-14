

///obsluga klawiszy
const keyListener = Rx.Observable
.fromEvent(window,'keydown')
.switchMap((e)=>{
    return e.key;
})
.subscribe((x)=>{
player.changePosition(x);
});


class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    drawPlayer(){
        return `<div style="width:100px;height:100px;border:10px solid #0000FF;margin-left:${this.x}px;margin-top:${this.y}px;position:absolute;"></div>`;
    }

    changePosition(x){
        if(x === "w" || x ==="W"){
            this.y = this.y - 10;
        }
        if(x === "s" || x ==="S"){
            this.y = this.y + 10;
        }
        if(x === "a" || x ==="A"){
            this.x = this.x - 10;
        }
        if(x === "d" || x === "D"){
            this.x = this.x + 10;
        }
        this.positionVerification();
    }
    positionVerification(){
        if(this.x <=0){
            this.x = 0;
        }
        if(this.x >=395){
            this.x = 395;
        }
        if(this.y <= 0){
            this.y = 0;
        }
        if(this.y >=395){
            this.y =395;
        }
    }

    collisionVerification(objX, objY){

        
        if(this.x+50 === objX+50 && this.y-50 === objY-50){
            console.log("Collision");
        }

        if(this.x+100 === objX && (Math.abs(this.y - objY))< 100){
            console.log("Coll  left x");
        }

        if(this.x === objX+100 && (Math.abs(this.y - objY))< 100){
            console.log("Coll right x");
        }

        if(this.y+100 === objY && (Math.abs(this.x - objX))< 100){
            console.log("Coll up y");
        }

        if(this.y === objY+100 && (Math.abs(this.x - objX))< 100){
            console.log("Coll down y");
            alert("Collision");
        }

    }



}



class Rectangle {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    changePositionX(deltaX){
        this.x = this.x + deltaX;
    }

    changePositionY(deltaY){
        this.y = this.y + deltaY;
    }


    drawRectangle(){
        return `<div style="width:100px;height:100px;border:10px solid #000;margin-left:${this.x}px;margin-top:${this.y}px;position:absolute;"></div>`;
    }

    positionVerification(){
        if(this.x <=0){
            this.x = 0;
        }
        if(this.x >=395){
            this.x = 395;
        }
        if(this.y <= 0){
            this.y = 0;
        }
        if(this.y >=395){
            this.y =395;
        }
    }

}

/// Instancja obiektu 
rect = new Rectangle(250,250);
player = new Player(100,100);



var keyups = Rx.Observable
.timer(0,100)
.map(x => randommove())
.subscribe({
    next: x => {
    //console.log(x);
    rect.positionVerification();
    player.collisionVerification(rect.x, rect.y);
    //console.log(rect.x);
    //rect.changePositionX(x);

    $('#rect').html(rect.drawRectangle());
    $('#player').html(player.drawPlayer());

}
});



/// Funkcja randomizująca
function randommove(){
    var val= Math.floor(Math.random()* 4 +1);
    switch(val) {   
        case 1:
            this.rect.changePositionX(10);
            return "RIGHT";
        case 2:
            this.rect.changePositionX(-10);
            return "LEFT";
        case 3:
            this.rect.changePositionY(10);
            return "UP";
        case 4:
            this.rect.changePositionY(-10);
            return "DOWN";
        default:
            break;
    }
};



