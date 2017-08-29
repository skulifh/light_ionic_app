import { Component, Input } from '@angular/core';

// This Trailer component is used for the trailer of both the Movie component and the Tvshow component since it works the same way for both
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})

export class TrailerPage {

	// Inputs declared for this component
  	@Input() youtube_url;
  	@Input() poster_path;

	constructor() {}
}
