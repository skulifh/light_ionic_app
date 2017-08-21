import { Component, EventEmitter, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieDetailsPage } from "../movie-details/movie-details";

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})

export class TrailerPage implements OnInit {
	ngOnInit(): void {
  	}

  	@Input() youtube_url;
  	@Input() poster_path;

	constructor() {
	}

}
