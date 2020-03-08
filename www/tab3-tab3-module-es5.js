(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list id=\"notifs\">\n    <ion-item-sliding #item *ngFor='let notif of ( notificationssRef$ | async)?.slice().reverse(); let i = index'>\n      <ion-item id=\"actualNotif\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + notif.profile+ ')'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span (click)=\"viewPost(notif.post)\" class=\"notifDetails\"><b>{{ notif.first_name }}</b>  {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.to == username\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + notif.profile+ ')'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\" class=\"notifDetails\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.type == 'follow'\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://uploadedstream.storage.googleapis.com/' + notif.profile+ ')'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\" class=\"notifDetails\" (click)=\"viewUser(notif.userid)\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span> \n        <div *ngIf=\"notif.post_image\"  id=\"postCover\" (click)=\"viewPost(notif.post)\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span>\n      </ion-item>\n      <!-- <ion-item-options side=\"start\" id=\"options\">\n        <button ion-button id='viewUser'  (click)=\"viewUser(notif.userid)\"><ion-icon name=\"contact\"></ion-icon><br>User</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.the_receiver == username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.comment_to== username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewChat' (click)=\"viewChat(notif.userid,notif.first_name,notif.last_name,notif,username)\"><ion-icon name=\"text\"></ion-icon><br>Chat</button>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n"

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

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span {\n  font-family: \"helvetica\" !important;\n}\ndiv#dp {\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background-size: cover !important;\n  margin-left: 10px;\n  margin-top: 10px;\n}\nspan.notifDetails {\n  width: 72%;\n}\nvideo.searchVids {\n  width: 100%;\n  height: 100%;\n  margin-left: 15px;\n  border-radius: 13px;\n}\nion-item-options#options {\n  margin-top: 10px;\n}\n#viewUser {\n  background: #4CAF50;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#viewChat {\n  background: black;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n.datePlaceholder {\n  font-size: 12px;\n  color: gray;\n  margin-left: 4px;\n}\ndiv#postCover {\n  width: 40px;\n  height: 40px;\n  float: right;\n  right: 0;\n  position: absolute;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-size: cover !important;\n}\n#viewPost {\n  background: #607D8B;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#notifs {\n  background: #f7f7f7;\n}\n#notifs #actualNotif {\n  font-size: 13px;\n  margin-top: 10px;\n}\n#notifs #actualNotif #msg {\n  margin-left: 2px;\n  width: 189px;\n  margin-bottom: 14px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0RKO0FES0U7RUFDSSxtQ0FBQTtBQ0hOO0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLFVBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSEo7QURNQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSEo7QURNQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0hSO0FES1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJztcbiAgICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByby1SZWd1bGFyLnR0Zik7XG4gIH1cbiAgXG4gIEBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2FCJztcbiAgICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByb0Rpc3BsYXktU2VtaWJvbGQudHRmKTtcbiAgfVxuXG5cbiAgcCwgc3BhbntcbiAgICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJyAhaW1wb3J0YW50O1xuICB9XG5cbmRpdiNkcCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuc3Bhbi5ub3RpZkRldGFpbHMge1xuICAgIHdpZHRoOiA3MiU7XG59XG5cbnZpZGVvLnNlYXJjaFZpZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xufVxuXG5pb24taXRlbS1vcHRpb25zI29wdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN2aWV3VXNlcntcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI3ZpZXdDaGF0e1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmRhdGVQbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmRpdiNwb3N0Q292ZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgLy8gYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbiN2aWV3UG9zdHtcbiAgICBiYWNrZ3JvdW5kOiAjNjA3RDhCO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI25vdGlmc3tcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICNhY3R1YWxOb3RpZntcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG5cbiAgICAgICAgI21zZ3tcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICB3aWR0aDogMTg5cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByby1SZWd1bGFyLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9zZWdvZS1wcm8tY3Vmb25mb250cy9TZWdvZVByb0Rpc3BsYXktU2VtaWJvbGQudHRmKTtcbn1cbnAsIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIiAhaW1wb3J0YW50O1xufVxuXG5kaXYjZHAge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNwYW4ubm90aWZEZXRhaWxzIHtcbiAgd2lkdGg6IDcyJTtcbn1cblxudmlkZW8uc2VhcmNoVmlkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xufVxuXG5pb24taXRlbS1vcHRpb25zI29wdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdmlld1VzZXIge1xuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI3ZpZXdDaGF0IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGF0ZVBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuZGl2I3Bvc3RDb3ZlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuI3ZpZXdQb3N0IHtcbiAgYmFja2dyb3VuZDogIzYwN0Q4QjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNub3RpZnMge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuI25vdGlmcyAjYWN0dWFsTm90aWYge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jbm90aWZzICNhY3R1YWxOb3RpZiAjbXNnIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgd2lkdGg6IDE4OXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab1/tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");










var Tab3Page = /** @class */ (function () {
    function Tab3Page(tabs, database, statusBar, storage, route, tab1, screenOrientation) {
        var _this = this;
        this.tabs = tabs;
        this.database = database;
        this.statusBar = statusBar;
        this.storage = storage;
        this.route = route;
        this.tab1 = tab1;
        this.screenOrientation = screenOrientation;
        this.initial_load = false;
        this.screenOrientation.ORIENTATIONS.PORTRAIT;
        if (this.initial_load == false) {
            this.initial_load = true;
            this.notificationssRef$ = this.database.list("notification", function (ref) { return ref.orderByChild('date').limitToLast(10); }).valueChanges();
        }
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
        // this.tab1.stopOtherVids();
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
                                jquery__WEBPACK_IMPORTED_MODULE_8__("#" + count + "DateHolder").html(JSON.stringify(passed_hours) + "h");
                            }
                            else if (today.getMinutes() > new_date.getMinutes() && new_date.getMinutes() > 0) {
                                var passed_minutes = today.getMinutes() - new_date.getMinutes();
                                jquery__WEBPACK_IMPORTED_MODULE_8__("#" + count + "DateHolder").html(JSON.stringify(passed_minutes) + "m");
                                console.log(passed_minutes, count);
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_8__("#" + count + "DateHolder").html("now");
                            }
                        }
                        else {
                            if (month == today.getMonth() && day != today.getDay()) {
                                var passed_day = today.getDate() - new_date.getDate();
                                console.log(new_date.getDate(), today.getDate());
                                if (today.getDate() > new_date.getDate()) {
                                    console.log(passed_day);
                                    jquery__WEBPACK_IMPORTED_MODULE_8__("#" + count + "DateHolder").html(JSON.stringify(passed_day) + "d");
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"] }
    ]; };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map