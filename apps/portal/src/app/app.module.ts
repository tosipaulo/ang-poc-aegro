import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { InputModule } from '@aegro/ui';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
