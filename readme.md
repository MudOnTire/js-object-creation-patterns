# 构造函数模式（constructor pattern）

**示例**

```
var peopleConstructor = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;
  this.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state}`);
  }
}

var person1 = new peopleConstructor('john', 23, 'CA');
var person2 = new peopleConstructor('kim', 27, 'SC');

person1.printPerson();
person2.printPerson();
```

构造函数模式的问题在于，每次创建一个新实例，所有的属性和方法都会被复制一遍，占用更多的内存和资源。

# 工厂模式（factory pattern）

**示例**

```
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
```

工厂模式和构造函数模式有同样的问题。

# 原型模式（prototype pattern）

**示例**

```
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
```

# 动态原型模式（dynamic prototype pattern）

**示例**

```
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
```