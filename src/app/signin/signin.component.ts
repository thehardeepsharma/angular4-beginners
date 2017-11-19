import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {

  signinForm;
  constructor(private http: Http, private userService: UserService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('admin', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('demo1234', [Validators.required, Validators.maxLength(10)])
    })
  }
  apiurl;
  headers;
  options;

  onSubmit(formdata) {
    console.log(formdata);

    this.userService.login(formdata).subscribe(
      res => {
        console.log(res)
      }
    );

  }
  
  getUserList() {
	  //this.userService.userList();	  
  }

}