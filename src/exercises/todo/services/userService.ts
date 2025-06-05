
import { Users } from "../../../models/users";
import { IUserService } from "../../../models/userServiceModel";
import { v4 as uuidv4 } from "uuid";
import localStorageService from "./localStorageService";

export class UserService implements IUserService {
    private static STORAGE_KEY = "users";

    // Helper to get all users from localStorage
    private getAllUsers(): Users[] {
        return JSON.parse(localStorage.getItem(UserService.STORAGE_KEY) || "[]") as Users[];
    }

    // Helper to save users to localStorage
    private saveUsers(users: Users[]): void {
        localStorage.setItem(UserService.STORAGE_KEY, JSON.stringify(users));
    }

    // Find all users
    public findUsers = (): Users[] => {
        return this.getAllUsers();
    }

    // Find a user by ID
    public findUserById = (id: string): Users | undefined => {
        const users = this.getAllUsers();
        return users.find(user => user.id === id);
    }

    // Find a user by credentials
    public findUser = ({ username, password }: { username: string; password: string }): Users | undefined  => {
        const users = this.getAllUsers();
        return users.find(user => user.username === username && user.password === password);
    }

    // Register a new user
    public registerUser = (user: Users): void => {
        const users = this.getAllUsers();
        const newUser = { ...user, status: "active", id: uuidv4() };
        this.saveUsers([...users, newUser]);
    }

    // Update an existing user
    public updateUser = (user: Users): void => {
        const users = this.getAllUsers();
        const updatedUsers = users.map(existingUser =>
            existingUser.id === user.id ? { ...existingUser, ...user } : existingUser
        );
        this.saveUsers(updatedUsers);
    }
}

// Export an instance of the service
export default new UserService();