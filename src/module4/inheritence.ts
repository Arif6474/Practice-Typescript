// 4-3: Inheritence

// class Student {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     makeSleep(hours :number): string {
//         return `This ${this.name} will sleep ${hours} hours `

//     }
// }

// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string;

//     constructor(name: string, age: number, address: string ,designation: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;
//     }
//     makeSleep(hours :number): string {
//         return `This ${this.name} will sleep ${hours} hours `

//     }
//     takeClass(numberOfClasses :number): string {
//         return `This ${this.name} will take ${numberOfClasses} classes`
//     }
// }
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep ${hours} hours `

    }
}
class Student extends Person {

    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }

}
const student1 = new Student('Arif Islam', 25, 'Chittagong')

class Teacher extends Person {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }

    takeClass(numberOfClasses: number): string {
        return `This ${this.name} will take ${numberOfClasses} classes`
    }
}

const teacher1 = new Teacher('Jhonker Mahbub', 35, 'Ghulsan', 'Trainer')
teacher1.designation