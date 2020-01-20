(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list id=\"notifs\">\n    <ion-item-sliding #item *ngFor='let notif of ( notificationssRef$ | async)?.slice().reverse(); let i = index'>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.the_receiver == username\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1573941740/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span (click)=\"viewPost(notif.post)\"><b>{{ notif.first_name }}</b>  {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/video/upload/v1567818053/' + notif.post_image+ '.jpg)'}\"></div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.to == username\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1573941740/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/video/upload/v1567818053/' + notif.post_image+ '.jpg)'}\"></div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.type == 'follow'\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/image/upload/v1573941740/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\" (click)=\"viewUser(notif.userid)\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span> \n        <div *ngIf=\"notif.post_image\"  id=\"postCover\" (click)=\"viewPost(notif.post)\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/drm3otayc/video/upload/v1567818053/' + notif.post_image+ '.jpg)'}\">\n        </div>\n        <span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span>\n      </ion-item>\n      <!-- <ion-item-options side=\"start\" id=\"options\">\n        <button ion-button id='viewUser'  (click)=\"viewUser(notif.userid)\"><ion-icon name=\"contact\"></ion-icon><br>User</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.the_receiver == username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.comment_to== username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewChat' (click)=\"viewChat(notif.userid,notif.first_name,notif.last_name,notif,username)\"><ion-icon name=\"text\"></ion-icon><br>Chat</button>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span {\n  font-family: \"helvetica\" !important;\n}\ndiv#dp {\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background-size: cover !important;\n  margin-left: 10px;\n  margin-top: 10px;\n}\nion-item-options#options {\n  margin-top: 10px;\n}\n#viewUser {\n  background: #4CAF50;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#viewChat {\n  background: black;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n.datePlaceholder {\n  font-size: 12px;\n  color: gray;\n  margin-left: 4px;\n}\ndiv#postCover {\n  width: 40px;\n  height: 40px;\n  float: right;\n  background: #f7f7f7;\n  right: 0;\n  position: absolute;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-size: cover !important;\n}\n#viewPost {\n  background: #607D8B;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#notifs {\n  background: #f7f7f7;\n}\n#notifs #actualNotif {\n  font-size: 13px;\n  margin-top: 10px;\n}\n#notifs #actualNotif #msg {\n  margin-left: 2px;\n  width: 189px;\n  margin-bottom: 14px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0RKO0FES0U7RUFDSSxtQ0FBQTtBQ0hOO0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURPQTtFQUNJLGdCQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFI7QURLUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnO1xuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbiAgfVxuICBcbiAgQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYUInO1xuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvRGlzcGxheS1TZW1pYm9sZC50dGYpO1xuICB9XG5cblxuICBwLCBzcGFue1xuICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG4gIH1cblxuZGl2I2RwIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbmlvbi1pdGVtLW9wdGlvbnMjb3B0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3ZpZXdVc2Vye1xuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdmlld0NoYXR7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGF0ZVBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuZGl2I3Bvc3RDb3ZlciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuI3ZpZXdQb3N0e1xuICAgIGJhY2tncm91bmQ6ICM2MDdEOEI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jbm90aWZze1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgI2FjdHVhbE5vdGlme1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcblxuICAgICAgICAjbXNne1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxODlweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCI7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCI7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvRGlzcGxheS1TZW1pYm9sZC50dGYpO1xufVxucCwgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNkcCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyNvcHRpb25zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3ZpZXdVc2VyIHtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiN2aWV3Q2hhdCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmRhdGVQbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmRpdiNwb3N0Q292ZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiN2aWV3UG9zdCB7XG4gIGJhY2tncm91bmQ6ICM2MDdEOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jbm90aWZzIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbn1cbiNub3RpZnMgI2FjdHVhbE5vdGlmIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI25vdGlmcyAjYWN0dWFsTm90aWYgI21zZyB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHdpZHRoOiAxODlweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var Tab3Page = /** @class */ (function () {
    function Tab3Page(tabs, database, statusBar, storage, route) {
        var _this = this;
        this.tabs = tabs;
        this.database = database;
        this.statusBar = statusBar;
        this.storage = storage;
        this.route = route;
        this.notificationssRef$ = this.database.list("notification", function (ref) { return ref.orderByChild('date'); }).valueChanges();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.notificationssRef$.subscribe(function (x) {
            console.log(x);
        });
        this.storage.get("current_userID").then(function (val) {
            _this.database.object("userReceivedNotification/" + val).set(false);
            _this.tabs.notifBadge = false;
        });
    }
    Tab3Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "#fc8700";
        this.tabs.tab5 = "white";
    };
    Tab3Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        // Put here the code you want to execute
        this.storage.get('username').then(function (val) {
            console.log('Your username is', val);
            _this.username = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (_this.username == undefined) {
                _this.route.navigate(['login']);
            }
            //date calc
            _this.notificationssRef$.subscribe(function (notif) {
                var notifi = notif.reverse();
                for (var count = 0; count < notif.length; count++) {
                    if (notifi[count].date) {
                        var new_date = new Date(notifi[count].date);
                        var month = new_date.getMonth();
                        var day = new_date.getDay();
                        var today = new Date();
                        console.log(new_date, today);
                        console.log(month == today.getMonth());
                        console.log(day == today.getDay());
                        if (month == today.getMonth() && day == today.getDay()) {
                            if (today.getHours() > new_date.getHours() && new_date.getHours() > 0) {
                                var passed_hours = today.getHours() - new_date.getHours();
                                jquery__WEBPACK_IMPORTED_MODULE_7__("#" + count + "DateHolder").html(JSON.stringify(passed_hours) + "h");
                            }
                            else if (today.getMinutes() > new_date.getMinutes() && new_date.getMinutes() > 0) {
                                var passed_minutes = today.getMinutes() - new_date.getMinutes();
                                jquery__WEBPACK_IMPORTED_MODULE_7__("#" + count + "DateHolder").html(JSON.stringify(passed_minutes) + "m");
                                console.log(passed_minutes, count);
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_7__("#" + count + "DateHolder").html("now");
                            }
                        }
                        else {
                            if (month == today.getMonth() && day != today.getDay()) {
                                var passed_day = today.getDate() - new_date.getDate();
                                console.log(new_date.getDate(), today.getDate());
                                if (today.getDate() > new_date.getDate()) {
                                    console.log(passed_day);
                                    jquery__WEBPACK_IMPORTED_MODULE_7__("#" + count + "DateHolder").html(JSON.stringify(passed_day) + "d");
                                }
                            }
                        }
                    }
                }
            });
        });
    };
    Tab3Page.prototype.viewPost = function (post) {
        console.log(post);
        this.storage.set("post", post);
        this.route.navigate(['/home/tabs/postView']);
    };
    Tab3Page.prototype.viewUser = function (userId, email) {
        console.log(userId);
        console.log("user", userId);
        this.storage.set("user_id", userId);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    };
    Tab3Page.prototype.viewChat = function (id, first_name, last_name, username) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map