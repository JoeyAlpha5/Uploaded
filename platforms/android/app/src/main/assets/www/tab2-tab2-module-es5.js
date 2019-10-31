(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar placeholder=\"Search artists..\" [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\">\n     <!--  <span class=\"searchFilter\" id=\"selectedTag\">Artists</span>-->\n     <!-- <span class=\"searchFilter\">Videos</span>-->\n  </div>\n\n  <ion-item button *ngFor='let item of ( results | async)'>\n      <p *ngIf=\"item.id != userID\" (click)=\"viewProfile(item.id,item.email)\">{{ item.first_name + \" \"  + item.last_name }} </p>\n  </ion-item>\n\n  <div id=\"oneBigOne\" *ngFor='let one of ( oneSearchContent | async)' [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + one.file + '.jpg)'}\">\n    <div id=\"playlistPreview\" (click)=\"viewPost(one.post_id)\" (press)=\"Playlist(one.post_id)\">\n      <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ one.likes }} likes</span>\n    </div>\n  </div>\n\n  <div id=\"playlist\" *ngFor='let item of ( searchContent | async)'  [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/uploaded/video/upload/v1567818053/' + item.file + '.jpg)'}\" >\n    <div id=\"playlistPreview\" (click)=\"viewPost(item.post_id)\" (press)=\"Playlist(item.post_id)\">\n      <ion-icon name=\"thumbs-up\"></ion-icon><span id=\"metric\">{{ item.likes }} likes</span>\n    </div>\n  </div> \n\n\n  <div id=\"bottomPadding\"></div>\n \n</ion-content>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
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
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#playlists {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  padding-bottom: 20px;\n}\ndiv#playlists div#playlist {\n  width: 33.3%;\n  height: 115px;\n  float: left;\n  background-size: cover !important;\n}\n#playlistPreview {\n  float: left;\n  color: white;\n  font-weight: lighter;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  padding-top: 67%;\n  text-align: left;\n  padding-left: 7px;\n  font-size: 13px;\n}\ndiv#oneBigOne {\n  width: 99.4%;\n  height: 270px;\n  margin-bottom: 0.5px;\n  margin-left: 1px;\n}\nspan#metric {\n  margin-left: 5px;\n}\ndiv#playlist {\n  width: 33%;\n  float: left;\n  margin-top: 1px;\n  margin-left: 1px;\n}\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n#selectedTag {\n  font-weight: bold;\n}\ndiv#bottomPadding {\n  bottom: 0px;\n  height: 268px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ0NOO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7QUNESjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I3BsYXlsaXN0cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgXG4gICAgZGl2I3BsYXlsaXN0IHtcbiAgICAgIHdpZHRoOiAzMy4zJTtcbiAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgfVxuICB9XG4gIFxuICBcbiAgI3BsYXlsaXN0UHJldmlld3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgICBwYWRkaW5nLXRvcDogNjclO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgZGl2I29uZUJpZ09uZSB7XG4gICAgd2lkdGg6IDk5LjQlO1xuICAgIGhlaWdodDogMjcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cbiAgXG4gIHNwYW4jbWV0cmljIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgZGl2I3BsYXlsaXN0IHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5kaXYjc2VhcmNoVGFncyBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiNzZWxlY3RlZFRhZ3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I2JvdHRvbVBhZGRpbmcge1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyNjhweDtcbiAgd2lkdGg6IDEwMCU7XG59IiwiZGl2I3BsYXlsaXN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5kaXYjcGxheWxpc3RzIGRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMy4zJTtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuI3BsYXlsaXN0UHJldmlldyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gIHBhZGRpbmctdG9wOiA2NyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNvbmVCaWdPbmUge1xuICB3aWR0aDogOTkuNCU7XG4gIGhlaWdodDogMjcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5zcGFuI21ldHJpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmRpdiNwbGF5bGlzdCB7XG4gIHdpZHRoOiAzMyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmRpdiNzZWFyY2hUYWdzIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI3NlbGVjdGVkVGFnIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNib3R0b21QYWRkaW5nIHtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjY4cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(tabs, platform, requests, statusBar, route, storage) {
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
    Tab2Page.prototype.viewPost = function (post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    };
    Tab2Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "#fc8700";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.storage.get('mail').then(function (val) {
            if (val == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.storage.get('current_userID').then(function (val) {
                    _this.userID = val;
                    _this.searchContent = _this.requests.searchPage(_this.profile_url);
                    _this.oneSearchContent = _this.requests.searchPageOneBig(_this.profile_url);
                    _this.oneSearchContent.subscribe();
                    _this.searchContent.subscribe();
                });
            }
        });
    };
    Tab2Page.prototype.getSearchResults = function () {
        console.log(this.searchTerm);
        var user_email = JSON.parse(localStorage.getItem('email'));
        this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);
    };
    Tab2Page.prototype.viewProfile = function (user_id, email) {
        console.log("user", user_id);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map