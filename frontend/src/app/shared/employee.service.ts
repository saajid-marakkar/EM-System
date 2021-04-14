import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Employee } from './employee.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  employeeDetail: Employee[];
  message:string
  testData:string
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }
  setTestData(data){
    this.testData=data
  }
  getTestData(){
    return this.testData
  }
 
  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployee(_id: string): Observable<any> {
    console.log("from get employee function",this.http.get(this.baseURL  + `/${_id}`))
    return this.http.get(this.baseURL  + `/${_id}`);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    console.log("on deleteemployee method")
    console.log("id from service",_id)
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
