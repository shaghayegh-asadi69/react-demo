"use strict";
console.log("js linked");

// This is a class declaration
// class Animal{}

// Class expression: this is anonymous but assigned to a variable
// const Animal = class Animal1{}

class Animal {
  constructor(props) {
    // Object.assign(this,props)
    // you can use Object.assign instead of writing all the props out
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
    this.sound = props.sound;
  }
  animalSpeak() {
    console.log(this.sound);
  }
}

const wildAnimal = new Animal({
  name: "tiger",
  color: "black and orange",
  age: 4,
  sound: "roar",
});
console.log(wildAnimal.name);
// console.log(wildAnimal.color)
// console.log(wildAnimal.age)

const housePet = new Animal({
  name: "dog",
  color: "red",
  age: 8,
  sound: "woof",
});
console.log(housePet.name);

wildAnimal.animalSpeak();
housePet.animalSpeak();

class Dog extends Animal {
  constructor(props, type) {
    super(props);
    this.type = type;
  }
  speak = () => console.log(`${this.name} barks`);
  goodBoi = () => console.log(`${this.name} is a good ${this.type}`);
}

const spot = new Dog(
  { name: "spot", color: ["black", "white"], age: 10, sound: "woof" },
  "Dalamation"
);
console.log(spot);

spot.speak();
spot.goodBoi();
// wildAnimal.speak() this wont work as it doesnt have the speak method

//Functions

// Function declarations
function myName(name) {
  return `Hi my name is ${name}`;
}

// function expression
const theName = function (name) {
  return `Yo, my name is ${name}`;
};

// arrow function
const thatName = (name) => {
  return `wow, check out that ${name}`;
};

// if there is only one pramater we dont need (), if there are 0 or 2+ then you need ()
// if we only want to return then we dont need to have {}

const tree = () => console.log("Im a tree");
tree();
