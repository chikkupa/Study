import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './sever/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warningAlert/warningAlert.component';
import { SuccessAlert } from './successAlert/successAlert.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningComponent, SuccessAlert],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
