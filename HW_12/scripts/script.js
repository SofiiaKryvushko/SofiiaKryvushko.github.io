//1
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function () {
        alert('Meow');
    }
}

const cаt = new Cat('Vasya', 'british');
console.log(cаt.meow());

//2
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function () {
        alert(`Hello, ${this.firstName}`);
    }
}

const user = new User('Vasya', 'Vasiliev', 40);
console.log(user.greet());
