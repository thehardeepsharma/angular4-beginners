import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  	constructor(private newService: ArticleService) { }

	form;
		
  	ngOnInit() {
		console.log(this.newService.fetchArticle());
		let post = this.newService.obj;  		
  		this.form = new FormGroup({
  			author: new FormControl(post.author,Validators.required),
  			title: new FormControl('',Validators.compose([
  				Validators.required,
  				Validators.minLength(5),
  				Validators.pattern('[\\w\\-\\s\\/]+')
  			])),
  			content: new FormControl(post.content, this.textValidator)
  		});  	
  	};
  	
  	textValidator(control) {
		if(control.value.length < 10) {
			return {"content": true};		
		}
  	}
  	
  	onSubmit = function(formdata) {
  		console.log(formdata);
  	}

}
