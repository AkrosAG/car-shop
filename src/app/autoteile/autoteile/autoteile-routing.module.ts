import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAutoTeileComponentComponent } from './components/add-auto-teile-component/add-auto-teile-component.component';
import { AutoTeileDetailAnsichtComponent } from './components/auto-teile-detail-ansicht/auto-teile-detail-ansicht.component';
import { AutoTeileDetailEditComponent } from './components/auto-teile-detail-edit/auto-teile-detail-edit.component';
import { ListAutoTeileComponent } from './components/list-auto-teile/list-auto-teile.component';

// Use the AuthGuard in routes that should require a logged in user.
// Do NOT use it for the root route. If the user should always be logged in,
// see comment in the AppComponent constructor.

const routes: Routes = [
  { path: 'list', component: ListAutoTeileComponent },
  { path: 'add', component: AddAutoTeileComponentComponent },
  { path: 'edit/:autoteileId', component: AutoTeileDetailEditComponent },
  {
    path: 'autoteile/:autoteileId',
    component: AutoTeileDetailAnsichtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoTeileRoutingModule {}
