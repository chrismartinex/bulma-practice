import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component'



@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
