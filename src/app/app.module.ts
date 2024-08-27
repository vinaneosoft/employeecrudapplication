import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component' // u can rename files
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DatePipe } from '@angular/common';
import { CustomcurrencyPipe } from './custompipes/customcurrency.pipe';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebwerksComponent } from './webwerks/webwerks.component';


// decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    NeoEmployeeComponent,
    EmployeeCardComponent,
    CustomcurrencyPipe,
    OrderbyPipe,
    EmployeeFormComponent,
    HomeComponent,
    ViewNotFoundComponent,
    AdminLoginComponent,
    NeosoftComponent,
    WebwerksComponent
  ],
  imports: [
    BrowserModule,     // modules
    AppRouteModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DatePipe],     // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
