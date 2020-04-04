(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div id=\"currentNotification\" (scroll)=\"scrolling()\">\n  <ion-list id=\"notifs\" >\n    <ion-item-sliding #item *ngFor='let notif of ( notificationssRef$ | async)?.slice().reverse(); let i = index'>\n      <ion-item id=\"actualNotif\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/www-uploadedstream-com/video/upload/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span (click)=\"viewPost(notif.post)\" class=\"notifDetails\"><b>{{ notif.first_name }}</b>  {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.to == username\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1583762562/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\" class=\"notifDetails\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span>\n        <div *ngIf=\"notif.post_image\" (click)=\"viewPost(notif.post)\" id=\"postCover\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n      </ion-item>\n      <ion-item id=\"actualNotif\" *ngIf=\"notif.type == 'follow'\">\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile != 'none'\" id=\"dp\" [ngStyle]=\"{ background: 'url(https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1583762562/' + notif.profile+ '.jpg)'}\"></div>\n        <div (click)=\"viewUser(notif.userid)\" *ngIf=\"notif.profile == 'none'\" id=\"dp\"></div>\n        <span id=\"msg\" class=\"notifDetails\" (click)=\"viewUser(notif.userid)\"><b>{{ notif.first_name }}</b> {{ notif.msg }}<span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span></span> \n        <div *ngIf=\"notif.post_image\"  id=\"postCover\" (click)=\"viewPost(notif.post)\">\n          <video class=\"searchVids\" playsinline webkit-playsinline loop autoplay [muted]=\"true\" (click)=\"viewPost(item.id)\" >\n            <source src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_240,du_10/{{notif.post_image}}.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n        <span id=\"{{i}}DateHolder\" class=\"datePlaceholder\"></span>\n      </ion-item>\n      <!-- <ion-item-options side=\"start\" id=\"options\">\n        <button ion-button id='viewUser'  (click)=\"viewUser(notif.userid)\"><ion-icon name=\"contact\"></ion-icon><br>User</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.the_receiver == username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewPost' *ngIf=\"notif.comment_to== username\" (click)=\"viewPost(notif.post)\"><ion-icon name=\"videocam\"></ion-icon><br>Post</button>\n        <button ion-button id='viewChat' (click)=\"viewChat(notif.userid,notif.first_name,notif.last_name,notif,username)\"><ion-icon name=\"text\"></ion-icon><br>Chat</button>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n  <ion-spinner name=\"bubbles\" color=\"primary\"></ion-spinner>\n</div>\n</ion-content>\n"

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

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('SegoePro-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('SegoeProDisplay-Semibold.ttf');\n}\np, span {\n  font-family: \"helvetica\" !important;\n}\ndiv#dp {\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.18);\n  border-radius: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background-size: cover !important;\n  margin-left: 10px;\n  margin-top: 10px;\n}\nspan.notifDetails {\n  width: 72%;\n}\ndiv#currentNotification {\n  width: 100%;\n  height: 80%;\n  position: fixed;\n  overflow: scroll;\n  text-align: -webkit-center;\n}\nvideo.searchVids {\n  width: 100%;\n  height: 100%;\n  margin-left: 15px;\n  border-radius: 13px;\n}\nion-item-options#options {\n  margin-top: 10px;\n}\n#viewUser {\n  background: #4CAF50;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#viewChat {\n  background: black;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n.datePlaceholder {\n  font-size: 12px;\n  color: gray;\n  margin-left: 4px;\n}\ndiv#postCover {\n  width: 40px;\n  height: 40px;\n  float: right;\n  right: 0;\n  position: absolute;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-size: cover !important;\n}\n#viewPost {\n  background: #607D8B;\n  color: white;\n  font-size: 14px;\n  padding: 15px;\n}\n#notifs {\n  background: #f7f7f7;\n}\n#notifs #actualNotif {\n  font-size: 13px;\n  margin-top: 10px;\n}\n#notifs #actualNotif #msg {\n  margin-left: 2px;\n  width: 189px;\n  margin-bottom: 14px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7QUNBSjtBREdFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0RKO0FES0U7RUFDSSxtQ0FBQTtBQ0hOO0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLFVBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7QUNISjtBRE1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNISjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNISjtBRE1BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNKSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFI7QURLUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnO1xuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvLVJlZ3VsYXIudHRmKTtcbiAgfVxuICBcbiAgQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYUInO1xuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL3NlZ29lLXByby1jdWZvbmZvbnRzL1NlZ29lUHJvRGlzcGxheS1TZW1pYm9sZC50dGYpO1xuICB9XG5cblxuICBwLCBzcGFue1xuICAgICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG4gIH1cblxuZGl2I2RwIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zcGFuLm5vdGlmRGV0YWlscyB7XG4gICAgd2lkdGg6IDcyJTtcbn1cblxuZGl2I2N1cnJlbnROb3RpZmljYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG52aWRlby5zZWFyY2hWaWRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuaW9uLWl0ZW0tb3B0aW9ucyNvcHRpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdmlld1VzZXJ7XG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiN2aWV3Q2hhdHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kYXRlUGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5kaXYjcG9zdENvdmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC8vIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4jdmlld1Bvc3R7XG4gICAgYmFja2dyb3VuZDogIzYwN0Q4QjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNub3RpZnN7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICAjYWN0dWFsTm90aWZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuXG4gICAgICAgICNtc2d7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4OXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm8tUmVndWxhci50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvc2Vnb2UtcHJvLWN1Zm9uZm9udHMvU2Vnb2VQcm9EaXNwbGF5LVNlbWlib2xkLnR0Zik7XG59XG5wLCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCIgIWltcG9ydGFudDtcbn1cblxuZGl2I2RwIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zcGFuLm5vdGlmRGV0YWlscyB7XG4gIHdpZHRoOiA3MiU7XG59XG5cbmRpdiNjdXJyZW50Tm90aWZpY2F0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG52aWRlby5zZWFyY2hWaWRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMjb3B0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN2aWV3VXNlciB7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdmlld0NoYXQge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kYXRlUGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5kaXYjcG9zdENvdmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4jdmlld1Bvc3Qge1xuICBiYWNrZ3JvdW5kOiAjNjA3RDhCO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI25vdGlmcyB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG4jbm90aWZzICNhY3R1YWxOb3RpZiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiNub3RpZnMgI2FjdHVhbE5vdGlmICNtc2cge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB3aWR0aDogMTg5cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"

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
        this.resluts_limit = 10;
        this.screenOrientation.ORIENTATIONS.PORTRAIT;
        if (this.initial_load == false) {
            this.initial_load = true;
            this.notificationssRef$ = this.database.list("notification", function (ref) { return ref.orderByChild('date').limitToLast(_this.resluts_limit); }).valueChanges();
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
    Tab3Page.prototype.scrolling = function () {
        var _this = this;
        console.log("scrolling");
        var content_children = document.getElementById("notifs").childElementCount;
        var notif_inner_height = jquery__WEBPACK_IMPORTED_MODULE_8__("#currentNotification").innerHeight();
        var scroll_top = document.getElementById("currentNotification").scrollTop;
        var scroll_height = document.getElementById("currentNotification").scrollHeight;
        if (Math.floor(scroll_height - scroll_top) == Math.floor(notif_inner_height)) {
            console.log("inner_height ", notif_inner_height, " scroll top ", scroll_top, " scroll height ", scroll_height, " scroll height - scroll top ", scroll_height - scroll_top);
            console.log("children ", content_children);
            this.resluts_limit += 10;
            this.notificationssRef$ = this.database.list("notification", function (ref) { return ref.orderByChild('date').limitToLast(_this.resluts_limit); }).valueChanges();
        }
    };
    Tab3Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "#fc8700";
        this.tabs.tab5 = "white";
    };
    Tab3Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        //set current page
        this.storage.set("prev_page", document.location.href);
        //
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
                //scroll to bottom if results not == 10
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