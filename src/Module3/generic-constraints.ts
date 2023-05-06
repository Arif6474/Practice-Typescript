// 3-6: Constraints in Generics

interface IPersonsInterface {
    name: string;
    age: number
}
const createArray3 = <X, Y extends IPersonsInterface>(params: X, params2: Y): [X, Y] => {
    return [params, params2]
}

interface IPersonInterface {
    name: string
    age: number;
    salary?: number;
}
const person2: IPersonInterface = {
    name: "Arif Islam",
    age: 28,
    salary: 15000
}
const result4 = createArray3<string, IPersonInterface>('Arif Islam', person2 )

console.log(result4);
