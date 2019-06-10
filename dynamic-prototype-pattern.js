var PeopleDynamicProto = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  if (typeof this.printPerson !== 'function') {
    PeopleDynamicProto.prototype.printPerson = function () {
      console.log(`${this.name}, ${this.age}, ${this.state}`);
    };
  }
};

var person1 = new PeopleDynamicProto('john', 23, 'CA');

person1.printPerson();