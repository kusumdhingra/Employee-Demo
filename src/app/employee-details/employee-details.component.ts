
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

 constructo(private router: Router,private route: ActivatedRoute,private employeeservice:EmployeeService){ }
  //constructor(private route: ActivatedRoute,private router: Router, private employeeService: EmployeeService) { }
  ngOnInit(){console.log(1);
    this.id= this.route.snapshot.params['id'];
    
    console.log(this.id);
  }
}