import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  x:any
  constructor(public router: Router, public route: ActivatedRoute) { }
  sendnewdata(val:any){
    this.x=val
  }
  ngOnInit(): void {
    
  }
  login(){
    alert("login successful")
    this.router.navigateByUrl('/home');
  }

}