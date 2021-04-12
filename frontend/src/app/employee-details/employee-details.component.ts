import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [EmployeeService]
})


export class EmployeeDetailsComponent implements OnInit {
  employeeData: Employee;
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.refreshEmployeeList();
  }
 
  refreshEmployeeList() {
    // this.employeeService.getEmployeeList().subscribe((res) => {
    //   this.employeeService.employees = res as Employee[];
    //   console.log("console from employee detail",this.employeeService.selectedEmployee);
    //   console.log("console from employee detail",this.employeeService.employees);
      
    // });
    console.log("console from employee detail",this.employeeService.employees);
  }

}
