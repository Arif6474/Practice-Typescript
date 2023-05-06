// 3-10: Mapped Types

type Volume ={
    height: number;
    width: number;
    depth: number;
}

type Area<T> = {
    // [Key in keyof Volume]: Volume[Key];
    [key in keyof T] : T[key]
}

const area : Area<{ height: number; width: number; depth: string}> = {
    height: 10,
    width: 10,
    depth: "10"
}
area.height =25