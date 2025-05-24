export interface TaskData {
    task: string;
    status: string;
    id: string;
    selected:boolean
}

export enum TaskFilters {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
    Deleted = 'deleted'

}