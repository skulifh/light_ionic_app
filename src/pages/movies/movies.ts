import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [MovieService]
})
export class MoviesPage implements OnInit {
	ngOnInit(): void {
  		this.getMovies();

  		this.default_movies = this.movies;
  	}
	movies: Movie[];

	//todo: use this instead of always call getMovies()
	default_movies: Movie[];

	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);
	}
	searchMovies(ev: any): void {
		let val = ev.target.value;
		// if the value is an empty string don't filter the items
	    if (val && val.trim() != '' && val.length > 3) {
			this.movieService.searchMovies(val).then(movies => this.movies = movies);
	    }
	    else {
	    	this.movieService.getMovies().then(movies => this.movies = movies);
	    }

		//Simulate the same thing above with slow connection
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

  constructor(public navCtrl: NavController, private movieService: MovieService) {
  }

}
