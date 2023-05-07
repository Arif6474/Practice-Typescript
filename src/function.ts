// 2.5: Functions in Typescript:

function add2(num1: number, num2: number): number {

    return num1 + num2;

}

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 3, 4,];

const newArray = arr.map((elem: number) => elem * elem)

// method:

// If a function is declared inside an object then that function is called a method

const person: {

    name: string;

    balance: number;

    addBalance(money: number): void;

} = {

    name: "arif islam",

    balance: 6,

    addBalance(money: number) {

        console.log(`My New Balance is ${this.balance + money}`)

    },
};

// 2.6: Spread, Rest, Default Parameters and Destructuring

// default patameter

function addNumber(num1: number, num2: number = 10): number {

    return num1 + num2;

}

addNumber(23, 43);

//spread opearator

const myFriends = ['chandler', 'joey', 'ross'];

const newFriends = ['monica', 'rachel', 'pheobe'];
myFriends.push(...newFriends);


// rest paaremeter

const greetfriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`hi ${friend}`)

)

greetfriends("kasem", "hasem", "badol", "dablu", "bablu", "rasel");


// Destructuring

const [firstFriend] = myFriends
console.log(firstFriend);

const myBestFrined = {

    fullName: "abdul rahim",

    age: 25,

}

const { fullName } = myBestFrined;

console.log({ fullName });