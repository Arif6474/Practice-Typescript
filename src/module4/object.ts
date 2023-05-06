// 4-2: How to Create Class, Object , Parameter Properties

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`);

//     }
// }
class Animal1 {

    constructor(public name: string, public species: string, public sound: string) {

    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);

    }
}

const dog = new Animal1('Menu', 'dog', 'ghew ghew')
dog.makeSound()