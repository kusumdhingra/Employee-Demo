import {Component, Input, OnInit} from '@angular/core';
import { EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private router: Router
    ){}
 ngOnInit(){
   this.employees=[{
    "id": "001",
   "firstName": "Eurasian Collared-Dove",
    "lastName": "Dove",
    "email": "Streptopelia@gmail.com"
},
{
    "id": "002",
    "firstName": "Bald Eagle",
    "lastName": "Hawk",
    "email": "Haliaeetusleucocephalus@gmail.com" 
},
{
    "id": "003",
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
      /*for(let i=0;i<this.employess.length;i++){
        if(this.employess[i].id==id){
          var removedObject = this.employess.splice(i,1);
          removedObject = null;
          break;
        }
      }*/alert(id);
       console.log(this.employees);
      var ind = this.employees.indexOf(function(element){
      return element.id===id;
    })
    
    this.employees.splice(ind, 1);
   
   this.reloadData();
      this.employeeService.deleteEmployee(id).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error))
  }
  employeeDetails(id:number){alert(id);
    this.router.navigate(['details']);console.log("hello");
  }

}