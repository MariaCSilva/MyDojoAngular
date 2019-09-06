import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
