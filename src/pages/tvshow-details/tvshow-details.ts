import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser'

import { NavController, NavParams } from 'ionic-angular';
import { TvshowService } from '../../services/tvshow.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'page-tvshow-details',
  templateUrl: 'tvshow-details.html',
  providers: [TvshowService, HelperService]
})

// This component displays the further details of the selected tv show including the overview text and poster/trailer
export class TvshowDetailsPage {
	selectedTvshow: any;
	video: any;
	url: SafeResourceUrl;

	ngOnInit(): void {
		this.getTvshowVideos();
	}

	// This function fetches the trailer for the tv show
	getTvshowVideos(): void {
		// This command fetches the URL of the trailer for the tv show, and id does so by using a function in the helperService
		this.tvshowService.getVideos(this.selectedTvshow.id).then(videos => this.url = this.helperService.buildYoutubeUrl(videos));
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private helperService: HelperService, private tvshowService: TvshowService) {
    // If we navigated to this page, we will have a tvshow available as a nav param
    this.selectedTvshow = navParams.get('tvshow');
  }
}
