// 3-4: Generic in Interface

interface CrushInterface<T> {
    name: string;
    husband: T;
}

const crush4: CrushInterface<boolean> = {
    name: 'Jerry',
    husband: true
}

const crush5: CrushInterface<string> = {
    name: 'Alex',
    husband: 'Devid'
}
interface CrushHusbandInterface {
    name: string;
    salary: number;
}
const crush6: CrushInterface<CrushHusbandInterface> = {
    name: 'Monisha',
    husband: {
        name: 'Foyes',
        salary: 10000

    }
}


interface EmployeesInterface<T, U = null, X = undefined> {
    name: string;
    age: T;
    company?: U;
    designation?: X;
}
interface CompanyInterface  {
    name: string;
    salary: number;
}
const employee1: EmployeesInterface<number, CompanyInterface , string> = {
    name: 'raihan',
    age: 30,
    company: {
        name: 'antopolis',
        salary: 40000
    },
    designation: 'frontend developer'

}