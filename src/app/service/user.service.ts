import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getName:string ='Tamilini';
  constructor() { }

  setName(name:string){
    this.getName = name;
    console.log(this.getName);
  }
}
