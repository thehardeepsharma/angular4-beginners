import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  	selector: 'app-animation',
  	templateUrl: './animation.component.html',
	styleUrls: ['./animation.component.css'],
	animations: [
		trigger('myAnimation',[
			state('smaller', style({
				transform: 'scale(1)'
			})),
			state('larger', style({
				transform: 'scale(3)'
			})),
			transition('smaller <=> larger', animate('300ms ease-in'))
		])
	]	
})
export class AnimationComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

	state: string = 'smaller'
	animate() {
		this.state = this.state == 'larger' ? 'smaller' : 'larger'
	}

}
