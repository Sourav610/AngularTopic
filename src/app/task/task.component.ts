import { Component , Input } from "@angular/core"
import { RequiredValidator } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [TasksComponent,NewTaskComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })

export class TaskComponent{
    @Input({required:true}) userId!:string;
    @Input({required:true}) name!: string; 
    isAddingTask = false;
    tasks = [
      {
        id:'t1',
        userId:'u1',
        title: 'Master Angular',
        summary: "Learn all the basic and advance features of angular and how to apply them.",
        dueDate :'2025-12-31'
      },
      {
        id:'t2',
        userId:'u3',
        title: 'Build first prototype',
        summary: "Build a first prototype of the online shop website",
        dueDate :'2024-05-31'
      },
      {
        id:'t3',
        userId:'u3',
        title: 'Prepare issue template  ',
        summary: "Prepare and describe an issue template which will help with project management",
        dueDate :'2024-09-15'
      }
    ]
    get selectedUserTasks(){
      return this.tasks.filter((task)=> task.userId === this.userId);
    }

    onCompleteTask(id:string){
      this.tasks = this.tasks.filter((task)=> task.id !== id);
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }

    onClickClose(){
      this.isAddingTask = false;
    }
}