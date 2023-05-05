// 3.1: Type Assertion

let emni: any;
emni = "next level web development";

(emni as string).length

function kgToGram(params:string | number) : string | number| undefined{
    if (typeof params === "string" ) {
        const value = parseFloat(params) *1000;
        return `The converted result is ${value} gram`
    }
    if (typeof params === "number" ) {
        const value = params * 1000
        return `The converted result is ${value} gram`
    }
    
}
const resultToBeNumber = kgToGram(100) as number;

const resultToBeString =<string> kgToGram(500);
console.log(resultToBeString);