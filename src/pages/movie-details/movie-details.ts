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

// This component displays the further details of the selected movie including the overview text and poster/trailer
export class MovieDetailsPage {
	selectedMovie: any;
	video: any;
	url: SafeResourceUrl;

  // This function runs initially
	ngOnInit(): void {
  		this.getMovieVideos();
  	}

   // This function fetches the trailer for the movie
  getMovieVideos(): void {
    // This command fetches the URL of the trailer for the movie, and id does so by using a function in the helperService
  	this.movieService.getVideos(this.selectedMovie.id).then(videos => this.url = this.helperService.buildYoutubeUrl(videos));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private helperService: HelperService, private movieService: MovieService) {
    // If we navigated to this page, we will have a movie available as a nav param
    this.selectedMovie = navParams.get('movie');
  }
}
