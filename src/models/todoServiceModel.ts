import { TaskData } from "src/exercises/todo/model/taskData";

export interface TodoService {
    saveItem(item: TaskData): void;
    updateItem(item: TaskData, id: string): void;
    deleteItems(ids: string[]): void;
    completeItems(ids: string[]): void;
    findItemById(id: string): TaskData | undefined;
    findItemByStatus(status: string): TaskData[];
    findItemsByTask(task: string): TaskData[];
    findAll(): TaskData[];
    findActiveItems(): TaskData[];
    findDeletedItems(): TaskData[];
    findCompletedItems(): TaskData[];
}