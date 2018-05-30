import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{ message }}
      <input #myInput type="text" 
             [(ngModel)]="message"> 
      <!-- Don't forget to import FormsModule to use two-way binding in forms --> 
      
      <button (click)="onClick( myInput.value )">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  constructor() {
    setInterval( () => this.message = Math.random().toString(), 1000);
  }

  onClick( value ) {
    console.log( value );
  }

  ngOnInit() {
  }

}
