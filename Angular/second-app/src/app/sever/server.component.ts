import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    active {
      color: 'green';
    }

    inactive {
      color: 'red;
    }
  `]
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'Active';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Active' : 'Inactive';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Active'? 'green': 'red';
  }
}
