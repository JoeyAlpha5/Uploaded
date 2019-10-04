(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-slides id=\"slides\" [options]=\"slideOpts\" (ionSlideDidChange)=\"swiped()\">\n    <ion-slide (click)=\"playVideo(i)\" id='slider' *ngFor='let item of ( results | async); let i = index' (swipeup)=\"onSwipeUp( item.user_id,item.user_email )\">\n    <div id=\"feddStreemBTN\">\n      <p>Live | Stream </p>\n    </div>\n      <video class=\"videobcg\" id=\"{{i}}videobcg\" muted=\"muted\" volume=\"0\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\">\n          <ion-icon *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'red'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon>\n          <ion-icon *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon><span id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br>\n          <ion-icon name=\"share-alt\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon name=\"text\" id=\"postIcon\"></ion-icon>\n      </div>\n\n\n      <div id=\"userinfo\">\n         <p>@{{ item.username }}</p>\n         <p id=\"postGenre\">{{ item.genre }}</p>\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n\n            <span id=\"comment\" *ngFor='let comment of commentsRef$ | async'>\n              <span *ngIf=\"item.post_id == comment.post\">\n                <span id=\"userComment\">@{{comment.user}}</span> {{ comment.comment }}<br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n      \n      <div id=\"overlay\">\n       \n      </div>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n</ion-content>\n\n\n\n"

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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 50%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 29px;\n  z-index: 100;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#feddStreemBTN {\n  position: absolute;\n  z-index: 10000000;\n  top: 0;\n  color: white;\n  background: #ffffff14;\n  padding: -11px;\n  border-radius: 200px;\n  font-size: 12px;\n  width: 125px;\n  margin-top: 15px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid grey;\n  width: 280px;\n  outline: 0;\n  padding: 5px;\n  height: 40px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: orange;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 60px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: auto;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 60px;\n  margin-left: 15px;\n  z-index: 100;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: lighter;\n}\n\n#userComment {\n  font-size: 11px;\n  color: #4CAF50;\n}\n\n#comment {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYy9EZXNrdG9wL1VwbG9hZGVkL0FwcC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNERjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0hGOztBRE1BO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRkw7RURHQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNBUDtBQUNGOztBREhBO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRkw7RURHQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNBUDtBQUNGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSko7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLG9CQUFBO0FDTko7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsZUFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWR7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmhvbWVTZW5ke1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbiAgLy8gbWFyZ2luLXRvcDogN3B4O1xuXG59XG5cbmRpdiNMb2FkZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cblxuXG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgei1pbmRleDogMTAwO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuXG5cbmRpdiNmZWRkU3RyZWVtQlROIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMTQ7XG4gICAgcGFkZGluZzogLTExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5pbnB1dC5jb21tZW50SW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIHdpZHRoOiAyODBweDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbiNjb21tZW50QnRue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxMDA7XG4gXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgI3Bvc3REZXNjcmlwdGlvbntcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuXG59XG5cbiN1c2VyQ29tbWVudHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzRDQUY1MDtcbn1cblxuI2NvbW1lbnR7XG4gIGZvbnQtc2l6ZToxM3B4O1xufVxuXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZy5sb2dvZm9udCB7XG4gIGhlaWdodDogMjNweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4uaG9tZVVwbG9hZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob21lU2VuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDlkZWcpO1xufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi52aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgei1pbmRleDogMTAwO1xufVxuZGl2I1Bvc3REYXRhIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmRpdiNmZWRkU3RyZWVtQlROIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYxNDtcbiAgcGFkZGluZzogLTExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuZGl2I292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbmlucHV0LmNvbW1lbnRJbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgd2lkdGg6IDI4MHB4O1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuI2NvbW1lbnRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5kaXYjdXNlcmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdiN1c2VyaW5mbyAjcG9zdERlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbiN1c2VyQ29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

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
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);







let Tab1Page = class Tab1Page {
    constructor(loadingController, requests, database, route) {
        this.loadingController = loadingController;
        this.requests = requests;
        this.database = database;
        this.route = route;
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
        var Email = JSON.parse(localStorage.getItem('email'));
        var Password = localStorage.getItem('password');
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, Email, post_id);
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
        var postedBy = JSON.parse(localStorage.getItem("username"));
        if (commentMessage != null && commentMessage != "") {
            var comment = { post: post_id, user: postedBy, comment: commentMessage };
            this.database.list("comments").push(comment);
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + post_id + "commentInput").val("");
        }
        console.log(commentMessage);
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        var Email = JSON.parse(localStorage.getItem('email'));
        var Password = localStorage.getItem('password');
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        if (Email == null && Password == null) {
            window.location.href = '';
            return;
        }
        else {
            this.results = this.requests.getFeed(profile_url, Email);
        }
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
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map