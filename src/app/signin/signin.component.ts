import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm;
  constructor(private http: Http) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('admin', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('demo1234', [Validators.required, Validators.maxLength(10)])
    })
  }
  apiurl;
  headers;
  options;
  post;
  onSubmit(formdata) {
    console.log(formdata);
    this.apiurl = 'http://localhost:3000/authenticate';
    //this.headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    //this.options = new RequestOptions({ headers: this.headers });
    //this.post = { username: 'admin', password: 'demo1234' }

    this.http.post(this.apiurl, formdata).subscribe();  

    // this.http.post(this.apiurl, formdata, this.options)
    //   .map(this.extractData)
    //   .catch(this.handleErrorObservable);
  }

private extractData(res: Response) {
    let body = res.json();
    console.error(body);
    return body.data || {};
  }
private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }	

}