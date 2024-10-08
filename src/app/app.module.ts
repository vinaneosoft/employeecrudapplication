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
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CustomcurrencyPipe } from './custompipes/customcurrency.pipe';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebwerksComponent } from './webwerks/webwerks.component';
import {provideHttpClient } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { IncrementComponent } from './storeexample/increment/increment.component';
import { DecrementComponent } from './storeexample/decrement/decrement.component';
import { ResetComponent } from './storeexample/reset/reset.component';
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
    WebwerksComponent,
    FileUploadComponent,
    MyCounterComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule, MatSlideToggleModule, MatButtonModule,MatTooltipModule, MatIconModule,
    AppRouteModule, FormsModule, ReactiveFormsModule,RxReactiveFormsModule, MatInputModule, 
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [DatePipe, provideHttpClient(), provideAnimationsAsync()],     // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }

//<mat-icon>edit</mat-icon>