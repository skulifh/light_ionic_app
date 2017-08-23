import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Tvshow } from '../../models/tvshow';
import { TvshowService } from '../../services/tvshow.service';
import { TvshowDetailsPage } from '../tvshow-details/tvshow-details';

@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
  providers: [TvshowService]
})

// This component is used to display top 10 tvshows in a list, and make it possible to click individual tv show to see further details of that tv show
export class TvshowsPage implements OnInit {
	ngOnInit(): void {
  		this.getTvshows();

  		this.default_tvshows = this.tvshows;
  	}
	tvshows: Tvshow[];

	default_tvshows: Tvshow[];

	// Function that fetches the top 10 rated tvshows from TheMovieDB through Tvshow service
	getTvshows(): void {
		this.tvshowService.getTvshows().then(tvshows => this.tvshows = tvshows);
	}

	// Function used to call the Tvshow service that searches TheMovieDB for matching tv shows
	searchTvshows(ev: any): void {
		let val = ev.target.value;
		// if the value is an empty string or smaller than 4 characters then don't filter the items
	    if (val && val.trim() != '' && val.length > 3) {
			this.tvshowService.searchTvshows(val).then(tvshows => this.tvshows = tvshows);
	    }
	    else {
	    	this.tvshowService.getTvshows().then(tvshows => this.tvshows = tvshows);
	    }
	}

	// Function that runs when an individual tvshow is clicked on the Tvshows page
	tvshowTapped(event, tvshow) {
		this.navCtrl.push(TvshowDetailsPage, {
			tvshow: tvshow
		});
	}

	// Injecting the NavController and the MovieService into this Tvshows component
	constructor(public navCtrl: NavController, private tvshowService: TvshowService) {
	}

}
