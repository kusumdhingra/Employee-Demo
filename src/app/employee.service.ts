import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class EmployeeService{
  private baseUrl = '';
  constructor(private http: HttpClient){};

  getEmployee(id:number){
    return this.http.get(`${this.baseUrl}/${id}`);
  };
  createEmployee(employee)
  {
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