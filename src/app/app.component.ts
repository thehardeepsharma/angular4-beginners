import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  	constructor(private newService: ArticleService) { }

  	title = 'app';
	
	ngOnInit() {
		console.log(this.newService.fetchArticle());
	}
}
