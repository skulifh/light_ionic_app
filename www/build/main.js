webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tvshows_tvshows__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__movies_movies__["a" /* MoviesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__tvshows_tvshows__["a" /* TvshowsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Movies" tabIcon="film"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="TV shows" tabIcon="easel"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Messages" tabIcon="mail"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tvshow_details_tvshow_details__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowsPage = (function () {
    // Injecting the NavController and the MovieService into this Tvshows component
    function TvshowsPage(navCtrl, tvshowService) {
        this.navCtrl = navCtrl;
        this.tvshowService = tvshowService;
    }
    TvshowsPage.prototype.ngOnInit = function () {
        this.getTvshows();
    };
    // Function that fetches the top 10 rated tvshows from TheMovieDB through Tvshow service
    TvshowsPage.prototype.getTvshows = function () {
        var _this = this;
        this.tvshowService.getTvshows().then(function (tvshows) { return _this.tvshows = _this.top10_tvshows = tvshows; });
    };
    // Function used to call the Tvshow service that searches TheMovieDB for matching tv shows
    TvshowsPage.prototype.searchTvshows = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string or smaller than 4 characters then don't filter the items
        if (val && val.trim() != '' && val.length > 3) {
            this.tvshowService.searchTvshows(val).then(function (tvshows) { return _this.tvshows = tvshows; });
        }
        else {
            this.tvshows = this.top10_tvshows;
        }
    };
    // Function that runs when an individual tvshow is clicked on the Tvshows page
    TvshowsPage.prototype.tvshowTapped = function (event, tvshow) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */], {
            tvshow: tvshow
        });
    };
    return TvshowsPage;
}());
TvshowsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tvshows',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tvshows/tvshows.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tvshows</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="searchTvshows($event)"></ion-searchbar>\n  <ion-grid>\n    <ion-row>\n      \n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let tvshow of tvshows | slice:0:10">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://image.tmdb.org/t/p/w300_and_h300_bestv2/{{tvshow.poster_path}}">\n          </ion-thumbnail>\n          <h2>{{tvshow.name}}</h2>\n          <p>{{tvshow.first_air_date.split("-")[0]}} • {{tvshow.vote_average}} <ion-icon name="star"></ion-icon></p>\n          <button ion-button clear item-end (click)="tvshowTapped($event, tvshow)">View</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tvshows/tvshows.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]]
    })
    // This component is used to display top 10 tvshows in a list, and make it possible to click individual tv show to see further details of that tv show
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]])
], TvshowsPage);

//# sourceMappingURL=tvshows.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowService = (function () {
    function TvshowService(http) {
        this.http = http;
    }
    // Fetches the top 10 tv shows from TheMovieAPI
    TvshowService.prototype.getTvshows = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/tv/top_rated";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */] }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Searches TheMovieAPI for a specific movie using a string
    TvshowService.prototype.searchTvshows = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/search/tv";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */], language: "en-US", page: 1, include_adult: false, query: val }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Fetches the list of videos (trailers) for a tvshow.
    TvshowService.prototype.getVideos = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/tv/" + val + "/videos";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */], language: "en-US" }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    return TvshowService;
}());
TvshowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TvshowService);

//# sourceMappingURL=tvshow.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_key; });
//All the global constant variables are stored here and accessed throughout different parts of the app
//All the global constant variables are stored here and accessed throughout different parts of the app
var api_path = "https://api.themoviedb.org/3";
var api_key = "97c9873a035726c716e8254e0a0e8ed1";
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowDetailsPage = (function () {
    function TvshowDetailsPage(navCtrl, navParams, helperService, tvshowService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperService = helperService;
        this.tvshowService = tvshowService;
        // If we navigated to this page, we will have a tvshow available as a nav param
        this.selectedTvshow = navParams.get('tvshow');
    }
    TvshowDetailsPage.prototype.ngOnInit = function () {
        this.getTvshowVideos();
    };
    // This function fetches the trailer for the tv show
    TvshowDetailsPage.prototype.getTvshowVideos = function () {
        var _this = this;
        // This command fetches the URL of the trailer for the tv show, and id does so by using a function in the helperService
        this.tvshowService.getVideos(this.selectedTvshow.id).then(function (videos) { return _this.url = _this.helperService.buildYoutubeUrl(videos); });
    };
    return TvshowDetailsPage;
}());
TvshowDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tvshow-details',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tvshow-details/tvshow-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedTvshow">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tvshow Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n\n      <!-- Here we use the Trailer component to display either the poster for the tv show or the tv show\'s trailer if available -->\n      <page-trailer [youtube_url]="url" [poster_path] = "selectedTvshow.poster_path"></page-trailer>\n      \n      <ion-card-title>\n        {{selectedTvshow.title}}\n      </ion-card-title>\n      <p>\n        {{selectedTvshow.overview}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/tvshow-details/tvshow-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */]]
    })
    // This component displays the further details of the selected tv show including the overview text and poster/trailer
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]])
], TvshowDetailsPage);

//# sourceMappingURL=tvshow-details.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelperService = (function () {
    function HelperService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // A function that gets an array of videos, fethes the first YouTube video it finds and returns the url of that video. If no YouTube
    // video is found, or the video array is empty it returns null. This function is used by both the movie-details and tvshow-details module.
    HelperService.prototype.buildYoutubeUrl = function (videos) {
        if (videos) {
            for (var _i = 0, videos_1 = videos; _i < videos_1.length; _i++) {
                var video = videos_1[_i];
                if (video.site == "YouTube") {
                    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?rel=0&amp;controls=0&amp;showinfo=0");
                }
            }
        }
        return null;
    };
    return HelperService;
}());
HelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesPage = (function () {
    // Injecting the NavController and the MovieService into this Movies component
    function MoviesPage(navCtrl, movieService) {
        this.navCtrl = navCtrl;
        this.movieService = movieService;
    }
    MoviesPage.prototype.ngOnInit = function () {
        this.getMovies();
    };
    // Function that fetches the top 10 rated movies from TheMovieDB through Movie service
    MoviesPage.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().then(function (movies) { return _this.movies = _this.top10_movies = movies; });
    };
    // Function used to call the Movie service that searches TheMovieDB for matching movies
    MoviesPage.prototype.searchMovies = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string or smaller than 4 characters then don't filter the items
        if (val && val.trim() != '' && val.length > 3) {
            this.movieService.searchMovies(val).then(function (movies) { return _this.movies = movies; });
        }
        else {
            this.movies = this.top10_movies;
        }
    };
    // Function that runs when an individual movie is clicked on the Movies page
    MoviesPage.prototype.movieTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__["a" /* MovieDetailsPage */], {
            movie: movie
        });
    };
    return MoviesPage;
}());
MoviesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-movies',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/movies/movies.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Movies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="searchMovies($event)"></ion-searchbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let movie of movies | slice:0:10">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="https://image.tmdb.org/t/p/w300_and_h300_bestv2/{{movie.poster_path}}">\n          </ion-thumbnail>\n          <h2>{{movie.title}}</h2>\n          <p>{{movie.release_date.split("-")[0]}} • {{movie.vote_average}} <ion-icon name="star"></ion-icon></p>\n          <button ion-button clear item-end (click)="movieTapped($event, movie)">View</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/movies/movies.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]]
    })
    // This component is used to display top 10 movies in a list, and make it possible to click individual movie to see further details of that movie
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]])
], MoviesPage);

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    // Fetches the top 10 movies from TheMovieAPI
    MovieService.prototype.getMovies = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/movie/top_rated";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US", page: 1 }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Searches TheMovieAPI for a specific tv show using a string
    MovieService.prototype.searchMovies = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/search/movie";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US", page: 1, include_adult: false, query: val }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Fetches the list of videos (trailers) for a movie.
    MovieService.prototype.getVideos = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/movie/" + val + "/videos";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US" }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    return MovieService;
}());
MovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MovieService);

//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailsPage = (function () {
    function MovieDetailsPage(navCtrl, navParams, helperService, movieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperService = helperService;
        this.movieService = movieService;
        // If we navigated to this page, we will have a movie available as a nav param
        this.selectedMovie = navParams.get('movie');
    }
    // This function runs initially
    MovieDetailsPage.prototype.ngOnInit = function () {
        this.getMovieVideos();
    };
    // This function fetches the trailer for the movie
    MovieDetailsPage.prototype.getMovieVideos = function () {
        var _this = this;
        // This command fetches the URL of the trailer for the movie, and id does so by using a function in the helperService
        this.movieService.getVideos(this.selectedMovie.id).then(function (videos) { return _this.url = _this.helperService.buildYoutubeUrl(videos); });
    };
    return MovieDetailsPage;
}());
MovieDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-movie-details',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/movie-details/movie-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedMovie">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Movie Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n    \n      <!-- Here we use the Trailer component to display either the poster for the movie or the movie\'s trailer if available -->\n      <page-trailer [youtube_url]="url" [poster_path] = "selectedMovie.poster_path"></page-trailer>\n      \n      <ion-card-title>\n        {{selectedMovie.title}}\n      </ion-card-title>\n      <p>\n        {{selectedMovie.overview}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/movie-details/movie-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */]]
    })
    // This component displays the further details of the selected movie including the overview text and poster/trailer
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]])
], MovieDetailsPage);

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MessageDetailsPage } from '../message-details/message-details';
var MessagesPage = (function () {
    // Function that fetches the top 10 rated messages from TheMovieDB through Message service
    // getMessages(): void {
    // 	this.messageService.getMessages().then(messages => this.messages = this.top10_messages = messages);
    // }
    // Function that runs when an individual message is clicked on the Messages page
    // messageTapped(event, message) {
    // 	this.navCtrl.push(MessageDetailsPage, {
    // 		message: message
    // 	});
    // }
    // Injecting the NavController and the MovieService into this Messages component
    function MessagesPage(navCtrl, messageService) {
        this.navCtrl = navCtrl;
        this.messageService = messageService;
    }
    MessagesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService
            .getMessage()
            .subscribe(function (msg) {
            if (_this.messages) {
                for (var _i = 0, msg_1 = msg; _i < msg_1.length; _i++) {
                    var mess = msg_1[_i];
                    _this.messages.push(mess);
                }
            }
            else {
                _this.messages = msg;
            }
        });
    };
    MessagesPage.prototype.sendMsg = function (msg) {
        this.messageService.sendMessage(msg);
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/messages/messages.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Messages {{msg}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n        <ion-item>\n          <ion-label>Message</ion-label>\n          <ion-input type="text" #msgInput name="" value=""></ion-input>\n          \n        </ion-item>\n        <button ion-button (click)="sendMsg(msgInput.value)">Send</button>\n      </ion-col>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let message of messages">\n        {{message.msg}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/messages/messages.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]]
    })
    // This component is used to display top 10 messages in a list, and make it possible to click individual tv show to see further details of that tv show
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === "function" && _b || Object])
], MessagesPage);

var _a, _b;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_movie_details_movie_details__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tvshow_details_tvshow_details__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_trailer_trailer__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = { url: 'http://localhost:5000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__["a" /* TvshowsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_trailer_trailer__["a" /* TrailerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__["a" /* TvshowsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_trailer_trailer__["a" /* TrailerPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // The platform is ready and our plugins are available.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/app/app.html"*/
    })
    //Main application class, rootpage is the tabs component which contains the .
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageService = (function () {
    function MessageService(http, socket) {
        this.http = http;
        this.socket = socket;
    }
    // Fetches the top 10 tv shows from TheMovieAPI
    // getMessages(): Promise<Message[]> {
    // 	const url = `http://localhost:5000/api/message`;
    //     return this.http.get(url, {
    //         // params: { api_key: myGlobals.api_key }
    //     })
    //     .toPromise()
    //     .then(
    //     	function(response) {
    //  				return response.json() as Message[];
    //  			},
    //         //Error fallback function
    //         function(error) {
    //           return null;
    //         }
    //        )
    // }
    MessageService.prototype.getMessage = function () {
        return this.socket
            .fromEvent("msg")
            .map(function (data) { return data; });
    };
    MessageService.prototype.sendMessage = function (msg) {
        var message = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]();
        message.msg = msg;
        this.socket
            .emit("newmsg", msg);
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]) === "function" && _b || Object])
], MessageService);

var _a, _b;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// This Trailer component is used for the trailer of both the Movie component and the Tvshow component since it works the same way for both
var TrailerPage = (function () {
    function TrailerPage() {
    }
    return TrailerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TrailerPage.prototype, "youtube_url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TrailerPage.prototype, "poster_path", void 0);
TrailerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-trailer',template:/*ion-inline-start:"/Users/skuli/Documents/git/light_ionic_app/src/pages/trailer/trailer.html"*/'<!-- Here we check if a trailer is available for the movie/tvshow, if not we display the poster of the movie/tvshow instead -->\n<iframe *ngIf="youtube_url" width="560" height="315" [attr.src]="youtube_url" frameborder="0" allowfullscreen></iframe>\n<img *ngIf="!youtube_url" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{poster_path}}" alt="...">'/*ion-inline-end:"/Users/skuli/Documents/git/light_ionic_app/src/pages/trailer/trailer.html"*/
    }),
    __metadata("design:paramtypes", [])
], TrailerPage);

//# sourceMappingURL=trailer.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
// Movie model, here all the movies attributes are declared
var Message = (function () {
    function Message() {
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map