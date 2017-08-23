import { Injectable } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'

@Injectable()
export class HelperService {
	constructor(private sanitizer: DomSanitizer) {}

	// A function that gets an array of videos, fethes the first YouTube video it finds and returns the url of that video. If no YouTube
	// video is found, or the video array is empty it returns null. This function is used by both the movie-details and tvshow-details module.
  	buildYoutubeUrl(videos): SafeResourceUrl {
	    if (videos) {
			for (let video of videos) {
				if (video.site == "YouTube") {
					return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}?rel=0&amp;controls=0&amp;showinfo=0`)
				}
			}
	    }
		return null
  	}
}