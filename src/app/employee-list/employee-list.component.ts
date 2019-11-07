import {Component, Input, OnInit} from '@angular/core';
//import { EmployeeDetailsComponent} from '../employee-details/employee-details.component';
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
  constructor(private employeeService:EmployeeService, private router:Router){}
 ngOnInit(){
   this.employees=[{
    "ID": "001",
   "firstName": "Eurasian Collared-Dove",
    "lastName": "Dove",
    "email": "Streptopelia@gmail.com"
},
{
    "ID": "002",
    "firstName": "Bald Eagle",
    "lastName": "Hawk",
    "email": "Haliaeetusleucocephalus@gmail.com" 
},
{
    "ID": "003",
    "firstName": "Cooper's Hawk",
    "lastName": "Hawk",
    "email": "Accipitercooperii@gmail.com" 
}];
   this.reloadData();
  }

 reloadData(){
   
   // this.employeeService.getEmployeeList();
  }

  deleteEmployee(id:number){
      for(i=0;i<this.employess.length;i++){
        if(this.employess[i].id==id){
          var removedObject = this.employess.splice(i,1);
          removedObject = null;
          break;
        }
      }
      this.employeeService.deleteEmployee(id).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error))
  }

}