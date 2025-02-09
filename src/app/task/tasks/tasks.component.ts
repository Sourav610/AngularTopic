import { Component,EventEmitter,Input,Output, inject } from '@angular/core';

import { type Task } from './tasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.services';
@Component({
  selector: 'app-tasks',
  imports: [CardComponent,DatePipe],
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
