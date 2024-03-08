import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: '', 
    component: DashboardComponent,
    children:[
        { path: '', component: HomeComponent,},
        { path: 'company', loadChildren: () => import("./modules/company/company.module").then(m => m.CompanyModule)},
        
    ]}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }