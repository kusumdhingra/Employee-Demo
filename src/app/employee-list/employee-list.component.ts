import {Component, Input, OnInit} from '@angular/core';
import { EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';

@Component({
    selector:'app-employee-list',
    templateUrl:'./employee-list.component.html',
    styleUrls:['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{
  ngOnInit(){}

}