import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { MovieDetailsPage } from '../movie-details/movie-details';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [MovieService]
})

// This component is used to display top 10 movies in a list, and make it possible to click individual movie to see further details of that movie
export class MoviesPage implements OnInit {
	ngOnInit(): void {
  		this.getMovies();
  	}

  	// This movies collection is displayed in the list of movies
	movies: Movie[];

	// This movies collection is used to store top 10 movies throughout the lifecycle of the app. This makes it unneccesary to constantly
	// get the top 10 movies from TheMovieDB again and again when the search is cleared.
	top10_movies: Movie[];

	// Function that fetches the top 10 rated movies from TheMovieDB through Movie service
	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = this.top10_movies = movies);
	}
	
	// Function used to call the Movie service that searches TheMovieDB for matching movies
	searchMovies(ev: any): void {
		let val = ev.target.value;
		// if the value is an empty string or smaller than 4 characters then don't filter the items
	    if (val && val.trim() != '' && val.length > 3) {
			this.movieService.searchMovies(val).then(movies => this.movies = movies);
	    }
	    // If not, displaying the top 10 movies again stored in the top10_movies variable
	    else {
	    	this.movies = this.top10_movies;
	    }
	}

	// Function that runs when an individual movie is clicked on the Movies page
	movieTapped(event, movie) {
		this.navCtrl.push(MovieDetailsPage, {
			movie: movie
		});
	}

	// Injecting the NavController and the MovieService into this Movies component
	constructor(public navCtrl: NavController, private movieService: MovieService) {
	}

}
