import { Component } from '@angular/core';
import {MailService} from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
    <ul>
      <app-simple-form 
        *ngFor="let message of mail.messages" 
        [message]=message>
      </app-simple-form>
    </ul>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your new Angular project';

  constructor( public mail:MailService ) {}
}
