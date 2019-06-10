var PeopleProto = function () { };

PeopleProto.prototype.name = 'no name';
PeopleProto.prototype.age = 0;
PeopleProto.prototype.state = 'no state';
PeopleProto.prototype.printPerson = function () {
  console.log(`${this.name}, ${this.age}, ${this.state}`);
};

var person1 = new PeopleProto();
// person1.name = 'john';
person1.age = 23;
person1.state = 'CA';
person1.printPerson();

console.log('name' in person1); // true
console.log(person1.hasOwnProperty('name')); // false