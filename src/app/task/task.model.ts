export class Task {
    taskName: string;
    taskDescription: string;
    taskProject: string;
    taskCompany: string;
    taskStatus: string;
    taskDeadline: Date;
    taskDraft: boolean;
    created?: Date;
    createdBy?: string;
    modified?: Date;
    modifiedBy?: string; 
}