(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar placeholder=\"Search artists..\" [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\" *ngIf=\"displaySearchVideos == false\">\n    <ion-chip (click)=\"setSearchFilter('artists')\">\n      <ion-label>Artists</ion-label>\n    </ion-chip>\n    <ion-chip (click)=\"setSearchFilter('places')\">\n      <ion-label>Places</ion-label>\n    </ion-chip>\n    <ion-chip (click)=\"setSearchFilter('tags')\">\n      <ion-label>Tags</ion-label>\n    </ion-chip>\n  </div>\n\n  <div *ngIf=\"artists == true\">\n    <div *ngFor='let item of ( results | async)'>\n      <ion-item  id=\"searchItem\" button *ngIf=\"item.id != userID\" (click)=\"viewProfile(item.id,item.email)\">\n        <div id=\"dp\" [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + item.image+ '.jpg)'}\"></div>\n        <p>{{ item.first_name + \" \"  + item.last_name }}<br/><span id=\"searchUsername\">@{{ item.username }}</span> </p>\n      </ion-item>\n    </div>\n  </div>\n\n  <div *ngIf=\"places == true\">\n      <p>Places box</p>\n  </div>\n\n  <div *ngIf=\"tags == true\">\n      <p>tags box</p>\n  </div>\n\n  <ion-content *ngIf=\"displaySearchVideos == true\">\n    <div id=\"oneBigOne\" (click)=\"viewPost(one.username)\"  *ngFor='let one of ( oneSearchContent | async)'>\n      <video class=\"searchVids\" playsinline webkit-playsinline loop [muted]=\"true\"  autoplay>\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{one.file}}.mp4\" type=\"video/mp4\">\n      </video>\n    </div>\n\n    <div id=\"playlist\" (click)=\"viewPost(item.username)\" *ngFor='let item of ( searchContent | async)'>\n      <video class=\"searchVids\" playsinline webkit-playsinline loop [muted]=\"true\"  autoplay>\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n    </div> \n  </ion-content>\n\n  <div id=\"bottomPadding\"></div>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span, ion-label, ion-searchbar {\n  font-family: \"helvetica\" !important;\n}\ndiv#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 33.3%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#searchUsername {\n  font-size: 14px;\n  color: gray;\n}\nion-item#searchItem {\n  height: 56px;\n}\ndiv#oneBigOne {\n  width: 99.4%;\n  height: 202px;\n  margin-bottom: 0.5px;\n  margin-left: 1px;\n}\ndiv#dp {\n  width: 30px;\n  height: 30px;\n  background: #d6d6d6;\n  border-radius: 100px;\n  margin-right: 10px;\n  background-size: cover;\n}\nspan#metric {\n  margin-left: 5px;\n}\ndiv#playlist {\n  width: 33%;\n  float: left;\n  height: 100px;\n  margin-top: 1px;\n  margin-left: 1px;\n}\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n#selectedTag {\n  font-weight: bold;\n}\ndiv#bottomPadding {\n  bottom: 0px;\n  height: 268px;\n  width: 100%;\n}\ndiv#playlist video {\n  width: 100%;\n  height: 100%;\n}\n#oneBigOne video {\n  width: 100%;\n  height: 100%;\n}\nvideo {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0FGO0FESUE7RUFDSSxtQ0FBQTtBQ0ZKO0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGRjtBRElFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNGSjtBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7QUNKRjtBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsaUJBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYSc7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5cblxucCwgc3BhbiwgaW9uLWxhYmVsLGlvbi1zZWFyY2hiYXJ7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gIGRpdiNwbGF5bGlzdCB7XG4gICAgd2lkdGg6IDMzLjMlO1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jc2VhcmNoVXNlcm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5pb24taXRlbSNzZWFyY2hJdGVtIHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG5kaXYjb25lQmlnT25lIHtcbiAgd2lkdGg6IDk5LjQlO1xuICBoZWlnaHQ6IDIwMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVweDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuZGl2I2RwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2Q2ZDZkNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuc3BhbiNtZXRyaWMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5kaXYjcGxheWxpc3Qge1xuICB3aWR0aDogMzMlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5kaXYjc2VhcmNoVGFncyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNzZWxlY3RlZFRhZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjYm90dG9tUGFkZGluZyB7XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDI2OHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2I3BsYXlsaXN0IHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI29uZUJpZ09uZSB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnZpZGVvIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByby1SZWd1bGFyLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByb0Rpc3BsYXktU2VtaWJvbGQudHRmKTtcbn1cbnAsIHNwYW4sIGlvbi1sYWJlbCwgaW9uLXNlYXJjaGJhciB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNwbGF5bGlzdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuZGl2I3BsYXlsaXN0cyBkaXYjcGxheWxpc3Qge1xuICB3aWR0aDogMzMuMyU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiNwbGF5bGlzdFByZXZpZXcge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBwYWRkaW5nLXRvcDogNjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI3NlYXJjaFVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWl0ZW0jc2VhcmNoSXRlbSB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuZGl2I29uZUJpZ09uZSB7XG4gIHdpZHRoOiA5OS40JTtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmRpdiNkcCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuZGl2I3NlYXJjaFRhZ3Mgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jc2VsZWN0ZWRUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I2JvdHRvbVBhZGRpbmcge1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyNjhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiNwbGF5bGlzdCB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNvbmVCaWdPbmUgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG52aWRlbyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");








let Tab2Page = class Tab2Page {
    constructor(tabs, platform, requests, statusBar, route, storage) {
        this.tabs = tabs;
        this.platform = platform;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.searchTerm = '';
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displaySearchVideos = true;
        this.default = false;
        this.artists = true;
        this.places = false;
        this.tags = false;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        // this.platform.backButton.subscribe(() => {
        // });
    }
    setSearchFilter(filter) {
        console.log(filter);
        if (filter == "artists") {
            this.artists = true;
            console.log(this.artists);
            this.places = false;
            this.tags = false;
        }
        else if (filter == "places") {
            this.artists = false;
            this.places = true;
            this.tags = false;
        }
        else {
            this.artists = false;
            this.places = false;
            this.tags = true;
        }
    }
    viewPost(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "#fc8700";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.storage.get('mail').then((val) => {
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.storage.get('current_userID').then((val) => {
                    this.userID = val;
                    this.searchContent = this.requests.searchPage(this.profile_url);
                    this.oneSearchContent = this.requests.searchPageOneBig(this.profile_url);
                    this.oneSearchContent.subscribe();
                    this.searchContent.subscribe();
                });
                this.restartVideos();
            }
        });
    }
    restartVideos() {
        //restart videos after every 5sec
        setInterval(() => {
            let videos = document.getElementsByClassName("searchVids");
            for (let i = 0; i < videos.length; i++) {
                let ivideo = videos[i];
                ivideo.currentTime = 0;
                // ivideo.load();
            }
        }, 20000);
    }
    getSearchResults() {
        console.log(this.searchTerm);
        var user_email = JSON.parse(localStorage.getItem('email'));
        this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);
        // this.places_results = this.requests.getSearchPlacesResult(this.profile_url,this.searchTerm,user_email) 
        if (this.searchTerm != "") {
            this.displaySearchVideos = false;
        }
        else {
            this.displaySearchVideos = true;
        }
    }
    viewProfile(user_id, email) {
        console.log("user", user_id);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map