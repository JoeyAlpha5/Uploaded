(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-view-post-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div id=\"backDiv\" (click)=\"back()\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </div>\n    <ion-slides id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'>\n      <div id=\"streamIcon\">Stream</div>\n      <video autoplay playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobcg\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'red'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\"></ion-icon>\n      </div>\n\n\n      <div id=\"userinfo\" [ngStyle]=\"{'bottom': styleExp, 'top':styleTop, 'margin-top':styleMarginTop}\">\n         <p>@{{ item.username }}</p>\n         <p id=\"postGenre\">{{ item.genre }}</p>\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n\n            <span id=\"comment\" *ngFor='let comment of commentsRef$ | async'>\n              <span *ngIf=\"item.post_id == comment.post\">\n                <span id=\"userComment\">@{{comment.user}}</span> {{ comment.comment }}<br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\" (blur)=\"moveDownComments(item.post_idComments)\" (focus)=\"moveUpComments()\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n\n\n      \n      <div id=\"overlay\" (click)=\"playVideo(i)\">\n      </div>\n\n\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/post-view/post-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/post-view/post-view.module.ts ***!
  \***********************************************/
/*! exports provided: PostViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewPageModule", function() { return PostViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view.page */ "./src/app/post-view/post-view.page.ts");







var routes = [
    {
        path: '',
        component: _post_view_page__WEBPACK_IMPORTED_MODULE_6__["PostViewPage"]
    }
];
var PostViewPageModule = /** @class */ (function () {
    function PostViewPageModule() {
    }
    PostViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_view_page__WEBPACK_IMPORTED_MODULE_6__["PostViewPage"]]
        })
    ], PostViewPageModule);
    return PostViewPageModule;
}());



/***/ }),

/***/ "./src/app/post-view/post-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/post-view/post-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid grey;\n  width: 280px;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid gray;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: orange;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 100px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 15px;\n  z-index: 100;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: lighter;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  color: #4CAF50;\n}\n\n#comment {\n  font-size: 13px;\n}\n\ndiv#backDiv {\n  position: absolute;\n  color: white;\n  font-size: 30px;\n  z-index: 1000;\n  margin-top: 26px;\n  margin-left: 15px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3Qtdmlldy9wb3N0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNBSjs7QURHRTtFQUNFLDBCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDREo7O0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNISjs7QURNRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURIRTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ0ZQO0VER0U7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDQVQ7QUFDRjs7QURJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsTUFBQTtBQ0ZKOztBREtFO0VBQ0UsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSko7O0FETUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLG9CQUFBO0FDTE47O0FEV0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDUko7O0FEVUU7RUFDRSxnQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNQSjs7QURVRTtFQUNFLGVBQUE7QUNQSjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXZpZXcvcG9zdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIFxuICBpbWcubG9nb2ZvbnQge1xuICAgIGhlaWdodDogMjNweDtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgfVxuICBcbiAgaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgfVxuICBcbiAgLmhvbWVVcGxvYWR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICBcbiAgLmhvbWVTZW5ke1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIFxuICB9XG4gIFxuICBkaXYjTG9hZGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgXG4gIFxuICAudmlkZW9iY2cge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICBcbiAgI3NsaWRlc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICBwI3Bvc3RHZW5yZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGRpdiNQb3N0RGF0YSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIFxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIGRpdiNvdmVybGF5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgaW5wdXQuY29tbWVudElucHV0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICAjY29tbWVudEJ0bntcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNvbW1lbnRCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgXG4gIGRpdiN1c2VyaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgXG4gICAgI3Bvc3REZXNjcmlwdGlvbntcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gIFxuICBkaXYjc3RyZWFtSWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmljb257XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICBcbiAgI3VzZXJDb21tZW50e1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgfVxuICBcbiAgI2NvbW1lbnR7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gIH1cbiAgXG5cbiAgZGl2I2JhY2tEaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiAgXG4gICNzaGFyZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogNTRweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgfVxuICBcbiAgIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmRpdiNQb3N0RGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICB3aWR0aDogMjgwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuZGl2I3VzZXJpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmRpdiN1c2VyaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZGl2I3VzZXJpbmZvICNwb3N0RGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiN1c2VyQ29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjYmFja0RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-view/post-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/post-view/post-view.page.ts ***!
  \*********************************************/
/*! exports provided: PostViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewPage", function() { return PostViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var PostViewPage = /** @class */ (function () {
    function PostViewPage(location, actionSheetController, database, tabsPage, requests, toastController, statusBar, route, loadingController, storage) {
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.database = database;
        this.tabsPage = tabsPage;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.styleExp = "0";
        this.styleTop = "unset";
        this.styleMarginTop = "unset";
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.commentsRef$.subscribe(function (val) {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
            }, 10);
        });
    }
    PostViewPage.prototype.ngOnInit = function () {
    };
    PostViewPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(true);
        this.tabsPage.bottom = false;
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then(function (val) {
            console.log('Your email is', val);
            _this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (val == undefined) {
                _this.route.navigate(['']);
            }
            else {
                _this.storage.get("post").then(function (post) {
                    console.log("post id is ", val);
                    _this.results = _this.requests.GetPost(profile_url, post, val);
                    _this.results.subscribe(function (x) {
                        console.log(x);
                    });
                }).catch();
            }
        });
    };
    PostViewPage.prototype.share = function (file) {
        this.presentActionSheet();
    };
    PostViewPage.prototype.commentAdded = function () {
        console.log("Comment added");
        //get comments tabs
        this.commnentsTab = document.getElementsByClassName("commentBox");
        //display the last comment added
        for (var x = 0; x < this.commnentsTab.length; x++) {
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            console.log("scroll top", this.commnentsTab[x].scrollTop);
            console.log("scroll height", this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
    };
    PostViewPage.prototype.back = function () {
        this.tabsPage.bottom = true;
        this.location.back();
    };
    PostViewPage.prototype.playVideo = function (id) {
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    };
    PostViewPage.prototype.repost = function (post_id) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        var repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(function (x) {
            console.log(x);
            if (x == "Repost exists") {
                _this.presentToast("You've already reposted this post");
            }
            else {
                _this.presentToast("Post has been shared to your feed");
            }
        });
    };
    PostViewPage.prototype.like = function (post_id) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(function (response) {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(_this.email);
            if (response == false) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#f44336");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes += 1);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    };
    PostViewPage.prototype.postComment = function (post_id) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    };
    PostViewPage.prototype.moveUpComments = function (div) {
        // userInfo.style.top = '0 !important';
        // this.styleExp = "unset";
        // this.styleTop = "0";
        // this.styleMarginTop = "55%";
        this.statusBar.overlaysWebView(false);
        console.log("Move comments up");
    };
    PostViewPage.prototype.moveDownComments = function () {
        // this.styleExp = "0";
        // this.styleTop = "unset";
        // this.styleMarginTop = "unset";
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
    };
    PostViewPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Share post',
                            buttons: [{
                                    text: 'Facebook',
                                    role: 'destructive',
                                    icon: 'logo-facebook',
                                    handler: function () {
                                        console.log('Facebook');
                                    }
                                }, {
                                    text: 'Twitter',
                                    icon: 'logo-twitter',
                                    handler: function () {
                                        console.log('Twitter');
                                    }
                                },
                                {
                                    text: 'WhatsApp',
                                    icon: 'logo-whatsapp',
                                    handler: function () {
                                        console.log('WhatsApp');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostViewPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostViewPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    PostViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-view',
            template: __webpack_require__(/*! raw-loader!./post-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html"),
            styles: [__webpack_require__(/*! ./post-view.page.scss */ "./src/app/post-view/post-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], angularfire2_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], PostViewPage);
    return PostViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-view-post-view-module-es5.js.map