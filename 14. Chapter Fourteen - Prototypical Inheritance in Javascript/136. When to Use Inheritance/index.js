// Chapter Fourteen
// When to Use Inheritance

// When to use inheritance and when not to use inheritance?

// Inheritance hierarchy design
// Asked to design a program

// Constructor function -> Animal
function Animal() { // Parent function | Parent class
  // Method (Two method implementations)
  canEat:
  canWalk:
}

// Inherited the Animal class inside of Parson and Dog

// New Animal: Goldfish

// Constructor function -> Animal2
function Animal2() { // Parent function | Parent class
  // Method (Method implementations)
  canEat:
}

// Constructor function -> Mammal
function Mammal() {
  // Inherited the Animal2 class
  // Method (Implemented the method inside Mammal)
  canWalk:
}

// Then Parson and Dog inherited the Mammal

// On the other hand, Goldfish inherited the Fish class
// Constructor function -> Fish
function Fish() {
  // Method (Method implementations)
  canSwim:
}

// There are some more systems such as composition
// Object-oriented composition

// We can make three methods into three objects (General JavaScript object)
/* canEat
canWalk
canSwim */

// Composition inside the Person class:
/* canEat
canWalk */

// Composition inside the Dog class:
/* canEat
canWalk */

// Composition inside the Goldfish class:
/* canEat
canSwim */