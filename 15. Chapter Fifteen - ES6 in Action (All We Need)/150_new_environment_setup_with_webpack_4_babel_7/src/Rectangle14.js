import Shape7 from './Shape7'; // Now the Shape7 is accessible | File path: './Shape7' or './Shape7.js'

class Rectangle14 extends Shape7 {
  constructor(color, width, height) { // If you want to inherit color, you have to provide color
    // Note:
    /* If the constructor is called in the child class (Rectangle14), the super (super()) must be called otherwise it will give an error. */
    // There is basically a super (super()) to call the parent class (Shape7) constructor
    super(color); // Providing the color property inside the super (super())
    this.width = width;
    this.height = height;
  }

  // Method overriding
  draw() {
    console.log('Drawing a Rectangle 24...')
  }

  calculate() { // Method
    return this.width * this.height;
  }
}

export default Rectangle14; // Now this file is accessible from outside