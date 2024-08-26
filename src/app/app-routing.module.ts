import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebwerksComponent } from './webwerks/webwerks.component';


const routes: Routes = [
  {
    path:"",
    redirectTo: "home",
    pathMatch:"full", 
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"neosoft",
        component:NeosoftComponent
      },
      {
        path:"webwerks",
        component:WebwerksComponent
      }
    ]
  },
  {
    path:"employees",
    component:NeoEmployeeComponent
  },
  {
    path:"addemployee",
    component:EmployeeFormComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:'**',
    component:ViewNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
