export class Task {
    taskName: string;
    taskDescription: string;
    taskProject: string;
    taskProjectId: string;
    taskCompany: string;
    taskCompanyId: string;
    taskStatus: string;
    taskAssignedToId: string;
    taskAssignedToName: string;
    taskDifficulty: string;
    taskDeadline: Date;
    created?: Date;
    modified?: Date;
    createdById?: string;
    createdByName?: string;
    modifiedById?: string;
    modifiedByName?: string; 
}