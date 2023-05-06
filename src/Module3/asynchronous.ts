// 3-8: Asynchronous TypeScript

const makePromiseString = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched'
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}
const getPromiseString = async (): Promise<string> => {
    const data = await makePromiseString()
    return data
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}

const getPromiseBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data
}
interface IPromiseObject {
    data: string
}
const makePromiseObject = (): Promise<IPromiseObject> => {
    return new Promise<IPromiseObject>((resolve, reject) => {
        const data: IPromiseObject = {
            data: 'hello'
        }
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}

const getPromiseObject = async (): Promise<IPromiseObject> => {
    const data = await makePromiseObject()
    return data
}
interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}
const getPost = async () : Promise<IPost> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()

}

const getPostData = async () : Promise<void> => {
   const data = await getPost();
 console.log(data);
 
}
getPostData()
