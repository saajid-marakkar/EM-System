import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]

})
export class HomeComponent implements OnInit {
  employeeData: Employee;
  data = "testing setTestdata"
  
  constructor(public employeeService: EmployeeService,
    public router: Router, public route: ActivatedRoute) {}
    message="testing from home"
  ngOnInit() {
    this.refreshEmployeeList();
    this.employeeService.setTestData(this.data)
  }
 
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
      console.log("console from home",this.employeeService.selectedEmployee);
    });
  }

  viewEmployee(_id: string){
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
    // console.log(emp);
    // this.employeeService.selectedEmployee = emp;
    // console.log("console of emp",this.employeeService.selectedEmployee);
    // console.log("console of emp",this.employeeService.employees);
    let id = _id
    console.log(_id);
    console.log(typeof(_id));
    this.router.navigate(['/empdetail' , id])
  }
  onEdit(emp: Employee) {
    console.log(emp)
    
    this.employeeService.selectedEmployee = emp;
    console.log(this.employeeService.selectedEmployee);
    this.router.navigateByUrl('/addemployee'); 
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });;
      });
    }
  }
  addEmployee()
  {
    console.log("console of emp",this.employeeService.selectedEmployee);
    console.log("console of emp",this.employeeService.employees);
    this.router.navigateByUrl('/addemployee');
  }
}
