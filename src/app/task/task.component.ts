import { Component , Input } from "@angular/core"
import { RequiredValidator } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [TasksComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })

export class TaskComponent{
    @Input() name?: string;
}