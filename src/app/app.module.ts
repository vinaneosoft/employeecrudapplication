import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component' // u can rename files
// decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent   // components, pipes
  ],
  imports: [
    BrowserModule,     // modules
    AppRouteModule
  ],
  providers: [],     // services
  bootstrap: [AppComponent]  // root component
})
export class AppModule { }
