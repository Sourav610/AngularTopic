import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type  NewTaskData } from '../tasks/tasks.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onClickClose(){
    this.close.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
