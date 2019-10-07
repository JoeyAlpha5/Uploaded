(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\">\n      <span class=\"searchFilter\" id=\"selectedTag\">People</span>\n      <span class=\"searchFilter\">Videos</span>\n  </div>\n\n  <ion-item button *ngFor='let item of ( results | async)'>\n      <p (click)=\"viewProfile(item.id,item.email)\">{{ item.first_name + \" \"  + item.last_name }} </p>\n  </ion-item>\n\n  <div id=\"bottomBar\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/services/requests.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/requests.service.ts ***!
  \**********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RequestsService = class RequestsService {
    constructor(http) {
        this.http = http;
    }
    //get profile api
    getProfile(url, email) {
        return this.http.get(url, { params: { email: email, type: 'profile' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getProfilePlaylists(url, email) {
        return this.http.get(url, { params: { email: email, type: 'profile' } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["posts"];
        }));
    }
    getSearchResults(url, searchTerm, user_email) {
        return this.http.get(url, { params: { Term: searchTerm, type: 'search', email: user_email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    updateProfile(url, user_email, user_name, first_name, last_name, bio) {
        return this.http.get(url, { params: { type: 'updateProfile', email: user_email, user_name: user_name, first_name: first_name, last_name: last_name, bio: bio } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getFeed(url, user_email) {
        return this.http.get(url, { params: { type: 'feed', email: user_email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    getUserProfile(url, user_id, user_email) {
        return this.http.get(url, { params: { type: 'getUser_UD', user_id: user_id, email: user_email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Follow(url, user_id, user_email) {
        return this.http.get(url, { params: { type: 'Follow', user_id: user_id, email: user_email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Like(url, user_email, post_id) {
        return this.http.get(url, { params: { type: 'like', email: user_email, post: post_id } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["Response"];
        }));
    }
    Upload(url, user_email, file, description, genre, playlisted) {
        return this.http.get(url, { params: { type: 'upload', email: user_email, file: file, description: description, genre: genre, playlisted: playlisted } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results["newly created post_id"];
        }));
    }
    Login(url, user_email, password) {
        return this.http.get(url, { params: { type: 'login', email: user_email, password: password } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => {
            console.log("Results", results);
            return results;
        }));
    }
};
RequestsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RequestsService);



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

module.exports = "#bottomBar {\n  background: #000000;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 60px;\n}\n\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n\n#selectedTag {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvdHRvbUJhcntcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG5cbmRpdiNzZWFyY2hUYWdzIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI3NlbGVjdGVkVGFne1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiNib3R0b21CYXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuZGl2I3NlYXJjaFRhZ3Mgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jc2VsZWN0ZWRUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let Tab2Page = class Tab2Page {
    constructor(requests, route, storage) {
        this.requests = requests;
        this.route = route;
        this.storage = storage;
        this.searchTerm = '';
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
    }
    ionViewDidEnter() {
        this.storage.get('mail').then((val) => {
            if (val == undefined) {
                this.route.navigate(['']);
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
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map