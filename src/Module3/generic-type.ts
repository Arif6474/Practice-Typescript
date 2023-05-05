// 3-3: Introduction of Generic in Type

// const rollNum1: Array<number> = [1, 2, 3, 4]
// const rollNum2: Array<string> = ['1', '2', '3', '4']
// const rollNum3: Array<boolean> = [true, false, false, true, false]

type GenericArray<T> = Array<T>

const rollNum1: GenericArray<number> = [1, 2, 3, 4]
const rollNum2: GenericArray<string> = ['1', '2', '3', '4']
const rollNum3: GenericArray<boolean> = [true, false, false, true, false]

// const nameAndRoll: Array<{ name: string, roll: number }> = [{
//     name: 'Arif',
//     roll: 3
// },
// {
//     name: 'jobair',
//     roll: 1
// }
// ]


type NameRollType = { name: string, roll: number }

const nameAndRoll: GenericArray<NameRollType> = [{
    name: 'Arif',
    roll: 3
},
{
    name: 'jobair',
    roll: 1
}
]

type GenericTuple<X, Y> = [X, Y]
interface EmployeesType {
    name: string,
    salary: number
}

const Employees: GenericTuple<EmployeesType, string> = [{
    name: 'Arif',
    salary: 30000
},
    '5 years experience'
]