import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  	constructor(private http: Http) { }

	//private articleApi = "http://localhost/apis/articles.php";
	private articleApi = "http://localhost:4200/assets/data/articles.json";

	private headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    private options = new RequestOptions({ headers: this.headers });	

	fetchArticle() {
		return this.http.get(this.articleApi).map(
			(response) => response.json()
		).subscribe(
			(data) => console.log(data)	
		)
	}

	obj = {
		id: 1,
		author: 'Hardeep',
		title: 'First Article',
		content: 'This is my First Article'	
	}  
  
  	success = function() {
  		return 'Successfull';
  	}

}
