import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

//import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
///import {UpdateEmployeeComponent} from './update-employee/update-employee.component'; 
//import {EmployeeDetailsComponent} from './employee-details/employee-details.component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
