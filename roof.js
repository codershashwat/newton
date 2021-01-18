class Roof{
    constructor(x,y,width,height){
      var options={
           isStatic:true
       }
       this.x=x;
       this.y=y;
       this.heigth=height;
       this.width=width;

        this.body=Bodies.rectangle(x,y,width,heigth,options);
        
        World.add(world,this.body);
            
    }
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}