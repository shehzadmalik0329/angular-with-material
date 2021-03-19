import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollectionsComponent } from './collections/collections.component';
import { MarketsComponent } from './markets/markets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionsComponent,
    MarketsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
