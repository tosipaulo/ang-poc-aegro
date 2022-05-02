import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FarmModule } from './pages/farm/farm.module';
import { BannerModule, HeaderModule, InputModule } from '@aegro/ui';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    FarmModule,
    InputModule, 
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    BannerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
