import { Component,EventEmitter,Input,Output, inject } from '@angular/core';

import { type Task } from './tasks.model';
import { TaskService } from '../task.services';
@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) task!: Task;
  @Output()complete = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
