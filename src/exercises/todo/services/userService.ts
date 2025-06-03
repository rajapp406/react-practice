import { Users } from "../../users/models/users";
import { v4 as uuidv4 } from 'uuid';

export function userService(): {
    findUserById,
    findUsers,
    registerUser,
    updateUser,
    findUser
}{
    const findUsers = (): Users[] => {
        return JSON.parse(localStorage.getItem('users') || '[]') as Users[]
    }

    const findUserById = (id: string): Users[] => {
        const data = findUsers();
        return data.filter(item => item.id === id);
    }
    const findUser= ({username, password}: {username: string, password: string}): Users[] => {
        const data = findUsers();
        return data.filter(item => item.username === username && item.password === password);
    }
    const registerUser = (item: Users) => {
        const data = findUsers();
        const dat = [...data, { ...item, status: 'active', id: uuidv4() }];
        localStorage.setItem('users', JSON.stringify(dat));
    }
    const updateUser = (item: Users) => {
        const data = findUsers();
        let element = data.map(e => {
            if(e.id === item.id){
                return {...e, ...item}
            }
            return e;
        });
        console.log(element, 'elelem')
        localStorage.setItem('users', JSON.stringify(element));
    }
    return {
        findUserById,
        findUsers,
        registerUser,
        updateUser,
        findUser
    }
}