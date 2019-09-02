(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row m-4 p-4 title-block\">\n    <div class=\"col\"></div>\n    <h1>\n      {{ title }}\n    </h1>\n    <div class=\"col\"></div>\n  </div>\n\n  <div class=\"row m-4 p-4 option-block\">\n    <div class=\"col-md-12\">\n      <app-search-bar\n        (sentimentInfo)=\"onSentimentInfo($event)\"\n        (onLoading)=\"onLoading($event)\"\n        (subredditTitle)=\"onSubredditTitle($event)\"\n        [loading]=\"loading\"\n      ></app-search-bar>\n    </div>\n  </div>\n\n  <div class=\"row m-4 main-block\">\n    <app-info-display [loading]=\"loading\" [rawInfo]=\"rawInfo\" [subredditTitle]=\"subredditTitle\"></app-info-display>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info-display/info-display.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info-display/info-display.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showInfo\">\n  <h3 class=\"mt-2\">{{ subredditTitle }}</h3>\n  <div class=\"mt-4 mb-4\">\n    <h4>Average Magnitude: {{ magnitudeAvg.toFixed(4) }}</h4>\n    <h4>Average Score: {{ scoreAvg.toFixed(4) }}</h4>\n  </div>\n  <div *ngFor=\"let info of filteredInfo\">\n    <app-single-post-display [postData]=\"info['detail']\"></app-single-post-display>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-bar/search-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-bar/search-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #searchForm=\"ngForm\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"subreddit-name\"\n          placeholder=\"Enter subreddit here\"\n          [(ngModel)]=\"current_subreddit\"\n        />\n      </div>\n      <div class=\"col-md-2\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{ current_category }}</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button *ngFor=\"let category of categories\" (click)=\"onClickCategory(category)\" ngbDropdownItem>\n              {{ category }}\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"loading\">Search!</button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/single-post-display/single-post-display.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/single-post-display/single-post-display.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4 mt-3 mb-3 single-post\">\n  <h5 class=\"single-line-in-post\" placement=\"right\" [ngbTooltip]=\"titleTipContent\" [style.color]=\"colorize(titleData['score'])\">\n    <ng-template #titleTipContent\n      >Score: {{ titleData[\"score\"].toFixed(4) }}<br />\n      Magnitude: {{ titleData[\"magnitude\"].toFixed(4) }}</ng-template\n    >\n    {{ titleData[\"text\"] }}\n  </h5>\n  <span\n    class=\"single-line-in-post\"\n    *ngFor=\"let data of bodyData\"\n    placement=\"right\"\n    [ngbTooltip]=\"baseTipContent\"\n    [style.color]=\"colorize(data['score'])\"\n  >\n    <ng-template #baseTipContent\n      >Score: {{ data[\"score\"].toFixed(4) }}<br />\n      Magnitude: {{ data[\"magnitude\"].toFixed(4) }}</ng-template\n    >\n    {{ data[\"text\"] }}\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option-block {\n  border: 0.15em solid #b7b7b7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWRveWEvQ29kZS9yZWRkaXQtc2VudGltZW50L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsNEJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1ibG9jayB7XG59XG5cbi5tYWluLWJsb2NrIHtcbn1cblxuLm9wdGlvbi1ibG9jayB7XG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNiN2I3Yjc7XG59XG4iLCIub3B0aW9uLWJsb2NrIHtcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2I3YjdiNztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Reddit Sentiment";
        this.loading = false;
    }
    // Getting sentient analysis info
    onSentimentInfo(info) {
        this.rawInfo = info;
    }
    // If loading
    onLoading(loading) {
        this.loading = loading;
    }
    onSubredditTitle(subredditTitle) {
        this.subredditTitle = subredditTitle;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_info_display_info_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/info-display/info-display.component */ "./src/app/components/info-display/info-display.component.ts");
/* harmony import */ var _components_single_post_display_single_post_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/single-post-display/single-post-display.component */ "./src/app/components/single-post-display/single-post-display.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarComponent"], _components_info_display_info_display_component__WEBPACK_IMPORTED_MODULE_10__["InfoDisplayComponent"], _components_single_post_display_single_post_display_component__WEBPACK_IMPORTED_MODULE_11__["SinglePostDisplayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/info-display/info-display.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/info-display/info-display.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1kaXNwbGF5L2luZm8tZGlzcGxheS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/info-display/info-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/info-display/info-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: InfoDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDisplayComponent", function() { return InfoDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoDisplayComponent = class InfoDisplayComponent {
    constructor() {
        this.showInfo = false;
    }
    ngOnInit() { }
    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    ngOnChanges() {
        if (!this.isEmpty(this.rawInfo)) {
            this.showInfo = true;
            console.log(this.rawInfo);
            // Reset
            let magnitudeSum = 0;
            let scoreSum = 0;
            let numberTotal = 0;
            this.filteredInfo = [];
            // Add to sums and filter for substantive data
            Object.keys(this.rawInfo).forEach(key => {
                // Check that the data is not empty
                if (this.rawInfo[key]["detail"].length !== 0) {
                    this.filteredInfo.push(this.rawInfo[key]);
                    numberTotal++;
                    scoreSum += this.rawInfo[key]["overall_score"];
                    magnitudeSum += this.rawInfo[key]["overall_magnitude"];
                }
            });
            this.scoreAvg = scoreSum / numberTotal;
            this.magnitudeAvg = magnitudeSum / numberTotal;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "rawInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "subredditTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "loading", void 0);
InfoDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-info-display",
        template: __webpack_require__(/*! raw-loader!./info-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info-display/info-display.component.html"),
        styles: [__webpack_require__(/*! ./info-display.component.scss */ "./src/app/components/info-display/info-display.component.scss")]
    })
], InfoDisplayComponent);



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_reddit_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-auth.service */ "./src/app/services/reddit-auth.service.ts");



let SearchBarComponent = class SearchBarComponent {
    constructor(redditAuthService) {
        this.redditAuthService = redditAuthService;
        this.sentimentInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subredditTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.current_subreddit = "";
        this.current_category = "Top";
        this.categories = ["Hot", "Top", "New"];
    }
    ngOnInit() { }
    onSubmit() {
        // If already loading, don't do anything
        if (this.loading) {
            return;
        }
        // Send request
        let promise = this.redditAuthService.getAnalyze(this.current_subreddit, this.current_category);
        // Currently loading
        this.onLoading.emit(true);
        this.subredditTitle.emit(this.current_subreddit);
        // When request done, send to parent
        promise.subscribe(res => {
            this.sentimentInfo.emit(res);
            this.onLoading.emit(false);
        });
    }
    onClickCategory(category) {
        this.current_category = category;
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _services_reddit_auth_service__WEBPACK_IMPORTED_MODULE_2__["RedditAuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchBarComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "sentimentInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "onLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "subredditTitle", void 0);
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-bar",
        template: __webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-bar/search-bar.component.html"),
        styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/components/search-bar/search-bar.component.scss")]
    })
], SearchBarComponent);



/***/ }),

/***/ "./src/app/components/single-post-display/single-post-display.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/single-post-display/single-post-display.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-line-in-post:hover {\n  font-weight: bold;\n}\n\n.single-post {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWRveWEvQ29kZS9yZWRkaXQtc2VudGltZW50L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLXBvc3QtZGlzcGxheS9zaW5nbGUtcG9zdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpbmdsZS1wb3N0LWRpc3BsYXkvc2luZ2xlLXBvc3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUdFLGlCQUFBO0FDRko7O0FETUE7RUFDRSx5QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcG9zdC1kaXNwbGF5L3NpbmdsZS1wb3N0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLWxpbmUtaW4tcG9zdCB7XG4gICY6aG92ZXIge1xuICAgIC8vIFVzZSBpbnN0ZWFkIG9mIGJvbGRpbmcgaW4gb3JkZXIgdG8gcHJlc2VydmUgd2lkdGhcbiAgICAvLyB0ZXh0LXNoYWRvdzogLTAuMDZleCAwIGJsYWNrLCAwLjA2ZXggMCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uc2luZ2xlLXBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuIiwiLnNpbmdsZS1saW5lLWluLXBvc3Q6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpbmdsZS1wb3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/single-post-display/single-post-display.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/single-post-display/single-post-display.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SinglePostDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostDisplayComponent", function() { return SinglePostDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SinglePostDisplayComponent = class SinglePostDisplayComponent {
    constructor() { }
    ngOnInit() { }
    ngOnChanges() {
        // Split postData into title and normal text
        this.titleData = this.postData[0];
        this.bodyData = JSON.parse(JSON.stringify(this.postData));
        this.bodyData.shift();
    }
    colorize(num) {
        let colors = ["#20df00", "#40bf00", "#609f00", "#7f8000", "#9f6000", "#bf4000", "#df2000"];
        if (num < -1) {
            return colors[6];
        }
        else if (num < -0.6) {
            return colors[5];
        }
        else if (num < -0.3) {
            return colors[4];
        }
        else if (num < 0) {
            return colors[3];
        }
        else if (num < 0.3) {
            return colors[2];
        }
        else if (num < 0.6) {
            return colors[1];
        }
        else {
            return colors[0];
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SinglePostDisplayComponent.prototype, "postData", void 0);
SinglePostDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-single-post-display",
        template: __webpack_require__(/*! raw-loader!./single-post-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/single-post-display/single-post-display.component.html"),
        styles: [__webpack_require__(/*! ./single-post-display.component.scss */ "./src/app/components/single-post-display/single-post-display.component.scss")]
    })
], SinglePostDisplayComponent);



/***/ }),

/***/ "./src/app/services/reddit-auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/reddit-auth.service.ts ***!
  \*************************************************/
/*! exports provided: RedditAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditAuthService", function() { return RedditAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RedditAuthService = class RedditAuthService {
    constructor(httpClient, urlSerializer) {
        this.httpClient = httpClient;
        this.urlSerializer = urlSerializer;
        this.getToken();
    }
    getToken() {
        if (window.location.search !== "") {
            // If already authorized (user logged into reddit), parse the link
            let parsedTree = this.urlSerializer.parse(window.location.search);
            if ("error" in parsedTree.queryParams) {
                // Error was found
                console.log(parsedTree.queryParams.error);
                return;
            }
            // Parse code and send to backend for authorization
            let code = parsedTree.queryParams.code;
            console.log("Requesting access token with code: " + code);
            this.httpClient.get(`/api/auth?code=${code}`).subscribe(res => {
                console.log("Access token: " + res["access_token"]);
                this.access_token = res["access_token"];
            });
        }
        else {
            window.location.replace(`https://www.reddit.com/api/v1/authorize?` +
                `client_id=4YzuQQE-yhj8wQ` +
                `&response_type=code` +
                `&state=state` +
                `&redirect_uri=${window.location.origin}` +
                `&duration=temporary` +
                `&scope=read`);
        }
    }
    // Calls backend to get reddit data and analyze
    getAnalyze(subreddit, category) {
        let body = {
            subreddit: subreddit,
            category: category,
            access_token: this.access_token
        };
        return this.httpClient.post("/api/analyze", body);
    }
};
RedditAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["UrlSerializer"] }
];
RedditAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], RedditAuthService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hidoya/Code/reddit-sentiment/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map