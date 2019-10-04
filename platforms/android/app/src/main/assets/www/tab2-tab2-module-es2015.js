(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n\n  <!-- Searchbar with cancel button always shown -->\n  <!-- Animated Searchbar -->\n  <ion-searchbar [(ngModel)]=\"searchTerm\" animated (ionChange) = \"getSearchResults()\"></ion-searchbar>\n  <div id=\"searchTags\">\n      <span class=\"searchFilter\" id=\"selectedTag\">People</span>\n      <span class=\"searchFilter\">Videos</span>\n  </div>\n\n  <ion-item button *ngFor='let item of ( results | async)'>\n      <p (click)=\"viewProfile(item.id,item.email)\">{{ item.first_name + \" \"  + item.last_name }} </p>\n  </ion-item>\n\n  <div id=\"bottomBar\"></div>\n</ion-content>\n"

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

module.exports = "#bottomBar {\n  background: rgba(0, 0, 0, 0.38);\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 57px;\n}\n\ndiv#searchTags span {\n  margin-left: 15px;\n  color: gray;\n  font-size: 12px;\n}\n\n#selectedTag {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3R0b21CYXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTdweDtcbn1cblxuXG5kaXYjc2VhcmNoVGFncyBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiNzZWxlY3RlZFRhZ3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIjYm90dG9tQmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU3cHg7XG59XG5cbmRpdiNzZWFyY2hUYWdzIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI3NlbGVjdGVkVGFnIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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




let Tab2Page = class Tab2Page {
    constructor(requests, route) {
        this.requests = requests;
        this.route = route;
        this.searchTerm = '';
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
    }
    ionViewDidEnter() {
        var Email = JSON.parse(localStorage.getItem('email'));
        var Password = localStorage.getItem('password');
        if (Email == null && Password == null) {
            window.location.href = '';
            return;
        }
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map