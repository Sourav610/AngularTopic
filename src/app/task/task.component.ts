import { Component , Input } from "@angular/core"
import { RequiredValidator } from "@angular/forms";

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })

export class TaskComponent{
    @Input() name?: string;
}