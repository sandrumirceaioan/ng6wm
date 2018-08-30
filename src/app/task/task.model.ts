export class Task {
    taskName: string;
    taskDescription: string;
    taskProject: string;
    taskProjectId: string;
    taskCompany: string;
    taskCompanyId: string;
    taskStatus: string;
    taskDifficulty: string;
    taskDeadline: Date;
    taskAssignedTo: string;
    created?: Date;
    createdBy?: string;
    modified?: Date;
    modifiedBy?: string; 
}