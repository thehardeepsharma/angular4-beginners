import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  
    private apiurl = 'http://localhost:3000/authenticate';
  
    private headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    private options = new RequestOptions({ headers: this.headers });	
  
  login(formdata) {
    //this.http.post(this.apiurl, formdata).subscribe()

    return this.http.post(this.apiurl, formdata).map(
      (response) => response.json()
    );
  }

}
