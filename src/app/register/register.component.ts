import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  @Input() toChild :string='';
  @Output() menu = new EventEmitter<string>();

  changeMenu(){
    this.menu.emit('idly');
  }

}
