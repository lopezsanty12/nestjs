import { TasksService } from './tasks.service';
import { CreateTaskDto, updateTaskDto } from './dto/task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./tasks.entity").Task[];
    createTask(newTask: CreateTaskDto): import("./tasks.entity").Task;
    deleteTask(id: string): void;
    updateTask(id: string, updatedFields: updateTaskDto): import("./tasks.entity").Task;
}
