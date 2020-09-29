import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'second-app';
  name = 'Chikku P A';
  serverName = '';
  isButtonActive = false;
  notificationMessage = '';
  username = '';
  secretPassword = 'tuna';
  logs = [];

  constructor() {
    setTimeout(() => {
      this.isButtonActive = true;
    }, 3000);
  }

  onButtonClick() {
    this.notificationMessage = 'Button clicked!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUsername() {
    this.username = '';
  }

  displayDetails() {
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
    this.toggleSecretPassword();
  }

  toggleSecretPassword() {
    this.secretPassword = this.secretPassword === 'tuna' ? 'laura' : 'tuna';
  }
}
