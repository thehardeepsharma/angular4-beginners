import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookapp',
  templateUrl: './bookapp.component.html',
  styleUrls: ['./bookapp.component.css']
})
export class BookappComponent implements OnInit {

  	constructor() { }

	items = ['Angular 4','React','Underscore'];
	newItem = '';
  	
	ngOnInit() {
  	}

	pushItem = function() {
		if(this.newItem != '') {
			this.items.push(this.newItem);
			this.newItem = '';
		}
	}
	removeItem = function(index) {
		this.items.splice(index,1);
	}

}
