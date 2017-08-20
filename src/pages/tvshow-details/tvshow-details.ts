import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'

import { NavController, NavParams } from 'ionic-angular';
import { TvshowService } from '../../services/tvshow.service';

@Component({
  selector: 'page-tvshow-details',
  templateUrl: 'tvshow-details.html',
  providers: [TvshowService]
})
export class TvshowDetailsPage {
	selectedTvshow: any;
	video: any;
	url: SafeResourceUrl;

	ngOnInit(): void {
  		this.getTvshowVideos();
  		// this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.video.key + "?rel=0&amp;controls=0&amp;showinfo=0")
  	}

  buildUrl(videos): SafeResourceUrl {
    if (videos) {
      for (let video of videos) {
        if (video.site == "YouTube") {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?rel=0&amp;controls=0&amp;showinfo=0")
        }
        return null
      }
      
    } 
    else {
      return null
    }
  }

	getTvshowVideos(): void {
		this.tvshowService.getVideos(this.selectedTvshow.id).then(videos => this.url = this.buildUrl(videos));

	}

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private tvshowService: TvshowService, private sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have a tvshow available as a nav param
    this.selectedTvshow = navParams.get('tvshow');
  }
}
