import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Tvshow } from '../../models/tvshow';
import { TvshowService } from '../../services/tvshow.service';

@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
  providers: [TvshowService]
})
export class TvshowsPage implements OnInit {
	ngOnInit(): void {
  		this.getTvshows();

  		this.default_tvshows = this.tvshows;
  	}
	tvshows: Tvshow[];

	//todo: use this instead of always call getTvshows()
	default_tvshows: Tvshow[];

	getTvshows(): void {
		this.tvshowService.getTvshows().then(tvshows => this.tvshows = tvshows);
	}
	searchTvshows(ev: any): void {
		let val = ev.target.value;
		// if the value is an empty string don't filter the items
	    if (val && val.trim() != '' && val.length > 3) {
			this.tvshowService.searchTvshows(val).then(tvshows => this.tvshows = tvshows);
	    }
	    else {
	    	this.tvshowService.getTvshows().then(tvshows => this.tvshows = tvshows);
	    }

		//Simulate the same thing above with slow connection
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

  constructor(public navCtrl: NavController, private tvshowService: TvshowService) {
  }

}
