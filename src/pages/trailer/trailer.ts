import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})

export class TrailerPage {
  	@Input() youtube_url;
  	@Input() poster_path;

	constructor() {}
}
