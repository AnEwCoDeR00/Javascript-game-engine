class Entity{
    constructor(x,y,path){
        this.x = x;
        this.y = y;
        this.path = path;
        this.img = document.createElement("img");
        this.img.src = path;
        this.img.style.position = "absolute";
        this.img.style.top = String(this.y)+"px";
        this.img.style.left = String(this.x) + "px";
        document.body.appendChild(this.img);
        
    }
    addPos(x,y){
        this.x += x;
        this.y += y;
        this.update();
    }
    setPos(x,y){
        this.x = x;
        this.y = y;
        this.update();
    }
    update(){
        this.img.src = this.path;
        this.img.style.position = "absolute";
        this.img.style.top = String(this.y)+"px";
        this.img.style.left = String(this.x) + "px";
        document.body.removeChild(this.img)
        document.body.appendChild(this.img);
    }
    checkCollisions(object){
        this.update()
        if (this.x + this.img.width >= object.x && this.x + this.img.width <= object.x + object.img.width && this.y + this.img.height >= object.y && this.y + this.img.height <= object.y + object.img.height) {
            return true;
        } else if (this.x >= object.x && this.x <= object.x + object.img.width && this.y >= object.y && this.y <= object.y + object.img.height) {
            return true;
        } else {
            return false;
        }
    }
    setSize(width,height){
        this.img.height = height;
        this.img.width = width;
        this.update();
    }
    toRect(color){
        this.update();
        
        return new Rect(this.x,this.y,this.img.width,this.img.height,color);
    }
    
}


class Rect{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color
        this.rect_element = document.createElement("div");
        this.rect_element.style.width = String(this.width)+"px";
        this.rect_element.style.height = String(this.height)+"px";
        this.rect_element.style.position = "absolute";
        this.rect_element.style.left = String(this.x)+"px";
        this.rect_element.style.top = String(this.y)+"px";
        this.rect_element.style.background = this.color;
        document.body.appendChild(this.rect_element);
    }
    addPos(x,y){
        this.x += x;
        this.y += y;
        this.update();
    }
    setPos(x,y){
        this.x = x;
        this.y = y;
        this.update();
    }
    update(){
        this.rect_element.style.width = String(this.width)+"px";
        this.rect_element.style.height = String(this.height)+"px";
        this.rect_element.style.position = "absolute";
        this.rect_element.style.left = String(this.x)+"px";
        this.rect_element.style.top = String(this.y)+"px";
        this.rect_element.style.background = this.color;
        document.body.removeChild(this.rect_element);
        document.body.appendChild(this.rect_element);
    }
    checkCollisions(object){
        if (this.x + this.width >= object.x && this.x + this.width <= object.x + object.width && this.y + this.height >= object.y && this.y + this.height <= object.y + object.height) {
            return true;
        } else if (this.x >= object.x && this.x <= object.x + object.width && this.y >= object.y && this.y <= object.y + object.height) {
            return true;
        } else {
            return false;
        }
    }
}

export {Entity,Rect}