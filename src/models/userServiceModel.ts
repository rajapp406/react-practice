import { Users } from "./users";

export interface IUserService {
    findUsers: ()=> Users[];
    findUserById(id: string): Users | undefined;
    findUser(credentials: { username: string; password: string }): Users | undefined;
    registerUser(user: Users): void;
    updateUser(user: Users): void;
}