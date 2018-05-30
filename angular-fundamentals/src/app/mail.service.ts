import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    `You're now friends with John`,
    `John liked your tweet`,
    `You'll never believe what John said...`,
    `You've got mail`,
  ];

  constructor() { }
}
