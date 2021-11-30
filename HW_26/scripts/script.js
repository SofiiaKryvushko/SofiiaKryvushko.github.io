class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  stomach = [];
  eats(food) {
    this.stomach.push(food);
  }
}

class Rabbit extends Animal {
  constructor(legs, breed) {
    super(legs);
    this.breed = breed;
  }

  jump() {
    console.log(`${this.legs} jump`);
  }

  eats(food) {
    if (!(food instanceof Vegetable)) {
      throw new Error('only vegan!');
    }
    super.eats(food);
  }
}

class Snake extends Animal {
  constructor(legs, isPoisonous) {
    super(legs);
    this.isPoisonous = isPoisonous;
  }

  crawl() {
    console.log(`${this.legs} crawl`);
  }

  eats(food) {
    if (!(food instanceof Rabbit)) {
      throw new Error('only rabbits!');
    }
    super.eats(food);
  }
}

class Human extends Animal {
  constructor(legs, firstName, lastName) {
    super(legs);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  walk() {
    console.log(`${this.legs} walks vertical`);
  }

  greet() {
    console.log(`${this.firstName} : hi`);
  }

  eats(food) {
    if (food instanceof Human) {
      throw new Error('canibal!');
    }
    super.eats(food);
  }
}