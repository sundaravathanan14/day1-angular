import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  show =false;
  items=[1,2,3,4,5,6,7,10];
  students=[{
    id:1,name:'a',class:10
  },
  {
    id:2,name:'b',class:10
  },
  {
    id:3,name:'c',class:10
  },
  {
    id:4,name:'d',class:10
  },
  {
    id:5,name:'e',class:10
  }]
  constructor(public userService:UserService,private router:Router){}
  changeName(data:string){
    this.userService.setName(data);
  }
  navigate(){
   console.log(this.router.url);
    this.router.navigate(['/signup']);
  }
  //
}
