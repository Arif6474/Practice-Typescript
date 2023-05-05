// 2.10: Ternary Operator , Nullish Coeslancing Operator, Module Summary:

// ternary iperator

const age = 22;

// if(age >= 18){

//     console.log('Yes');

// }else{

//     console.log('No');

// }

const isAdult = age >= 18 ? "Yes" : 'No';

console.log(isAdult);

// Nullish coeslancing operator:

// Setting a default value based on null or undefined.

// Null and Undefined

const isAuthenticaticatedUser = null

const userName = isAuthenticaticatedUser ?? 'Guest';

console.log({ userName });

type Manush = {

    name: string;

    age: number;

    address: {

        city: 'no city';

        road: 'no road';

        home?: string;

    };

};

const manush1: Manush = {

    name: 'rahmot',

    age: 20,

    address: {

        city: "no city",

        road: "no road",
        home: 'chittagong'

    },

};

const home = manush1.address?.home ?? 'No home';

console.log({ home });