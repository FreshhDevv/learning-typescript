"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(name);
        this.empCode = code;
    }
    find(name) {
        return new Employee(name, 1);
    }
}
let emp = new Employee("Ella", 100);
emp.display();
let emp2 = emp.find('Steve');
//# sourceMappingURL=index.js.map