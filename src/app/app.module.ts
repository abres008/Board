import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { PieceComponent } from './piece/piece.component';
import { Piece2Component } from './piece2/piece2.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    PieceComponent,
    Piece2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
