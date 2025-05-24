export const promisify = (func) => {
    return new Promise((res, rej) => {
        return res(func)
    })
}