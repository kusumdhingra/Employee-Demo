import { EmployeeListComponent } from './employee-list/employee-list.component'; 
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
//import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes =[
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:EmployeeListComponent}, 
 {path:'details/:id',component:EmployeeDetailsComponent},
 {path:'add',component:CreateEmployeeComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}