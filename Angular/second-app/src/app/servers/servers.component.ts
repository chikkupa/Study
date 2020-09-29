import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverName = 'New Server';
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateNewServer() {
    this.servers.push(this.serverName);
  }
}
