import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Tvshow } from '../models/tvshow';
import { Video } from '../models/video';
import * as myGlobals from '../app/globals'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TvshowService {
	constructor(private http: Http) {}

	getTvshows(): Promise<Tvshow[]> {
		const url = `${myGlobals.api_path}/tv/top_rated`;

	    return this.http.get(url, {
	        params: { api_key: myGlobals.api_key }
	    })
	    .toPromise()
	    .then(
	    	function(response) {
  				return response.json()["results"] as Tvshow[];
  			},
	        //Error fallback function
	        function(error) {
	          return null;
	        }
        )
	}

  	searchTvshows(val): Promise<Tvshow[]> {
		const url = `${myGlobals.api_path}/search/tv`;

	    return this.http.get(url, {
	        params: { api_key: myGlobals.api_key, language: "en-US", page: 1, include_adult: false, query: val }
	      })
	    .toPromise()
	    .then(
	    	function(response) {
				return response.json()["results"] as Tvshow[];
			},
	        //Error fallback function
	        function(error) {
	          return null;
	        }
        )
	}

  	getVideos(val): Promise<Video[]> {
		const url = `${myGlobals.api_path}/tv/${val}/videos`;

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