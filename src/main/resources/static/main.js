(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container main-container\">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_recommended_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/recommended.service */ "./src/app/services/recommended.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/share/navbar/navbar.component */ "./src/app/components/share/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/share/footer/footer.component */ "./src/app/components/share/footer/footer.component.ts");
/* harmony import */ var _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recommended/recommended.component */ "./src/app/components/recommended/recommended.component.ts");
/* harmony import */ var _components_recommended_recommended_card_recommended_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/recommended/recommended-card/recommended-card.component */ "./src/app/components/recommended/recommended-card/recommended-card.component.ts");
/* harmony import */ var _components_show_show_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/show/show.component */ "./src/app/components/show/show.component.ts");
/* harmony import */ var _services_show_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/show.service */ "./src/app/services/show.service.ts");
/* harmony import */ var _components_show_show_card_show_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/show/show-card/show-card.component */ "./src/app/components/show/show-card/show-card.component.ts");
/* harmony import */ var _components_episode_episodes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/episode/episodes.component */ "./src/app/components/episode/episodes.component.ts");
/* harmony import */ var _components_episode_episode_card_episode_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/episode/episode-card/episode-card.component */ "./src/app/components/episode/episode-card/episode-card.component.ts");
/* harmony import */ var _services_episode_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/episode.service */ "./src/app/services/episode.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");







// Rutas

// Servicios


// Componentes















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_15__["RecommendedComponent"],
                _components_recommended_recommended_card_recommended_card_component__WEBPACK_IMPORTED_MODULE_16__["RecommendedCardComponent"],
                _components_show_show_component__WEBPACK_IMPORTED_MODULE_17__["ShowComponent"],
                _components_show_show_card_show_card_component__WEBPACK_IMPORTED_MODULE_19__["ShowCardComponent"],
                _components_episode_episodes_component__WEBPACK_IMPORTED_MODULE_20__["EpisodesComponent"],
                _components_episode_episode_card_episode_card_component__WEBPACK_IMPORTED_MODULE_21__["EpisodeCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTING"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _services_recommended_service__WEBPACK_IMPORTED_MODULE_8__["RecommendedService"],
                _services_show_service__WEBPACK_IMPORTED_MODULE_18__["ShowService"],
                _services_episode_service__WEBPACK_IMPORTED_MODULE_22__["EpisodeService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
                _services_data_service__WEBPACK_IMPORTED_MODULE_23__["Data"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/recommended/recommended.component */ "./src/app/components/recommended/recommended.component.ts");
/* harmony import */ var _components_show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/show/show.component */ "./src/app/components/show/show.component.ts");
/* harmony import */ var _components_episode_episodes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/episode/episodes.component */ "./src/app/components/episode/episodes.component.ts");






var APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'recommended', component: _components_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"] },
    { path: 'show/:id', component: _components_show_show_component__WEBPACK_IMPORTED_MODULE_4__["ShowComponent"] },
    { path: 'episodes/:id', component: _components_episode_episodes_component__WEBPACK_IMPORTED_MODULE_5__["EpisodesComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fadeIn fast\">Sobre Series Pro </h1>\n<hr>\n<p class=\"animated fadeIn\">\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tenetur, placeat dolores possimus soluta eos eligendi sint et ipsum, repellendus labore corrupti ducimus earum, veritatis reprehenderit debitis quasi quas veniam.\n</p>\n<img src=\"assets/img/icon.png\" alt=\"\" class=\"img-circle\">"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/episode/episode-card/episode-card.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/episode/episode-card/episode-card.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"episode\" class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top\" [src]=\"imgPath.concat(episode.still_path)\" [alt]=\"episode.name\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ seasonNumber + 'x' + episodeNumber + ' - ' + episode.name }}</h5>\n        <p class=\"card-text\">{{ episode.overview }}</p>\n        <p class=\"card-text\"><small class=\"text-muted\">{{ episode.air_date | date: 'shortDate' }}</small></p>\n\n        <button (click)=\"showEpisode()\" type=\"button\" class=\"btn btn-outline-primary btn-block\">\n          Ver más...\n      </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/episode/episode-card/episode-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/episode/episode-card/episode-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: EpisodeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeCardComponent", function() { return EpisodeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_episode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/episode.service */ "./src/app/services/episode.service.ts");





var EpisodeCardComponent = /** @class */ (function () {
    function EpisodeCardComponent(router, _episodeService) {
        this.router = router;
        this._episodeService = _episodeService;
        this.showId = '44217';
        this.seasonNumber = 1;
        this.imgPath = _globals__WEBPACK_IMPORTED_MODULE_3__["imgPath"];
        this.episodeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EpisodeCardComponent.prototype.ngOnInit = function () {
        this.getEpisode();
    };
    EpisodeCardComponent.prototype.getEpisode = function () {
        var _this = this;
        this._episodeService.getEpisode(this.showId, this.seasonNumber, this.episodeNumber)
            .then(function (episode) { return _this.episode = episode; });
    };
    EpisodeCardComponent.prototype.showEpisode = function () {
        this.router.navigate(['/episode', this.episodeNumber]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EpisodeCardComponent.prototype, "episodeNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EpisodeCardComponent.prototype, "episodeSelected", void 0);
    EpisodeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-episode-card',
            template: __webpack_require__(/*! ./episode-card.component.html */ "./src/app/components/episode/episode-card/episode-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_episode_service__WEBPACK_IMPORTED_MODULE_4__["EpisodeService"]])
    ], EpisodeCardComponent);
    return EpisodeCardComponent;
}());



/***/ }),

/***/ "./src/app/components/episode/episodes.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/episode/episodes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"show\"><small>Capítulos de</small> {{ show.name }}\n    <img [src]=\"imgPath.concat(show.poster_path)\" class=\"img-fluid img-header\" [alt]=\"show.name\">\n</h1>\n<hr>\n\n<div *ngIf=\"episodes\" class=\"list-group\">\n    <a (click)=\"markEpisodeAsWatched(episode.show_id, episode.season_number, episode.episode_number)\" style=\"cursor: pointer;\" *ngFor=\"let episode of episodes\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n        {{ episode.season_number + 'x' + episode.episode_number + ' - ' + episode.name }}\n        <span *ngIf=\"viewedEpisode(episode.show_id, episode.season_number, episode.episode_number)\" class=\"badge badge-success badge-pill\">Visto</span>\n        <span *ngIf=\"!viewedEpisode(episode.show_id, episode.season_number, episode.episode_number)\" class=\"badge badge-danger badge-pill\">Pdte.</span>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/components/episode/episodes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/episode/episodes.component.ts ***!
  \**********************************************************/
/*! exports provided: EpisodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesComponent", function() { return EpisodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_episode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/episode.service */ "./src/app/services/episode.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/show.service */ "./src/app/services/show.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");







var EpisodesComponent = /** @class */ (function () {
    function EpisodesComponent(episodesService, showService, activatedRoute, data) {
        this.episodesService = episodesService;
        this.showService = showService;
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.imgPath = _globals__WEBPACK_IMPORTED_MODULE_6__["imgPath"];
    }
    EpisodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.episodesService.getEpisodesAllSeasons(params['id'])
                .then(function (episodes) { return _this.episodes = episodes; });
            _this.showService.getShow(params['id'])
                .then(function (show) { return _this.show = show; });
        });
        this.user = this.data.user;
    };
    EpisodesComponent.prototype.viewedEpisode = function (showId, seasonNumber, episodeNumber) {
        var watched = false;
        if (this.user.watchedEpisodes != null) {
            this.user.watchedEpisodes.forEach(function (watchedEpisode) {
                if (watchedEpisode.showId === showId && watchedEpisode.seasonNumber === seasonNumber && watchedEpisode.episodeNumber === episodeNumber) {
                    watched = true;
                }
            });
        }
        return watched;
    };
    EpisodesComponent.prototype.markEpisodeAsWatched = function (showId, seasonNumber, episodeNumber) {
        var watched = false;
        if (this.user.watchedEpisodes != null) {
            this.user.watchedEpisodes.forEach(function (watchedEpisode) {
                if (watchedEpisode.showId === showId && watchedEpisode.seasonNumber === seasonNumber && watchedEpisode.episodeNumber === episodeNumber) {
                    watched = true;
                }
            });
        }
        if (!watched) {
            this.episodesService.markEpisodeAsWatched(showId, seasonNumber, episodeNumber, this.user);
        }
    };
    EpisodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-episodes',
            template: __webpack_require__(/*! ./episodes.component.html */ "./src/app/components/episode/episodes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_episode_service__WEBPACK_IMPORTED_MODULE_3__["EpisodeService"],
            _services_show_service__WEBPACK_IMPORTED_MODULE_5__["ShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["Data"]])
    ], EpisodesComponent);
    return EpisodesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tus series <small>seguidas</small></h1>\n<hr>\n<div *ngIf=\"user\" class=\"card-columns\">\n    <app-show-card [showId]=\"followedShow.showId\" *ngFor=\"let followedShow of user.followedShows\"></app-show-card>\n\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_userService, data) {
        this._userService = _userService;
        this.data = data;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser('5c14f902608b892548c1bfa0')
            .then(function (user) { return _this.user = user; });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.data.user = this.user;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["Data"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/recommended/recommended-card/recommended-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/recommended/recommended-card/recommended-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top\" [src]=\"imgPath.concat(show.poster_path)\" [alt]=\"show.name\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ show.name }}</h5>\n        <p class=\"card-text\">{{ show.overview }}}</p>\n        <p class=\"card-text\"><small class=\"text-muted\">{{ show.first_air_date | date: 'shortDate' }}</small></p>\n\n        <button (click)=\"showShow()\" type=\"button\" class=\"btn btn-outline-primary btn-block\">\n            Ver más...\n        </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/recommended/recommended-card/recommended-card.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/recommended/recommended-card/recommended-card.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RecommendedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedCardComponent", function() { return RecommendedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/show */ "./src/app/models/show.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");





var RecommendedCardComponent = /** @class */ (function () {
    function RecommendedCardComponent(router) {
        this.router = router;
        this.imgPath = _globals__WEBPACK_IMPORTED_MODULE_4__["imgPath"];
        this.showSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RecommendedCardComponent.prototype.ngOnInit = function () {
    };
    RecommendedCardComponent.prototype.showShow = function () {
        this.router.navigate(['/show', this.show.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_show__WEBPACK_IMPORTED_MODULE_3__["Show"])
    ], RecommendedCardComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RecommendedCardComponent.prototype, "showSelected", void 0);
    RecommendedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommended-card',
            template: __webpack_require__(/*! ./recommended-card.component.html */ "./src/app/components/recommended/recommended-card/recommended-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecommendedCardComponent);
    return RecommendedCardComponent;
}());



/***/ }),

/***/ "./src/app/components/recommended/recommended.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recommended/recommended.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"show\"><small>Porque sigues </small>{{ show.name }}</h1>\n<hr>\n<div *ngIf=\"shows\" class=\"card-columns\">\n\n    <!-- <app-recommended-card [show]=\"show\" *ngFor=\"let show of shows\"></app-recommended-card> -->\n    <app-show-card [showId]=\"show.id\" *ngFor=\"let show of shows\"></app-show-card>\n\n</div>"

/***/ }),

/***/ "./src/app/components/recommended/recommended.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recommended/recommended.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recommended_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recommended.service */ "./src/app/services/recommended.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent(recommendedService, userService, data, router) {
        this.recommendedService = recommendedService;
        this.userService = userService;
        this.data = data;
        this.router = router;
    }
    RecommendedComponent.prototype.ngOnInit = function () {
        this.user = this.data.user;
        this.getShows();
    };
    RecommendedComponent.prototype.getShows = function () {
        var _this = this;
        this.recommendedService.getShows(this.user.id)
            .then(function (shows) {
            _this.shows = shows;
            _this.show = _this.shows[1];
            _this.shows = _this.shows.slice(2, _this.shows.length);
        });
    };
    RecommendedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommended',
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/components/recommended/recommended.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recommended_service__WEBPACK_IMPORTED_MODULE_2__["RecommendedService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["Data"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/components/share/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-dark text-center\">\n    <div class=\"containter\">\n        <p>\n            &copy; {{ anyo }} Carlos Verbo\n        </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/share/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anyo = new Date().getFullYear();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/share/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/share/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/icon.png\" width=\"30\" height=\"30\" alt=\"\" />\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['home']\">Mis Series</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['recommended']\">Recomendadas</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['about']\">About</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </li>\n        </ul>\n\n        <!--\n      <div class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar héroe\" aria-label=\"Buscar héroe\" (keyup.enter)=\"buscarHeroe(buscarTexto.value)\" #buscarTexto>\n          <button (click)=\"buscarHeroe(buscarTexto.value)\" class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"button\">Buscar</button>\n      </div>\n    -->\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/share/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.buscarHeroe = function (termino) {
        this.router.navigate(['/heroes-busqueda', termino]);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/share/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/show/show-card/show-card.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/show/show-card/show-card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\" class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top\" [src]=\"imgPath.concat(show.poster_path)\" [alt]=\"show.name\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ show.name }}</h5>\n        <p class=\"card-text\">{{ show.overview }}</p>\n        <p class=\"card-text\"><small class=\"text-muted\">{{ show.first_air_date | date: 'shortDate' }}</small></p>\n\n        <button (click)=\"showShow()\" type=\"button\" class=\"btn btn-outline-primary btn-block\">\n          Ver más...\n        </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/show/show-card/show-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/show/show-card/show-card.component.ts ***!
  \******************************************************************/
/*! exports provided: ShowCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCardComponent", function() { return ShowCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/show.service */ "./src/app/services/show.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user */ "./src/app/models/user.ts");






var ShowCardComponent = /** @class */ (function () {
    function ShowCardComponent(router, _showService) {
        this.router = router;
        this._showService = _showService;
        this.imgPath = _globals__WEBPACK_IMPORTED_MODULE_3__["imgPath"];
        this.showSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ShowCardComponent.prototype.ngOnInit = function () {
        this.getShow();
    };
    ShowCardComponent.prototype.getShow = function () {
        var _this = this;
        this._showService.getShow(this.showId)
            .then(function (show) { return _this.show = show; });
    };
    ShowCardComponent.prototype.showShow = function () {
        this.router.navigate(['/show', this.showId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], ShowCardComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ShowCardComponent.prototype, "showId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ShowCardComponent.prototype, "showSelected", void 0);
    ShowCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-card',
            template: __webpack_require__(/*! ./show-card.component.html */ "./src/app/components/show/show-card/show-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_show_service__WEBPACK_IMPORTED_MODULE_4__["ShowService"]])
    ], ShowCardComponent);
    return ShowCardComponent;
}());



/***/ }),

/***/ "./src/app/components/show/show.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/show/show.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"show\">{{ show.name | uppercase }} <small>({{ show.first_air_date | date: 'y'}})</small></h1>\n<hr>\n\n<div *ngIf=\"show\" class=\"row\">\n    <div class=\"col-md-4 animated fadeIn fast\">\n        <img [src]=\"imgPath.concat(show.poster_path)\" class=\"img-fluid\" [alt]=\"show.name\">\n        <br><br>\n        <a [routerLink]=\"['/home']\" class=\"btn btn-outline-danger btn-block\">Volver</a>\n        <a [routerLink]=\"['/episodes', show.id]\" class=\"btn btn-outline-danger btn-block\">Capítulos</a>\n\n    </div>\n\n    <div class=\"col-md-8 animated fadeIn\">\n        <h3>{{ show.name }}</h3>\n        <hr>\n        <p>\n            {{ show.overview }}\n        </p>\n        <!-- <div>\n        <img *ngIf=\"heroe.casa == 'Marvel'\" src=\"assets/img/marvel.png\" class=\"img-logo\" alt=\"Marvel\">\n        <img *ngIf=\"heroe.casa == 'DC'\" src=\"assets/img/dc.png\" class=\"img-logo\" alt=\"DC\">\n    </div> -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/show/show.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/show/show.component.ts ***!
  \***************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/show.service */ "./src/app/services/show.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");






var ShowComponent = /** @class */ (function () {
    function ShowComponent(activatedRoute, _showService, data) {
        this.activatedRoute = activatedRoute;
        this._showService = _showService;
        this.data = data;
        this.imgPath = _globals__WEBPACK_IMPORTED_MODULE_4__["imgPath"];
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this._showService.getShow(params['id'])
                .then(function (show) { return _this.show = show; });
        });
        this.user = this.data.user;
    };
    ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/components/show/show.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_show_service__WEBPACK_IMPORTED_MODULE_3__["ShowService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["Data"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Series Pro</h1>\n    <div>\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"createUser(registerForm)\" novalidate>\n            <tr><td>Nombre de usuario: </td><td><input type=\"text\" class=\"form-control\" required\n                [(ngModel)]=\"newUser.userName\" #userName=\"ngModel\" id=\"userName\" placeholder=\"Nombre de usuario\" name=\"userName\"></td></tr>\n            <tr><td [hidden]=\"userName.valid || userName.untouched\">Nombre de usuario obligatorio</td></tr>\n\n            <tr><td>Nombre: </td><td><input type=\"text\" class=\"form-control\" required\n                [(ngModel)]=\"newUser.firstName\" #firstName=\"ngModel\" id=\"firstName\" placeholder=\"Nombre\" name=\"firstName\"></td></tr>\n            <tr><td [hidden]=\"firstName.valid || firstName.untouched\">Nombre obligatorio</td></tr>\n\n            <tr><td>Apellidos: </td><td><input type=\"text\" class=\"form-control\" required\n                [(ngModel)]=\"newUser.lastName\" #lastName=\"ngModel\" id=\"lastName\" placeholder=\"Apellidos\" name=\"lastName\"></td></tr>\n            <tr><td [hidden]=\"lastName.valid || lastName.untouched\">Apellidos obligatorios</td></tr>\n\n            <tr><td>Fecha de nacimiento: </td><td><input type=\"date\" class=\"form-control\" required\n                [(ngModel)]=\"newUser.birthdate\" #birthdate=\"ngModel\" id=\"birthdate\" placeholder=\"Fecha de nacimiento\" name=\"birthdate\"></td></tr>\n            <tr><td [hidden]=\"birthdate.valid || birthdate.untouched\">Fecha de nacimiento incorrecta.</td></tr>\n\n            <tr><td>E-mail: </td><td><input type=\"email\" class=\"form-control\" required ngModel email\n                [(ngModel)]=\"newUser.email\" #email=\"ngModel\" id=\"email\" placeholder=\"E-mail\" name=\"email\"></td></tr>\n            <tr><td [hidden]=\"email.valid || email.untouched\">Email incorrecto.</td></tr>\n\n            <tr><td>Password: </td><td><input type=\"text\" class=\"form-control\" required\n                [(ngModel)]=\"newUser.password\" #password=\"ngModel\" id=\"password\" placeholder=\"Password\" name=\"password\"></td></tr>\n            <tr><td [hidden]=\"password.valid || password.untouched\">El password debe tener al menos 6 caracteres.</td></tr>\n\n            <tr><td>Repetir password: </td><td><input type=\"text\" class=\"form-control\" required\n                [(ngModel)]=\"repeatPassword\" id=\"repeatPassword\" placeholder=\"Repetir password\" name=\"repeatPassword\"></td></tr>\n            <!-- <tr><td [hidden]=\"repeatPassword === password.value || repeatPassword.length === 0\">Los passwords introducidos no coinciden.</td></tr> -->\n            <tr><td [hidden]=\"validRepeatPassword()\">Los passwords introducidos no coinciden.</td></tr>\n\n            <tr><td><button [disabled]= \"!(registerForm.valid && repeatPassword === password.value)\">Guardar</button></td></tr>\n            <!-- <tr><td>password length = {{password.value.length}}</td></tr> -->\n            <!-- <tr><td>repeat password length = {{this.repeatPassword.length}}</td></tr> -->\n            <tr><td>password.valid = {{password.valid}}</td></tr>\n            <tr><td>registerForm.email.$valid = {{email.valid}}</td></tr>\n            <tr><td>registerForm.password.verification = {{repeatPassword === password.value}}</td></tr>\n        </form>\n    </div>\n</div>\n\n\n\n\n<!-- <div class=\"todo-content\">\n    <h1 class=\"page-title\">My Todos</h1>\n    <div class=\"todo-create\">\n      <form #userForm=\"ngForm\" (ngSubmit)=\"createUser(userForm)\" novalidate>\n        <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a todo and press enter...\" \n               required\n               name=\"title\" [(ngModel)]=\"newUser.title\"\n               #title=\"ngModel\" >\n        <div *ngIf=\"title.errors && title.dirty\"\n             class=\"alert alert-danger\">\n            <div [hidden]=\"!title.errors.required\">\n              Title is required.\n            </div>\n        </div>\n      </form>\n    </div>\n    <ul class=\"todo-list\">\n      <li *ngFor=\"let user of users\" [class.completed]=\"user.completed === true\" >\n        <div class=\"todo-row\" *ngIf=\"!editing || editingUser.id != user.id\">\n            <a class=\"todo-completed\" (click)=\"toggleCompleted(user)\">\n              <i class=\"material-icons toggle-completed-checkbox\"></i> \n            </a> \n            <span class=\"todo-title\">\n              {{user.title}}\n            </span>\n            <span class=\"todo-actions\">\n                <a (click)=\"editUser(user)\">\n                  <i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteUser(user.id)\">\n                  <i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n        </div>\n        <div class=\"todo-edit\" *ngIf=\"editing && editingUser.id === user.id\">\n            <input class=\"form-control\" type=\"text\" \n             [(ngModel)]=\"editingUser.title\" required>\n            <span class=\"edit-actions\">\n                <a (click)=\"updateUser(editingUser)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n        </div>\n      </li>\n    </ul>\n    <div class=\"no-todos\" *ngIf=\"users\">\n        <p>No Users Found!</p>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-validators */ "./node_modules/ng4-validators/esm5/ng4-validators.js");






var UserComponent = /** @class */ (function () {
    function UserComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editing = false;
        this.editingUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.submitted = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.registerForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthdate: ['', ng4_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].date],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    };
    UserComponent.prototype.validRepeatPassword = function () {
        return this.newUser.password === this.repeatPassword;
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.createUser = function (userForm) {
        var _this = this;
        // this.newUser.id = this.newUser.email;
        this.userService.createUser(this.newUser)
            .then(function (createUser) {
            userForm.reset();
            _this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
            _this.users.unshift(createUser);
        });
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id)
            .then(function () {
            _this.users = _this.users.filter(function (user) { return user.id !== id; });
        });
    };
    UserComponent.prototype.updateUser = function (userData) {
        var _this = this;
        console.log(userData);
        this.userService.updateUser(userData)
            .then(function (updatedUser) {
            var existingUser = _this.users.find(function (user) { return user.id === updatedUser.id; });
            Object.assign(existingUser, updatedUser);
            _this.clearEditing();
        });
    };
    UserComponent.prototype.editUser = function (userData) {
        this.editing = true;
        Object.assign(this.editingUser, userData);
    };
    UserComponent.prototype.clearEditing = function () {
        this.editingUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editing = false;
    };
    UserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)');
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-series-pro',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: imgPath, baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgPath", function() { return imgPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
var imgPath = 'https://image.tmdb.org/t/p/w500/';
var baseUrl = '';


/***/ }),

/***/ "./src/app/models/show.ts":
/*!********************************!*\
  !*** ./src/app/models/show.ts ***!
  \********************************/
/*! exports provided: Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
var Show = /** @class */ (function () {
    function Show() {
    }
    return Show;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/watchedEpisode.ts":
/*!******************************************!*\
  !*** ./src/app/models/watchedEpisode.ts ***!
  \******************************************/
/*! exports provided: WatchedEpisode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchedEpisode", function() { return WatchedEpisode; });
var WatchedEpisode = /** @class */ (function () {
    function WatchedEpisode() {
    }
    return WatchedEpisode;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Data = /** @class */ (function () {
    function Data() {
    }
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/services/episode.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/episode.service.ts ***!
  \*********************************************/
/*! exports provided: EpisodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeService", function() { return EpisodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _models_watchedEpisode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/watchedEpisode */ "./src/app/models/watchedEpisode.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");






var EpisodeService = /** @class */ (function () {
    function EpisodeService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseUrl = _globals__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
    }
    EpisodeService.prototype.getEpisodes = function (showId, seasonNumber) {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes/' + seasonNumber + '/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EpisodeService.prototype.getEpisodesAllSeasons = function (showId) {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EpisodeService.prototype.getEpisode = function (showId, seasonNumber, episodeNumber) {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/season/' + seasonNumber + '/episode/' + episodeNumber + '/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EpisodeService.prototype.markEpisodeAsWatched = function (showId, seasonNumber, episodeNumber, user) {
        var we = new _models_watchedEpisode__WEBPACK_IMPORTED_MODULE_4__["WatchedEpisode"]();
        var weList;
        we.showId = showId;
        we.seasonNumber = seasonNumber;
        we.episodeNumber = episodeNumber;
        if (user.watchedEpisodes != null) {
            weList = user.watchedEpisodes;
            weList.push(we);
        }
        else {
            weList = [we];
        }
        user.watchedEpisodes = weList;
        this.userService.updateUser(user);
    };
    EpisodeService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    EpisodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], EpisodeService);
    return EpisodeService;
}());



/***/ }),

/***/ "./src/app/services/recommended.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/recommended.service.ts ***!
  \*************************************************/
/*! exports provided: RecommendedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedService", function() { return RecommendedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var RecommendedService = /** @class */ (function () {
    function RecommendedService(http) {
        this.http = http;
        this.baseUrl = _globals__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
    }
    RecommendedService.prototype.getShows = function (userId) {
        return this.http.get(this.baseUrl + '/api/recommended/' + userId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RecommendedService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    RecommendedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RecommendedService);
    return RecommendedService;
}());



/***/ }),

/***/ "./src/app/services/show.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/show.service.ts ***!
  \******************************************/
/*! exports provided: ShowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowService", function() { return ShowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var ShowService = /** @class */ (function () {
    function ShowService(http) {
        this.http = http;
        this.baseUrl = _globals__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
    }
    ShowService.prototype.getShow = function (id) {
        return this.http.get(this.baseUrl + '/api/show/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShowService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    ShowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ShowService);
    return ShowService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = '';
    }
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + '/api/users/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + '/api/users/')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (userData) {
        alert(userData.firstName);
        return this.http.post(this.baseUrl + '/api/users/', userData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (userData) {
        return this.http.put(this.baseUrl + '/api/users/' + userData.id, userData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + '/api/users/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    UserService.prototype.followedShowsIdList = function (user) {
        var ids = [];
        user.followedShows.forEach(function (followedShow) {
            ids.push(followedShow.showId);
        });
        return ids;
    };
    UserService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carlo\eclipse-workspace\tfg\angular-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map