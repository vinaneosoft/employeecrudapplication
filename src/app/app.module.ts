import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component' // u can rename files
import { FormsModule } from '@angular/forms';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

// decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    NeoEmployeeComponent,
    EmployeeCardComponent   // components, pipes
  ],
  imports: [
    BrowserModule,     // modules
    AppRouteModule, FormsModule
  ],
  providers: [],     // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
