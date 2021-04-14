import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [EmployeeService]
})


export class EmployeeDetailsComponent implements OnInit {
  employeeData: Employee;
  logindata:string;
  message:string;
  data:string
  id:string
  name:string
  position:string
  office:string
  salary:number

  paramQuery = '';
  constructor(public employeeService: EmployeeService,
    public router: Router, public activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe(data => {
        this.paramQuery = data.id;
      })
    }
  ngOnInit() {
    this.employeeService.currentMessage.subscribe(message => this.message = message)
    this.newMessage()
    this.refreshEmployeeList()
    this.employeeService.changeMessage("testing service")
    this.data = this.employeeService.getTestData()
    console.log("result 3",this.name)
    console.log("console from employee detail",this.employeeData);
  }
 
  refreshEmployeeList() {
    this.employeeService.getEmployee(this.paramQuery).subscribe((res) => {
      console.log("result",res.name)
      
      this.id = res._id
      this.name = res.name
      this.position = res.position
      this.office = res.office
      this.salary = res.salary
      console.log("result 2",this.employeeData)
    }); 
    
    console.log("console from employee detail",this.employeeData);
  }
  newMessage(){
    this.employeeService.changeMessage("testing service");
    
  }

}
