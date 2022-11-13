//class concepts
const _sides = new WeakMap();
const _draw = new WeakMap();
class Rectangle{              //parent class
    constructor(width,height,s) {
        this.width =width;   //instance property
        this.height = height;
        _sides.set(this, s);
        _draw.set(this, function () {
            console.log("sides are:" + _sides.get(this));
        });
        

    }
    draw() {
       console.log("sides are:" + _sides.get(this));
    }
    moveBy() {
        console.log(_draw.get(this)(_sides.get(this)));
    }
    Area() {  //instance method
        console.log(`${this.width}*${this.height}`);
    }
    Shape() {
        console.log("this is rectangle");
    }
    get area() {  //getter method
        return this.width * this.height;
    }
    set area(area) {  //setter method
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
    static equals(a, b) {  //static method
        return a.width * a.height === b.width * b.height;
    }
    static print(width, height) {  //static method
        return width === height;
    }
}
//Inheritence 
class Square extends Rectangle{  // child class;
    constructor(width, height,color) {
        super(width, height);
        this.color = color;
    }
    Shape() {
        super.Shape();
        console.log("this is square");
    }

}
let Square1 = new Square(10, 7, "red");
const myRectangle1 = new Rectangle(5, 2, 4);//creating new object
const myRectangle2 = new Rectangle(2, 7, 4);
console.log(myRectangle1.Shape());//polymorprism output
console.log(Square1.Shape());//polymorprism output
console.log(myRectangle1);
console.log(Square1);//inheritence output(child class)
console.log(Rectangle.equals(myRectangle1, myRectangle2));//static method output
console.log(Rectangle.print(6,6))//static method output
myRectangle1.area=25;//setter output
console.log(myRectangle1.area);//getter output
myRectangle1.Area();//instance method output
