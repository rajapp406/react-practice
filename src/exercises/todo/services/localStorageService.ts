import { TaskData, TaskFilters } from "../model/taskData";
import { v4 as uuidv4 } from "uuid";
import { TodoService } from "../../../models/todoServiceModel";
import userService from "./userService";


class LocalStorageService implements TodoService {
    private static STORAGE_KEY = "data";

    // Helper to get all tasks from localStorage
    private static getAllTasks(): TaskData[] {
        return JSON.parse(localStorage.getItem(LocalStorageService.STORAGE_KEY) || "[]");
    }

    // Helper to save tasks to localStorage
    private static saveTasks(data: TaskData[]): void {
        localStorage.setItem(LocalStorageService.STORAGE_KEY, JSON.stringify(data));
    }

    // Save a new task
    public saveItem(item: TaskData): void {
        const tasks = LocalStorageService.getAllTasks();
        const newTask = { ...item, status: TaskFilters.Active, id: uuidv4() };
        LocalStorageService.saveTasks([...tasks, newTask]);
    }

    // Update an existing task
    public updateItem(item: TaskData, id: string): void {
        const tasks = LocalStorageService.getAllTasks();
        const updatedTasks = tasks.map(task => (task.id === id ? { ...item, id } : task));
        LocalStorageService.saveTasks(updatedTasks);
    }

    // Mark tasks as deleted
    public deleteItems(ids: string[]): void {
        const tasks = LocalStorageService.getAllTasks();
        const updatedTasks = tasks.map(task =>
            ids.includes(task.id) ? { ...task, status: TaskFilters.Deleted } : task
        );
        LocalStorageService.saveTasks(updatedTasks);
    }

    // Mark tasks as completed
    public completeItems(ids: string[]): void {
        const tasks = LocalStorageService.getAllTasks();
        const updatedTasks = tasks.map(task =>
            ids.includes(task.id) ? { ...task, status: TaskFilters.Completed } : task
        );
        LocalStorageService.saveTasks(updatedTasks);
    }

    // Find a task by ID
    public findItemById(id: string): TaskData | undefined {
        const tasks = LocalStorageService.getAllTasks();
        return tasks.find(task => task.id === id);
    }

    // Find tasks by status
    public findItemByStatus(status: string): TaskData[] {
        const tasks = LocalStorageService.getAllTasks();
        return status === TaskFilters.All ? tasks : tasks.filter(task => task.status === status);
    }

    // Find tasks by task name
    public findItemsByTask(task: string): TaskData[] {
        const tasks = LocalStorageService.getAllTasks();
        return task === TaskFilters.All
            ? tasks
            : tasks.filter(t => t.task && t.task.includes(task));
    }

    // Find all tasks
    public findAll(): TaskData[] {
        return LocalStorageService.getAllTasks();
    }

    // Find active tasks
    public findActiveItems(): TaskData[] {
        return this.findItemByStatus(TaskFilters.Active);
    }

    // Find deleted tasks
    public findDeletedItems(): TaskData[] {
        return this.findItemByStatus(TaskFilters.Deleted);
    }

    // Find completed tasks
    public findCompletedItems(): TaskData[] {
        return this.findItemByStatus(TaskFilters.Completed);
    }
}

// Export an instance of the service
const localStorageService = new LocalStorageService();
export default localStorageService;