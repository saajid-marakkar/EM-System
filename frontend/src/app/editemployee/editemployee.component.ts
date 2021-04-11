import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
  providers: [EmployeeService]
})
export class EditemployeeComponent implements OnInit {
  paramQuery = '';
  constructor(public employeeService: EmployeeService,
    public router: Router, public activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(data => {
        this.paramQuery = data.id;
      })
     }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  resetForm(form?: NgForm) {
    this.employeeService.getEmployee(this.paramQuery).subscribe((res) => {
      console.log("result",res.name)
      if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: res._id,
      name: res.name,
      position: res.position,
      office: res.office,
      salary: res.salary
    }
      
    }); 
    
  }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        this.router.navigateByUrl('/home'); 
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        this.router.navigateByUrl('/home');
      });
    }
  }
}
