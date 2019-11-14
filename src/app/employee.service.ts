import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class EmployeeService{
  private baseUrl = '';
  constructor(private http: HttpClient){};
employees=[{
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

  getEmployee(id:number){
    //return this.http.get(`${this.baseUrl}/${id}`);
    return this.employees.filter(employee=>{ if(employee.id==id) return employee;})
  }
  createEmployee(employee)
  {
    console.log(employee);
     this.employees.push(employee);console.log(this.employees);
     //this.employees.push(employee);console.log();
     return this.http.post(`${this.baseUrl}`,employee);
  }
  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}`,value)
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getEmployeeList():Observable<Object>{
    return this.http.get(`${this.baseUrl}`);
  }

}