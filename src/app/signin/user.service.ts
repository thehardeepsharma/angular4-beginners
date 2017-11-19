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
	
	/*userList() {
		this.apiurl = 'http://localhost:3000/users';
		private headers = new Headers({ 'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjEsImV4cCI6MTUwOTU0MTgwMzc5NX0.hskXJ1EjqMeIu29i0cS-FPfsAHom-swOvC8-MG5BCew' });
		private options = new RequestOptions({ headers: this.headers });	
		return this.http.post(this.apiurl, formdata, this.options).map(
			(response) => response.json()
		);
	}*/

}
