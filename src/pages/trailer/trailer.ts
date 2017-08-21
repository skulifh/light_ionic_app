import { Component, EventEmitter, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieDetailsPage } from "../movie-details/movie-details";

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})

export class TrailerPage implements OnInit {
	ngOnInit(): void {
		this.name = this.parnt;
  	}
  	name : any;
  	@Input() parnt;

	constructor() {
		// this.name = this.parnt;
	}

}
