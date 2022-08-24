import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';
import { AutoTeileDetailAnsichtComponent } from './components/auto-teile-detail-ansicht/auto-teile-detail-ansicht.component';
import { AddAutoTeileComponentComponent } from './components/add-auto-teile-component/add-auto-teile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAutoTeileComponent,
    AutoTeileDetailAnsichtComponent,
    AddAutoTeileComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
