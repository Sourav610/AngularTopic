import { Component , Input } from "@angular/core"
import { RequiredValidator } from "@angular/forms";
import { type NewTaskData } from "./tasks/tasks.model";
import { TaskService } from "./task.services";

@Component({
    selector: 'app-task',
    standalone: false,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })

export class TaskComponent{
    @Input({required:true}) userId!:string;
    @Input({required:true}) name!: string; 
    isAddingTask = false;
    
   
    constructor(private tasksService: TaskService ){}

    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id:string){
      
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }

    onClickClose(){
      this.isAddingTask = false;
    }

    // onAddTask(taskData: NewTaskData){
      
    //   this.isAddingTask = false;
    // }
}