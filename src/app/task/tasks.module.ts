import { NgModule } from "@angular/core"; 
import { TaskComponent } from "./task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TaskComponent,NewTaskComponent,TasksComponent],
    exports:[TaskComponent],
    imports:[CommonModule,FormsModule, SharedModule,]
})
export class TaskModule{}