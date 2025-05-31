import { TaskData } from "src/exercises/todo/model/taskData"

export const promisify = (func) => {
    return new Promise((res, rej) => {
        return res(func)
    })
}

export function intercetion<T extends {id: string}>(dataleft: T[], dataRight: T[]): T[]{
    return dataleft.filter((e) => dataRight.findIndex(v => v.id === e.id) !== -1 )
}

export function groupBy<T>(data: T[], prop: string):any{
    if(!data) return {}
    return data.reduce((cum, cur: T) => {
            cum[cur[prop]] = cum[cur[prop]] !== undefined ? cum[cur[prop]] + 1 : 1;
            return cum;
    }, {})
}
export function swapArray(a : TaskData[], b: TaskData[]){
    if(a.length > b.length){
        return {big: a, small: b}
    }
    return {big: b, small: a}
}

export function getOptionsFromEnum<T>(enumVal: any){
    return Object.keys(enumVal).map(m => {
        return {key: enumVal[m], label: m}
    });
}