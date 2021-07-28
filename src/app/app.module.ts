import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableroModule} from './tablero/tablero.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
