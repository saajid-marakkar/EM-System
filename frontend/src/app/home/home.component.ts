import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]

})
export class HomeComponent implements OnInit {
  employeeData: Employee;

  constructor(public employeeService: EmployeeService,
    public router: Router) 
    {

    }
  ngOnInit() {
    this.refreshEmployeeList();
  }
 
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
      console.log("console from home",this.employeeService.selectedEmployee);
    });
  }

  viewEmployee(emp: Employee){
    // this.employeeService.getEmployee(_id).subscribe((res) => {
    //   console.log(res);
    //   console.log(typeof(res));
    //   console.log(typeof(this.employeeData));
    //   var data = res;
    //   console.log(data);
    //   // this.employeeService.employeeDetail = res;
    //   this.router.navigateByUrl('/empdetail');
      
    //   // this.employeeService.employeeDetail = 
    //   // alert(typeof(res));
    // });
    console.log(emp);
    this.employeeService.selectedEmployee = emp;
    console.log("console of emp",this.employeeService.selectedEmployee);
    console.log("console of emp",this.employeeService.employees);
    this.router.navigateByUrl('/empdetail'); 
  }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
    console.log(this.employeeService.selectedEmployee);
    this.router.navigateByUrl('/addemployee'); 
  }
  addEmployee(){
    
    console.log("console of emp",this.employeeService.selectedEmployee);
    console.log("console of emp",this.employeeService.employees);
    this.router.navigateByUrl('/addemployee'); 
  }
}
