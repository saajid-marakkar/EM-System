import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EditpageComponent } from './editpage/editpage.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'empdetail/:id',component:EmployeeDetailsComponent}, 
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'editpage',component:EditpageComponent},
  {path:'editemployee/:id',component:EditemployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
