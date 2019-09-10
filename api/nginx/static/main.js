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

module.exports = "<nav class=\"navbar navbar-bg\">\n  <div class=\"titleSize\">Reddit Sentiment</div>\n  <ul class=\"navbar-nav navbar-center\">\n    <li>\n      <a class=\"m-3 navLinkSize\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n    </li>\n    <li>\n      <a class=\"m-3 navLinkSize\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container\" style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about-display/about-display.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about-display/about-display.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"p-4\">About</h4>\n<div class=\"row m-4 p-4\">\n  <div class=\"col-md-12\">\n    <p class=\"text-center\">\n      This webapp allows you to put in any subreddit or comment thread into the search bar, and it returns the general \"sentiment\"\n      of the comments and posts. The sorting category and the number of comments/posts to analyze can be customized. \"Sentiment\"\n      just refers to how the sentence comes from or evokes certain feelings/emotions. Sentiment analysis is done by Google Cloud\n      sentiment analysis api.\n    </p>\n    <p>\n      Reddit login is required to get subreddit/comment information from reddit (otherwise, reddit thinks I'm spamming them with a\n      lot of requests).\n    </p>\n    <p class=\"text-center\">This website requires cookies to be enabled.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info-display/info-display.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info-display/info-display.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mt-2\">{{ redditTitle }}</h3>\n\n<div *ngIf=\"error; then errorDom; else successDom\"></div>\n\n<ng-template #successDom>\n  <div *ngIf=\"showInfo && !loading\">\n    <div class=\"mt-4 mb-4\">\n      <h4 [style.color]=\"color(scoreAvg)\">Average Score: {{ scoreAvg.toFixed(1) }}</h4>\n      <p>Score is from -10 to 10 (very negative to very positive).</p>\n    </div>\n    <div *ngFor=\"let info of filteredInfo\">\n      <app-single-post-display [postData]=\"info\"></app-single-post-display>\n    </div>\n  </div>\n  <ngx-spinner bdOpacity=\"0.3\" size=\"medium\" color=\"#fff\" type=\"ball-climbing-dot\" [fullScreen]=\"true\">\n    <p style=\"color: white\">Loading...</p>\n  </ngx-spinner>\n</ng-template>\n\n<ng-template #errorDom>\n  <div class=\"mt-4 mb-4\">Errors found while getting data.</div>\n  <div>{{ errorStr }}</div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-display/main-display.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-display/main-display.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"p-4\">Reddit Sentiment</h4>\n\n<div *ngIf=\"this.redditAuthService.access_token.includes('ERROR')\">\n  <p>Error authenticating your reddit access token. Authenticate below.</p>\n  <button class=\"btn btn-outline-primary m-3\" (click)=\"onReauthClick()\">\n    Authenticate\n  </button>\n</div>\n\n<div class=\"row m-4 p-4 option-block\" (mouseenter)=\"showDescription = true\" (mouseleave)=\"showDescription = false\">\n  <div class=\"col-md-12\">\n    <app-search-bar\n      (onRawInfo)=\"onRawInfo($event)\"\n      (onLoading)=\"onLoading($event)\"\n      (onError)=\"onError($event)\"\n      (onRedditTitle)=\"onRedditTitle($event)\"\n      (onErrorStr)=\"onErrorStr($event)\"\n      [loading]=\"loading\"\n    ></app-search-bar>\n    <div [className]=\"'description ' + (showDescription ? 'show-css' : 'hide-css')\">\n      <p>Enter the url of the subreddit or the reddit post.</p>\n      <p>Enter the number of posts to analyze.</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row m-4\">\n  <app-info-display\n    class=\"fullWidth\"\n    [loading]=\"loading\"\n    [rawInfo]=\"rawInfo\"\n    [redditTitle]=\"redditTitle\"\n    [error]=\"error\"\n    [errorStr]=\"errorStr\"\n  ></app-info-display>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-bar/search-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-bar/search-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #searchForm=\"ngForm\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mt-1 mb-1\">\n        <input type=\"text\" class=\"form-control\" name=\"reddit-name\" placeholder=\"Url\" [(ngModel)]=\"current_reddit\" />\n      </div>\n      <div class=\"col-md-1 mt-1 mb-1\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>{{ current_category }}</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button *ngFor=\"let category of categories\" (click)=\"current_category = category\" ngbDropdownItem>\n              {{ category }}\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-1 mt-1 mb-1\">\n        <div ngbDropdown class=\"d-inline-block\">\n          <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>{{ current_limit }}</button>\n          <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button *ngFor=\"let limit of limits\" (click)=\"current_limit = limit\" ngbDropdownItem>\n              {{ limit }}\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2 mt-1 mb-1\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"disableClick()\">Search!</button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/single-post-display/single-post-display.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/single-post-display/single-post-display.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4 mt-3 mb-3 single-post\">\n  <h5 class=\"single-line-in-post\" placement=\"right\" [ngbTooltip]=\"titleTipContent\" [style.color]=\"color(titleData['score'])\">\n    <ng-template #titleTipContent>Score: {{ titleData[\"score\"] }}</ng-template>\n    {{ titleData[\"text\"] }}\n  </h5>\n  <span\n    class=\"single-line-in-post\"\n    *ngFor=\"let data of bodyData\"\n    placement=\"right\"\n    [ngbTooltip]=\"baseTipContent\"\n    [style.color]=\"color(data['score'])\"\n  >\n    <ng-template #baseTipContent>Score: {{ data[\"score\"] }}</ng-template>\n    {{ data[\"text\"] }}\n  </span>\n</div>\n"

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
/* harmony import */ var _components_main_display_main_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-display/main-display.component */ "./src/app/components/main-display/main-display.component.ts");
/* harmony import */ var _components_about_display_about_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-display/about-display.component */ "./src/app/components/about-display/about-display.component.ts");





const routes = [
    { path: "", component: _components_main_display_main_display_component__WEBPACK_IMPORTED_MODULE_3__["MainDisplayComponent"], pathMatch: "full" },
    {
        path: "about",
        component: _components_about_display_about_display_component__WEBPACK_IMPORTED_MODULE_4__["AboutDisplayComponent"]
    }
];
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

module.exports = ".navbar-bg {\n  background-color: #2c3157;\n  flex-direction: row;\n  padding: 1.2em;\n}\n\n.navbar-center {\n  justify-content: center;\n  flex-direction: row;\n}\n\n.navLinkSize {\n  font-size: 1.2em;\n  color: #a0a4d7;\n}\n\n.titleSize {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWRveWEvQ29kZS9yZWRkaXQtc2VudGltZW50L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzMTU3O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxLjJlbTtcbn1cblxuLm5hdmJhci1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm5hdkxpbmtTaXplIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICNhMGE0ZDc7XG59XG5cbi50aXRsZVNpemUge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuIiwiLm5hdmJhci1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzMxNTc7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEuMmVtO1xufVxuXG4ubmF2YmFyLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2TGlua1NpemUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogI2EwYTRkNztcbn1cblxuLnRpdGxlU2l6ZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"

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
    constructor() { }
    ngOnInit() { }
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_info_display_info_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/info-display/info-display.component */ "./src/app/components/info-display/info-display.component.ts");
/* harmony import */ var _components_single_post_display_single_post_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/single-post-display/single-post-display.component */ "./src/app/components/single-post-display/single-post-display.component.ts");
/* harmony import */ var _components_main_display_main_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main-display/main-display.component */ "./src/app/components/main-display/main-display.component.ts");
/* harmony import */ var _components_about_display_about_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-display/about-display.component */ "./src/app/components/about-display/about-display.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"], _components_info_display_info_display_component__WEBPACK_IMPORTED_MODULE_12__["InfoDisplayComponent"], _components_single_post_display_single_post_display_component__WEBPACK_IMPORTED_MODULE_13__["SinglePostDisplayComponent"], _components_main_display_main_display_component__WEBPACK_IMPORTED_MODULE_14__["MainDisplayComponent"], _components_about_display_about_display_component__WEBPACK_IMPORTED_MODULE_15__["AboutDisplayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about-display/about-display.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/about-display/about-display.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtZGlzcGxheS9hYm91dC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/about-display/about-display.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/about-display/about-display.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDisplayComponent", function() { return AboutDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutDisplayComponent = class AboutDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-display',
        template: __webpack_require__(/*! raw-loader!./about-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about-display/about-display.component.html"),
        styles: [__webpack_require__(/*! ./about-display.component.scss */ "./src/app/components/about-display/about-display.component.scss")]
    })
], AboutDisplayComponent);



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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _utility_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/color */ "./src/app/utility/color.ts");




let InfoDisplayComponent = class InfoDisplayComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.error = false;
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
        if (this.loading) {
            this.spinner.show();
        }
        else {
            this.spinner.hide();
        }
        if (!this.isEmpty(this.rawInfo)) {
            this.showInfo = true;
            // Reset
            let scoreSum = 0;
            let numberTotal = 0;
            this.filteredInfo = [];
            // Add to sums and filter for substantive data
            Object.keys(this.rawInfo).forEach(key => {
                // Check that the data is not empty
                if (this.rawInfo[key]["detail"].length !== 0) {
                    this.filteredInfo.push(this.rawInfo[key]["detail"]);
                    numberTotal++;
                    scoreSum += this.rawInfo[key]["overall_score"];
                }
            });
            this.scoreAvg = scoreSum / numberTotal;
        }
    }
    color(num) {
        return Object(_utility_color__WEBPACK_IMPORTED_MODULE_3__["colorize"])(num);
    }
};
InfoDisplayComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "rawInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "redditTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InfoDisplayComponent.prototype, "errorStr", void 0);
InfoDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-info-display",
        template: __webpack_require__(/*! raw-loader!./info-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info-display/info-display.component.html"),
        styles: [__webpack_require__(/*! ./info-display.component.scss */ "./src/app/components/info-display/info-display.component.scss")]
    })
], InfoDisplayComponent);



/***/ }),

/***/ "./src/app/components/main-display/main-display.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/main-display/main-display.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option-block {\n  border: 0.15em solid #b7b7b7;\n}\n\n.fullWidth {\n  width: 100%;\n}\n\n.description {\n  transition: max-height 0.1s ease-in-out;\n}\n\n.show-css {\n  max-height: 15em;\n  overflow-y: hidden;\n}\n\n.hide-css {\n  max-height: 0em;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWRveWEvQ29kZS9yZWRkaXQtc2VudGltZW50L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1kaXNwbGF5L21haW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWRpc3BsYXkvbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1kaXNwbGF5L21haW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24tYmxvY2sge1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjYjdiN2I3O1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctY3NzIHtcbiAgbWF4LWhlaWdodDogMTVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uaGlkZS1jc3Mge1xuICBtYXgtaGVpZ2h0OiAwZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbiIsIi5vcHRpb24tYmxvY2sge1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjYjdiN2I3O1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctY3NzIHtcbiAgbWF4LWhlaWdodDogMTVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uaGlkZS1jc3Mge1xuICBtYXgtaGVpZ2h0OiAwZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/main-display/main-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-display/main-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDisplayComponent", function() { return MainDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_reddit_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-auth.service */ "./src/app/services/reddit-auth.service.ts");



let MainDisplayComponent = class MainDisplayComponent {
    constructor(redditAuthService) {
        this.redditAuthService = redditAuthService;
        this.loading = false;
        this.error = false;
        this.showDescription = false;
    }
    ngOnInit() { }
    onReauthClick() {
        this.redditAuthService.resetCookie();
        this.redditAuthService.gotoRedditOauth();
    }
    // Getting sentient analysis info
    onRawInfo(info) {
        this.rawInfo = info;
    }
    // If loading
    onLoading(loading) {
        this.loading = loading;
    }
    onRedditTitle(redditTitle) {
        this.redditTitle = redditTitle;
    }
    onError(error) {
        this.error = error;
    }
    onErrorStr(errorStr) {
        this.errorStr = errorStr;
    }
};
MainDisplayComponent.ctorParameters = () => [
    { type: _services_reddit_auth_service__WEBPACK_IMPORTED_MODULE_2__["RedditAuthService"] }
];
MainDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main-display",
        template: __webpack_require__(/*! raw-loader!./main-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-display/main-display.component.html"),
        styles: [__webpack_require__(/*! ./main-display.component.scss */ "./src/app/components/main-display/main-display.component.scss")]
    })
], MainDisplayComponent);



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
        this.onRawInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onErrorStr = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRedditTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.current_reddit = "";
        this.current_category = "Top";
        this.current_limit = 5;
        this.categories = ["Hot", "Top", "New"];
        this.limits = [5, 10, 20, 50];
    }
    ngOnInit() { }
    onSubmit() {
        // If already loading, don't do anything
        if (this.loading) {
            return;
        }
        // Send request
        let promise = this.redditAuthService.getAnalyze(this.current_reddit, this.current_category, this.current_limit);
        // Currently loading
        this.onLoading.emit(true);
        this.onError.emit(false);
        // When request done, send to parent
        promise.subscribe(res => {
            if (res["error"]) {
                this.onError.emit(true);
                this.onErrorStr.emit(res["error"]);
                this.onLoading.emit(false);
            }
            else {
                this.onError.emit(false);
                this.onRawInfo.emit(res["sentiment_dict"]);
                this.onRedditTitle.emit(res["title"]);
                this.onLoading.emit(false);
            }
        });
    }
    disableClick() {
        return this.loading || this.redditAuthService.access_token.includes("ERROR");
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
], SearchBarComponent.prototype, "onRawInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "onLoading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "onError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "onErrorStr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchBarComponent.prototype, "onRedditTitle", void 0);
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

module.exports = ".single-line-in-post:hover {\n  font-weight: bold;\n}\n\n.single-post {\n  background-color: #0000004d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWRveWEvQ29kZS9yZWRkaXQtc2VudGltZW50L2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvc2luZ2xlLXBvc3QtZGlzcGxheS9zaW5nbGUtcG9zdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpbmdsZS1wb3N0LWRpc3BsYXkvc2luZ2xlLXBvc3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUdFLGlCQUFBO0FDRko7O0FETUE7RUFDRSwyQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcG9zdC1kaXNwbGF5L3NpbmdsZS1wb3N0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLWxpbmUtaW4tcG9zdCB7XG4gICY6aG92ZXIge1xuICAgIC8vIFVzZSBpbnN0ZWFkIG9mIGJvbGRpbmcgaW4gb3JkZXIgdG8gcHJlc2VydmUgd2lkdGhcbiAgICAvLyB0ZXh0LXNoYWRvdzogLTAuMDZleCAwIGJsYWNrLCAwLjA2ZXggMCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uc2luZ2xlLXBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNGQ7XG59XG4iLCIuc2luZ2xlLWxpbmUtaW4tcG9zdDpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2luZ2xlLXBvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNGQ7XG59Il19 */"

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
/* harmony import */ var _utility_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/color */ "./src/app/utility/color.ts");



let SinglePostDisplayComponent = class SinglePostDisplayComponent {
    constructor() { }
    ngOnInit() { }
    ngOnChanges() {
        // Split postData into title and normal text
        this.titleData = this.postData[0];
        this.bodyData = JSON.parse(JSON.stringify(this.postData));
        this.bodyData.shift();
    }
    color(num) {
        return Object(_utility_color__WEBPACK_IMPORTED_MODULE_2__["colorize"])(num);
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let RedditAuthService = class RedditAuthService {
    constructor(httpClient, urlSerializer, cookieService) {
        this.httpClient = httpClient;
        this.urlSerializer = urlSerializer;
        this.cookieService = cookieService;
        this.access_token = "ERROR FOUND. AUTHENTICATE BELOW.";
        this.getToken();
    }
    resetCookie() {
        this.cookieService.deleteAll();
    }
    getToken() {
        // If accesstoken stored in cookie service and less than 1 hour passed, use that accesstoken
        let dateCookie = this.cookieService.get("date") == "" ? 0 : parseInt(this.cookieService.get("date"));
        let currentDate = new Date();
        let dateNow = currentDate.getTime() / 1000;
        // If around 90% of an hour has passed since last access_token, just get a new access token
        // If not, use the cookie's access token
        if ((dateNow - dateCookie) / 3600 < 0.9 && this.cookieService.get("access_token") !== "") {
            // Use cookie's access token
            this.access_token = this.cookieService.get("access_token");
        }
        else if (window.location.search !== "") {
            this.getAccessToken();
        }
    }
    getAccessToken() {
        // If already authorized (user logged into reddit), parse the link
        let parsedTree = this.urlSerializer.parse(window.location.search);
        // If links has error, return
        if ("error" in parsedTree.queryParams) {
            this.cookieService.set("access_token", "ERROR FOUND. AUTHENTICATE BELOW");
            window.location.assign("../");
        }
        // Parse code and send to backend for authorization
        let code = parsedTree.queryParams.code;
        this.httpClient.get(`/api/auth?code=${code}`).subscribe(res => {
            let currentDate = new Date();
            let secondsPassed = currentDate.getTime() / 1000;
            if (res["access_token"].includes("ERROR")) {
                this.cookieService.set("date", "0");
                this.cookieService.set("access_token", "");
            }
            else {
                this.cookieService.set("date", secondsPassed.toString());
                this.cookieService.set("access_token", res["access_token"]);
            }
            // Redirect to mainpage
            window.location.assign("../");
        });
    }
    gotoRedditOauth() {
        window.location.replace(`https://www.reddit.com/api/v1/authorize?` +
            `client_id=4YzuQQE-yhj8wQ` +
            `&response_type=code` +
            `&state=state` +
            `&redirect_uri=${window.location.origin}` +
            `&duration=temporary` +
            `&scope=read`);
    }
    // Calls backend to get reddit data and analyze
    getAnalyze(reddit_str, category, limit) {
        let body = {
            reddit_str: reddit_str,
            category: category,
            limit: limit,
            access_token: this.access_token
        };
        return this.httpClient.post("/api/analyze", body);
    }
};
RedditAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["UrlSerializer"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
RedditAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], RedditAuthService);



/***/ }),

/***/ "./src/app/utility/color.ts":
/*!**********************************!*\
  !*** ./src/app/utility/color.ts ***!
  \**********************************/
/*! exports provided: colorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorize", function() { return colorize; });
function colorize(num) {
    // From green to red
    let colors = ["#20df00", "#40bf00", "#609f00", "#a9aea2", "#a9aea2", "#fb6969", "#e6482d", "#ff0000"];
    // Range:
    // inf to 0.75
    // 0.75 to 0.50
    // 0.50 to 0.25
    // 0.25 to 0.00
    // 0.00 to -0.25
    // -0.25 to -0.50
    // -0.50 to -0.75
    // -0.75 to inf
    if (num > 7.5) {
        return colors[0];
    }
    else if (num > 5) {
        return colors[1];
    }
    else if (num > 2.5) {
        return colors[2];
    }
    else if (num > 0) {
        return colors[3];
    }
    else if (num > -2.5) {
        return colors[4];
    }
    else if (num > -5) {
        return colors[5];
    }
    else if (num > -7.5) {
        return colors[6];
    }
    else {
        return colors[7];
    }
}


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