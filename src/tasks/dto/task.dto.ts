import { TaskStatus } from "../tasks.entity";
import { IsNotEmpty, IsOptional, IsString, MinLength, IsEnum } from 'class-validator';

// Purpose: DTO for creating a new task.
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;
    
    @IsString()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus
 }