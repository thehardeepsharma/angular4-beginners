import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	
	@ViewChild('myInputText') inputText;
	
	@Input('myValue') myValue;
	
	textvalue;
	
	constructor() { 
		setInterval( () => { this.send2Server(); }, 2000 );
	}

	ngOnInit() {
		console.log(this.myValue);
	}
	
	send2Server() {
		let data = this.inputText.nativeElement;
		console.log(data.value);
		this.textvalue = data.value;
	}
}