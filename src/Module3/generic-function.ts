// 3-5: Generic in Function

const createArray = (params : string) : string[]=>{
  return [params]
}
const createArray2 = <X, Y> (params : X, params2 : Y) : [X, Y]=>{
  return [params , params2]
}

const result = createArray('Arif Islam')

const result2 = createArray2<string, boolean>('Arif Islam', true)
interface personInterface {
    age: number;
    salary: number;
}
// const result3 = createArray2<string, personInterface>('Arif Islam', {
//     age: 25,
//     salary:25000
// })

// console.log(result3);
