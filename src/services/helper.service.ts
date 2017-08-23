import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Video } from '../models/video';
import { Movie } from '../models/movie';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'
import * as myGlobals from '../app/globals'

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