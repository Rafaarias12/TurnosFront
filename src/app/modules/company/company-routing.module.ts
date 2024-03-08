import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared/shared.component';

const router: Routes = [
  {path: '', 
    children:[
      {path: 'shared', component: SharedComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class CompanyRoutingModule { }
