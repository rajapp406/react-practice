import { TaskData, TaskFilters } from "../model/taskData"
import { v4 as uuidv4 } from 'uuid';

function LocalStorageService() {
    const saveItem = (item: TaskData) => {
        const data = findAll();
        const dat = [...data, { ...item, status: 'active', id: uuidv4() }];
        localStorage.setItem('data', JSON.stringify(dat));
    }
    const registerUser = (item: TaskData) => {
        const data = findUsers();
        const dat = [...data, { ...item, status: 'active', id: uuidv4() }];
        localStorage.setItem('users', JSON.stringify(dat));
    }
    const updateItem = (item: TaskData, id: string) => {
        const data = findAll();
        let element = data.find(item => item.id === id);
        element = { ...item, id }
        localStorage.setItem('data', JSON.stringify([...data, element]));
    }
    const deleteItems = (ids: string[]) => {
        const data = findAll();
        data.forEach(item => {
            if (ids.includes(item.id)) {
                item.status = TaskFilters.Deleted
            }
        });
        localStorage.setItem('data', JSON.stringify(data));
    }
    const completeItems = (ids: string[]) => {
        const data = findAll();
        data.forEach(item => {
            if (ids.includes(item.id)) {
                item.status = TaskFilters.Completed
            }
        });
        localStorage.setItem('data', JSON.stringify(data));
    }
    const findItemById = (id: string): TaskData[] => {
        const data = findAll();
        return data.filter(item => item.id !== id);
    }
    const findItemByStatus = (status: string): TaskData[] => {
        const data = findAll();
        if (status === TaskFilters.All) {
            return data;
        }
        console.log(data.filter(item => item.status === status), '-------')
        return data.filter(item => item.status === status);
    }
    const findItemsByTask = (task: string): TaskData[] => {
        const data = findAll();
        if (task === TaskFilters.All) return data;
        return data.filter(item => item.task && item.task.includes(task));
    }
    const findAll = () => {
        return JSON.parse(localStorage.getItem('data') || '[]') as TaskData[]
    }

    const findUsers = () => {
        return JSON.parse(localStorage.getItem('users') || '[]') as TaskData[]
    }

    const findActiveItems = (): TaskData[] => {
        const data = findAll();
        return data.filter(item => item.status === TaskFilters.Active);
    }
    const findDeletedItems = (): TaskData[] => {
        const data = findAll();
        return data.filter(item => item.status === TaskFilters.Deleted);
    }
    const findCompletedItems = (data: TaskData[]): TaskData[] => {
        return data.filter(item => item.status === TaskFilters.Completed);
    }
    return {
        saveItem,
        updateItem,
        deleteItems,
        findItemById,
        findItemByStatus,
        findItemsByTask,
        findAll,
        findCompletedItems,
        findDeletedItems,
        findActiveItems,
        completeItems,
        registerUser
    }

}

export default LocalStorageService();

