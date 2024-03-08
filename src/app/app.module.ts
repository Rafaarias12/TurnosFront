import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyModule } from './modules/company/company.module';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule, 
        CompanyModule
    ]
})
export class AppModule { }
