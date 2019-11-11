import {Component, Input, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {EmployeeServie} from '../employee.service';
import {Employee} from '../Employee';
//import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector:'app-employee-details',
  templateUrl:'./employee-details.component.html',
  styleUrls:['./employee-details.component.css']
})


export class EmployeeDetailsComponent implements OnInit{
  employee:Employee;

  constructor(private  route:ActivatedRoute, private rouer:Router, private employeeService:EmployeeService){}
  ngOnInit(){}
}