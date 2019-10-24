(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar placeholder=\"Search artists..\" [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\">\n     <!--  <span class=\"searchFilter\" id=\"selectedTag\">Artists</span>-->\n     <!-- <span class=\"searchFilter\">Videos</span>-->\n  </div>\n\n  <ion-item button *ngFor='let item of ( results | async)'>\n      <p *ngIf=\"item.id != userID\" (click)=\"viewProfile(item.id,item.email)\">{{ item.first_name + \" \"  + item.last_name }} </p>\n  </ion-item>\n\n  <div id=\"playlist\" *ngFor='let item of ( searchContent | async)'  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.file + '.jpg)'}\" >\n    <div id=\"playlistPreview\" (click)=\"viewPost(item.post_id)\" (press)=\"Playlist(item.post_id)\">\n      <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n    </div>\n  </div> \n\n \n</ion-content>\n"

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

module.exports = "div#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 33.3%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\nspan#metric {\n  margin-left: 5px;\n}\ndiv#playlist {\n  width: 33.3%;\n  float: left;\n}\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n#selectedTag {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ0NOO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNwbGF5bGlzdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIFxuICAgIGRpdiNwbGF5bGlzdCB7XG4gICAgICB3aWR0aDogMzMuMyU7XG4gICAgICBoZWlnaHQ6IDExNXB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgfVxuICBcbiAgXG4gICNwbGF5bGlzdFByZXZpZXd7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gICAgcGFkZGluZy10b3A6IDY3JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBcbiAgc3BhbiNtZXRyaWMge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICBkaXYjcGxheWxpc3Qge1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuZGl2I3NlYXJjaFRhZ3Mgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jc2VsZWN0ZWRUYWd7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMy4zJTtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnNwYW4jbWV0cmljIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuZGl2I3BsYXlsaXN0IHtcbiAgd2lkdGg6IDMzLjMlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuZGl2I3NlYXJjaFRhZ3Mgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jc2VsZWN0ZWRUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        // this.platform.backButton.subscribe(() => {
        // });
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
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
                    this.searchContent.subscribe();
                });
            }
        });
    }
    getSearchResults() {
        console.log(this.searchTerm);
        var user_email = JSON.parse(localStorage.getItem('email'));
        this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);
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