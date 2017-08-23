import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Video } from '../models/video';
import { Movie } from '../models/movie';
import * as myGlobals from '../app/globals'

@Injectable()
export class MovieService {
	constructor(private http: Http) {}

	getMovies(): Promise<Movie[]> {
		const url = `${myGlobals.api_path}/movie/top_rated`;
	    return this.http.get(url, {
	        params: { api_key: myGlobals.api_key, language: "en-US", page: 1 }
	    })
	    .toPromise()
	    .then(
	    	function(response) {
				return response.json()["results"] as Movie[];
			},
	        //Error fallback function
	        function(error) {
				return null;
	        }
        )
	}

  	searchMovies(val): Promise<Movie[]> {
		const url = `${myGlobals.api_path}/search/movie`;
	    return this.http.get(url, {
	        params: { api_key: myGlobals.api_key, language: "en-US", page: 1, include_adult: false, query: val }
		})
		.toPromise()
		.then(
	    	function(response) {
				return response.json()["results"] as Movie[];
			},
	        //Error fallback function
	        function(error) {
          		return null;
	        }
        )
	}

  	getVideos(val): Promise<Video[]> {
		const url = `${myGlobals.api_path}/movie/${val}/videos`;
	    return this.http.get(url, {
	        params: { api_key: myGlobals.api_key, language: "en-US" }
	    })
	    .toPromise()
	    .then(
	    	function(response) {
				return response.json()["results"] as Video[];
			},
	        //Error fallback function
	        function(error) {
	          	return null;
	        }
        )
	}
}