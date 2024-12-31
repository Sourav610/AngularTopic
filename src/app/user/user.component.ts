import { Component,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // uses for randomly selected user
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar);


  // get imagePath(){
  //   return 'assets/users/'+this.selectedUser.avatar // it will not work in signal
  // }

  get imagePath(){
    return 'assets/users/'+this.avatar // it will not work in signal
  }

  @Input() avatar!:string;  // ! it tells typescript that it will definitely set some value as typescript will not able to find.
  @Input() name!:string;

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
