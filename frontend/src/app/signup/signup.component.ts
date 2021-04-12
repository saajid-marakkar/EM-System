import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  x:any;
  constructor() { }
  senddata(val:any){
    this.x=val
  }
  ngOnInit(): void {
  }

}