import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';
import { AutoTeileDetailAnsichtComponent } from './components/auto-teile-detail-ansicht/auto-teile-detail-ansicht.component';
import { AddAutoTeileComponentComponent } from './components/add-auto-teile-component/add-auto-teile-component.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoTeileDetailEditComponent } from './components/auto-teile-detail-edit/auto-teile-detail-edit.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

import * as fromEffects from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    ListAutoTeileComponent,
    AutoTeileDetailAnsichtComponent,
    AddAutoTeileComponentComponent,
    HomeComponent,
    AutoTeileDetailEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
