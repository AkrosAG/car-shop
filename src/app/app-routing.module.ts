import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAutoTeileComponentComponent } from './components/add-auto-teile-component/add-auto-teile-component.component';
import { AutoTeileDetailAnsichtComponent } from './components/auto-teile-detail-ansicht/auto-teile-detail-ansicht.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListAutoTeileComponent },
  { path: 'add', component: AddAutoTeileComponentComponent },
  {
    path: 'autoteile/:autoteileId',
    component: AutoTeileDetailAnsichtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
