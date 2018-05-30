import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" 
             [(ngModel)]="message"
             [ngClass]="{mousedown:isMouseDown}"
             (mousedown)="isMouseDown = true"
             (mouseup)="isMouseDown = false"
             (mouseleave)="isMouseDown = false"
      > 
      <!-- Don't forget to import FormsModule to use two-way binding in forms --> 
      
      <button (click)="update.emit({text:message})">Click me!</button>
    </div>
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }
    
    input:focus{
      font-weight: bold;
      outline: none;
    }
    
    .mousedown{
      border: 2px solid green;
    }
    
    button{
      border: none;
      padding: 4px;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();

  isMouseDown;

  constructor() {
    // setInterval( () => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
