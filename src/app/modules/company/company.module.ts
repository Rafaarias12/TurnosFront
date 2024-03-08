import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';

import { SharedComponent } from './shared/shared.component';
import { EditComponent } from './shared/edit/edit.component';
import { DeleteComponent } from './shared/delete/delete.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SharedComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ],
  exports:[
    EditComponent,
    DeleteComponent
  ]
})
export class CompanyModule { }
