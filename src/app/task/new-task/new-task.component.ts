import { Component, EventEmitter,Input,Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type  NewTaskData } from '../tasks/tasks.model';
import { TaskService } from '../task.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService)

  onClickClose(){
    this.close.emit();
  }

  //when not using service
  // onSubmit(){
  //   this.add.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate
  //   });
  // }

  //when using service
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId);
    this.close.emit();
  }
}
