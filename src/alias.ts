// 2.7: Type alias and optional types

type CrushType = {

    name: string;

    age?: number;

    profession: string;

    address: string;

}

const crush1: CrushType = {

    name: "Jerry",

    age: 25,

    profession: 'Web Developer',

    address: 'Chittagong'

}

const crush2: CrushType = {

    name: "ross",

    profession: 'Next Lavel web developer',

    address: 'dhaka'

}

type CrashMarriedType = boolean;

const isCrashMarried: CrashMarriedType = false;

type CourseNameType = String;

const courseName: CourseNameType = 'Next Level Web Development';

type operationType = (x: number, y: number) => number

const calculate = (

    number: number, //10

    number2: number, //20

    operation: operationType //  (x, y) => x + y)

) => {

    console.log(operation(number, number2));

}

calculate(10, 20, (x, y) => x + y)

calculate(10, 20, (x, y) => x - y)

calculate(10, 20, (x, y) => x * y)