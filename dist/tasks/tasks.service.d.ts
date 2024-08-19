import { Task } from './tasks.entity';
import { updateTaskDto } from './dto/task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    gestTaskById(id: string): Task;
    updateTask(id: string, updatedFields: updateTaskDto): Task;
}
