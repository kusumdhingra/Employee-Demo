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
  employee:Employe=new Employee();
  submitted:false;
  constructor(private employeeService:EmployeeService){};
  ngOnInit(){


  }
   newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  onsubmit(){
    this.submitted=true;
    this.save();
  }

  save(){
    this.employee.id=4;
      this.employeeService.createEmployee(this.employee);//.subscribe(data=>{console.log(data);},error=>{console.log() })    
  }
}