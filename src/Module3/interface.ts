// 3-2: Interface, Type vs Interface

type User ={
    name: string;
    age: number;
}
interface IUser {
    name: string;
    age: number;
}
interface IExtendedUser extends IUser {
    experience: number

}
const userWithTypeAlias : User = {
    name: "Type Alias",
    age: 25
}
const userWithTypeInterface : IUser = {
    name: "Type Interface",
    age: 26
}

const userWithInterfaceExtended : IExtendedUser = {
    name: "Interface Extended",
    age: 28,
    experience: 2
}