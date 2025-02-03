import { Component,EventEmitter,Input,Output } from '@angular/core';

import { type Task } from './tasks.model';
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) task!: Task;
  @Output()complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
