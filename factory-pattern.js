var peopleFactory = function (name, age, state) {
  var temp = {};
  temp.name = name;
  temp.age = age;
  temp.state = state;

  temp.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state}`);
  }

  return temp;
}

var person1 = peopleFactory('john', 23, 'CA');
var person2 = peopleFactory('kim', 27, 'SC');

person1.printPerson();
person2.printPerson();