import {Component, Input, OnInit} from '@angular/core';
import { EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Observable} from 'rxjs';
@Component({
    selector:'app-employee-list',
    templateUrl:'./employee-list.component.html',
    styleUrls:['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{
  employees:Observable<Employee>;
  constructor(private employeeService:EmployeeService, private router)
  {
    
  }
  ngOnInit(){this.reloadData();}

  reloadData(){
    this.employees={};/**[{
    "ID": "001",
   "Name": "Eurasian Collared-Dove",
    "Type": "Dove",
    "Scientific Name": "Streptopelia"
},
{
    "ID": "002",
    "Name": "Bald Eagle",
    "Type": "Hawk",
    "Scientific Name": "Haliaeetus leucocephalus" 
},
{
    "ID": "003",
    "Name": "Cooper's Hawk",
    "Type": "Hawk",
    "Scientific Name": "Accipiter cooperii" 
}];*/
   // this.employeeService.getEmployeeList();
  }

}