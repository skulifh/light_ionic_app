import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser'

import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../services/movie.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [MovieService, HelperService]
})

export class MovieDetailsPage {
	selectedMovie: any;
	video: any;
	url: SafeResourceUrl;

	ngOnInit(): void {
  		this.getMovieVideos();
  	}

	getMovieVideos(): void {
		this.movieService.getVideos(this.selectedMovie.id).then(videos => this.url = this.helperService.buildYoutubeUrl(videos));
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private helperService: HelperService, private movieService: MovieService) {
    // If we navigated to this page, we will have a movie available as a nav param
    this.selectedMovie = navParams.get('movie');
  }
}
