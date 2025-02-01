import { Component,Input,computed,input, Output, EventEmitter,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

// type User = {
//   id:string;
//   avatar:string;
//   name: string;
// }

interface User{
  id:string;
  avatar:string;
  name: string;

}
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

  //signal input
  // avatar = input<string>(); //here we can provide initial value.
  // avatar = input.required<string>(); // here we cannot provide initial value
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users' + this.avatar();
  // })

  //component input decorator
  // @Input({required:true}) id!:string; 
  // @Input({required: true}) avatar!:string;  // ! it tells typescript that it will definitely set some value as typescript will not able to find.
  // @Input({required:true}) name!:string;  // required part tell that value must be set in html component.

  //simplify all above input to single object
  @Input({required:true}) user!: User;

  // get imagePath(){
  //   return 'assets/users/'+this.avatar; // it will not work in signal
  // }
  get imagePath(){
      return 'assets/users/'+this.user.avatar; // it will not work in signal
    }

  //when using object

  //custom event
  @Output() select = new EventEmitter<string>(); //this even emitter will allow us to emit custom value through the select property through any part of interest
  // select = output<string>(); //work same as output decorator but not create signal
  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
