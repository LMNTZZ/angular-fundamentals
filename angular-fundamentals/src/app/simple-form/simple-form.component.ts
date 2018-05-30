import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{ message }}
      <input #myInput type="text">
      <button (click)="onClick( myInput.value )">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  constructor() { }

  onClick( value ) {
    console.log( value );
  }

  ngOnInit() {
  }

}
