import { Injectable } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'

@Injectable()
export class HelperService {
	constructor(private sanitizer: DomSanitizer) {}

  	buildYoutubeUrl(videos): SafeResourceUrl {
	    if (videos) {
			for (let video of videos) {
				if (video.site == "YouTube") {
					return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?rel=0&amp;controls=0&amp;showinfo=0")
				}
			}
	    }
		return null
  	}
}