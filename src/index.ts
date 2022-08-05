abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(string: any): Person;
}

class Employee extends Person {
    empCode: number;

    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }

    find(name: string): Person {
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("Ella", 100);
emp.display();

let emp2: Person = emp.find('Steve');