import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';

@NgModule({
  declarations: [AppComponent, ListAutoTeileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // --> import HttpClientModule einmal importieren im AppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
