import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  	constructor() { }

	selectedHero;

  	ngOnInit() {
  		
  	}
  	
  	onSelect(hero) {
    	this.selectedHero = hero;
  	}

}
