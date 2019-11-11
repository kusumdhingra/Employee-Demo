
import {Employee} from '../employee';
import {EmployeeServie} from '../employee.service';
import {Component, Input, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

//import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector:'app-employee-details',
  templateUrl:'./employee-details.component.html',
  styleUrls:['./employee-details.component.css']
})


export class EmployeeDetailsComponent implements OnInit{
 // employee:Employee;
  id: number;

  construct(private router: Router,private route: ActivatedRoute,private employeeservice:EmployeeService){}
  ngOnInit(){console.log(1);
    this.id= this.route.snapshot.params['id'];
    
    console.log(this.id);
  }
}