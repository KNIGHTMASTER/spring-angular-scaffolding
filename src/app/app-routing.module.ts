import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SacAddComponent } from './sac-add/sac-add.component';
import { SacEditComponent } from './sac-edit/sac-edit.component';
import { SacGetComponent } from './sac-get/sac-get.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: SacAddComponent
  },
  {
    path: 'business/edit/:personName',
    component: SacEditComponent
  },
  {
    path: 'business',
    component: SacGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
