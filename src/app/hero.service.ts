import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  heroes = [
		{ id: 11, name: 'Mr. Nice' },
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' },
		{ id: 16, name: 'RubberMan' },
		{ id: 17, name: 'Dynama' },
		{ id: 18, name: 'Dr IQ' },
		{ id: 19, name: 'Magma' },
		{ id: 20, name: 'Tornado' }
	];
	
	constructor(private http: Http) { }
  
	/*getHeroes() {
		let promise = new Promise((resolve, reject) => {
	   let apiURL = 'http://localhost:4200/assets/data/heroes.json';
	   this.http.get(apiURL)
	      .toPromise()
	      .then(
	        res => { // Success
	        		this.results = res.json().results;
	          	resolve();
	        }
	      );
	  	});
	  	return promise;
	}*/
	
	getHeroes() {
		return this.heroes;
	}

}