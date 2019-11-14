import { Component, Input,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector:'app-create-employee',
  templateUrl:'./create-employee.component.html',
  styleUrls:['./create-employee.component.css']

})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee = new Employee();
  submitted:false;
  constructor(){};
  ngOnInit(){this.submitted:false;};
}