import {Component, Inject} from '@angular/core';
import {MailService} from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
    <ul>
      <li *ngFor="let message of mail.messages">{{ message.text }}</li>
    </ul>
      <app-simple-form 
        *ngFor="let message of mail.messages" 
        [message]=message.text
        (update)="onUpdate(message.id, $event.text)"
      >
      </app-simple-form>
  </div>`,
  styles: [`
    app-simple-form {
      margin-bottom: 10px;
  }
  `]
})
export class AppComponent {
  title = 'your new Angular project';

  constructor( public mail:MailService ) {}

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

}
