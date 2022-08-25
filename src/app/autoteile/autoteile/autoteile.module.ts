import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAutoTeileComponentComponent } from './components/add-auto-teile-component/add-auto-teile-component.component';
import { AutoTeileDetailAnsichtComponent } from './components/auto-teile-detail-ansicht/auto-teile-detail-ansicht.component';
import { AutoTeileDetailEditComponent } from './components/auto-teile-detail-edit/auto-teile-detail-edit.component';
import { HomeComponent } from '../../home/home.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import * as fromEffects from './store/effects/index';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AutoTeileRoutingModule } from './autoteile-routing.module';

@NgModule({
  declarations: [
    ListAutoTeileComponent,
    AutoTeileDetailAnsichtComponent,
    AddAutoTeileComponentComponent,
    HomeComponent,
    AutoTeileDetailEditComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature(fromEffects.effects),
    StoreModule.forFeature('carinventory', reducers),
    FormsModule,
    AutoTeileRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
})
export class AutoteileModule {}
