import {Component} from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: [ './greeter.component.css' ]
})
export class GreeterComponent{
  greetMessage : string = '[Dummy greet messgae]';

  greet(userName : string){
   // let userName = prompt('Enter the username');
    this.greetMessage = `Hi ${userName}, Have a great day`;
  }


}
