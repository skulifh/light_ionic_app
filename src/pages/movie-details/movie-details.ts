import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser'

import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../services/movie.service';
import { TrailerPage } from '../trailer/trailer'

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [MovieService, TrailerPage]
})
export class MovieDetailsPage {
	selectedMovie: any;
	video: any;
	url: SafeResourceUrl;

	ngOnInit(): void {
  		this.getMovieVideos();
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

	getMovieVideos(): void {
		this.movieService.getVideos(this.selectedMovie.id).then(videos => this.url = this.buildUrl(videos));

	}

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieService: MovieService, private sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have a movie available as a nav param
    this.selectedMovie = navParams.get('movie');
  }
}
