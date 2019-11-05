import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,CreateEmployeeComponent,EmployeeListComponent, EmployeeDetailsComponent, UpdateEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
