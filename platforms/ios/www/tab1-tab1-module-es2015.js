(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-slides id=\"slides\" [options]=\"slideOpts\" (ionSlideDidChange)=\"swiped()\">\n    <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index' (swipeup)=\"onSwipeUp( item.user_id,item.user_email )\">\n      <video playsinline webkit-playsinline muted class=\"videobcg\" id=\"{{i}}videobcg\" muted=\"muted\" volume=\"0\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon><span id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br>\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'red'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" name=\"share-alt\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\"></ion-icon>\n      </div>\n\n\n      <div id=\"userinfo\">\n         <p>@{{ item.username }}</p>\n         <p id=\"postGenre\">{{ item.genre }}</p>\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n\n            <span id=\"comment\" *ngFor='let comment of commentsRef$ | async'>\n              <span *ngIf=\"item.post_id == comment.post\">\n                <span id=\"userComment\">@{{comment.user}}</span> {{ comment.comment }}<br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n      \n      <div id=\"overlay\" (click)=\"playVideo(i)\">\n       \n      </div>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n</ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid grey;\n  width: 280px;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid gray;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: orange;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 100px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: auto;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 15px;\n  z-index: 100;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: lighter;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  color: #4CAF50;\n}\n\n#comment {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0RGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDSEY7O0FETUE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESEE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUU7RUFDRSxlQUFBO0FDRko7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSkY7O0FETUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPRTtFQUNFLG9CQUFBO0FDTEo7O0FEU0E7RUFDRSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW1nLmxvZ29mb250IHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5ob21lVXBsb2Fke1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5ob21lU2VuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcblxufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuLnZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jc2xpZGVze1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICB3aWR0aDogMjgwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuZGl2I3VzZXJpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAjcG9zdERlc2NyaXB0aW9ue1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG5cbn1cbi5pY29ue1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnR7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbiNjb21tZW50e1xuICBmb250LXNpemU6MTNweDtcbn1cblxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmRpdiNQb3N0RGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICB3aWR0aDogMjgwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5kaXYjdXNlcmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdiN1c2VyaW5mbyAjcG9zdERlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuI3VzZXJDb21tZW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzRDQUY1MDtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);








let Tab1Page = class Tab1Page {
    constructor(loadingController, requests, database, route, storage) {
        this.loadingController = loadingController;
        this.requests = requests;
        this.database = database;
        this.route = route;
        this.storage = storage;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
    }
    playVideo(id) {
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    }
    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
    onSwipeUp(user_id, email) {
        console.log("swipe up");
        console.log(user_id, email);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
    like(post_id) {
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(response => {
            console.log(response);
            //if false meaning had not been liked, but now liked
            if (response == false) {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeIcon").css("color", "#f44336");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeCount").text(likes += 1);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    }
    ionViewDidLoad() {
        console.log("loaded");
    }
    ionViewDidEnter() {
        this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (this.email == undefined) {
                console.log(this.email);
                this.route.navigate(['/home/tabs/tab1']);
            }
            else {
                console.log(this.email);
                this.results = this.requests.getFeed(profile_url, this.email);
            }
        });
    }
    swiped() {
        console.log("left");
    }
    //loading component
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 4000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map