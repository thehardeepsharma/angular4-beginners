import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private newService:ArticleService) { }

  ngOnInit() {
  	console.log(this.newService.success());  
  	this.newService.obj.author = 'Hardeep';
  	console.log(this.newService.obj);
  }

}
