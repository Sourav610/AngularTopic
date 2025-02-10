import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";


@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[HeaderComponent,UserComponent,TaskComponent,BrowserModule]
})
export class AppModule {}