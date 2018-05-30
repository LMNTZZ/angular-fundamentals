import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    {id: 0, text: `You're now friends with John`},
    {id: 1, text: `John liked your tweet`},
    {id: 2, text: `You'll never believe what John said...`},
    {id: 3, text: `You've got mail`},
  ];

  update(id, text) {
    this.messages = this.messages.map( m => m.id === id ? {id,text} : m );
  }

  constructor() { }
}
