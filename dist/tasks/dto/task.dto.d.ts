import { TaskStatus } from "../tasks.entity";
export declare class CreateTaskDto {
    title: string;
    description: string;
}
export declare class updateTaskDto {
    title?: string;
    description?: string;
    status?: TaskStatus;
}
