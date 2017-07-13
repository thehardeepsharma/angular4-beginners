import { Component, OnInit } from '@angular/core';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  	constructor(private heroService: HeroService) { }
	
	heroes;
	selectedHero; 
	
	ngOnInit() {
  	  	this.heroes = this.heroService.heroes;	  
  	}
  
  	onSelect(hero) {
    	this.selectedHero = hero;
  	}

}
