class Square {
    constructor(side) {
      this.side = side;
    }
  
    perimeter() {
        return this.side * 4;
    }
  
    area() {
      return Math.pow(this.side, 2);
    }
  
    diagonal() {
      return Math.sqrt(2 * Math.pow(this.side, 2))
    }
  
    describe() {
      console.log("Square with side " + this.side +" has perimeter of " + this.perimeter() + ", area of " + this.area() + ", and diagonal of " + this.diagonal())
    }  
}

let square1 = new Square(4);
let square2 = new Square(8);
let square3 = new Square(10);
square1.describe();
square2.describe();
square3.describe();