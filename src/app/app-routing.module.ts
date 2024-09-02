import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebwerksComponent } from './webwerks/webwerks.component';
import { LearningComponent } from './learning/learning.component';
import { authenticationGuard } from './guards/Guards';
import { CounterService } from './customservices/counter.service';
import { UpperCasePipe } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';

const webwerksChilds:Routes=[
  {
    path:"learning",
    component:LearningComponent
  }
]
const homeChilds:Routes=[
  {
    path:"neosoft",
    component:NeosoftComponent,
    providers:[UpperCasePipe]
  },
  {
    path:"webwerks1",
    component:WebwerksComponent,
    providers:[CounterService] // counter no reset
  },
  {
    path:"webwerks2",
    component:WebwerksComponent,
  },
  {
    path:'**',
    component:ViewNotFoundComponent
  }
]
const routes: Routes = [
  {
    path:"",
    redirectTo: "home",
    pathMatch:"full", 
  },
  {
    path:"home",
    component:HomeComponent,
    children:homeChilds,
    providers:[CounterService]
  },
  {
    path:"employees",
    component:NeoEmployeeComponent
  },
  {
    path:"addemployee",
    component:EmployeeFormComponent,
  /*   canActivate:[authenticationGuard] */
  },
  {
    path:"editemployee/:empId",
    component:EmployeeFormComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:'fileupload/:_id',
    component:FileUploadComponent
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
export class AppRouteModule { 

     routeObject:Route={
      path:"abc",
      component:LearningComponent
    }
}
