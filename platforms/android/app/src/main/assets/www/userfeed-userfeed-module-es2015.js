(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userfeed-userfeed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/userfeed/userfeed.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userfeed/userfeed.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-slides #slider (ionSlideDidChange)=\"leftSlide()\" (ionSlideTransitionEnd)=\"ionicSlide()\" id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider' (swiperight)=\"swiped(i)\"  (swipeleft)=\"swiped(i)\"  *ngFor='let item of ( results | async); let i = index'>\n      <div id=\"streamIcon\">Stream</div>\n      <ion-icon name=\"close\" id=\"closeIcon\" (click)=\"onSwipeUp( item.user_id,item.user_email,i )\"></ion-icon>\n      <video playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videob\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\" class=\"{{i}}PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#E91E63'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\" (click)=\"showAllComments(item.post_id)\"></ion-icon><span id=\"{{item.post_id}}CommentsCount\">0</span>\n      </div>\n\n\n      <div id=\"userinfo\" class=\"{{i}}userInfo\">\n         <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <span id=\"commentsHeading\">Comments</span><br/>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n            <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n              <span *ngIf=\"item.post_id == comment.post\" id=\"userComment\">\n                <span>@{{comment.user}}</span><span> {{ comment.comment }}</span><br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <div (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\" [ngStyle]= \"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\"><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon></div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n      <div  class=\"{{i}}heartAnimations\"  id=\"heartAnimations\">\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n      \n      <div id=\"overlay\" (click)=\"playVideo(i)\">\n      </div>\n\n\n    <div id=\"{{item.post_id}}allComments\"  class=\"allComments animated fadeInUp\">\n      <div *ngFor='let comment of (commentsRef$ | async)' id=\"{{item.post_id}}allComments\">\n        <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span><p>{{ comment.comment }}</p></div>\n      </div>\n\n      <div id=\"fullComments\">\n        <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput2\" id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n        <span (click)=\"postComment2(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n    </div>\n\n\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/userfeed/userfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/userfeed/userfeed.module.ts ***!
  \*********************************************/
/*! exports provided: UserfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfeedPageModule", function() { return UserfeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userfeed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userfeed.page */ "./src/app/userfeed/userfeed.page.ts");







const routes = [
    {
        path: '',
        component: _userfeed_page__WEBPACK_IMPORTED_MODULE_6__["UserfeedPage"]
    }
];
let UserfeedPageModule = class UserfeedPageModule {
};
UserfeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_userfeed_page__WEBPACK_IMPORTED_MODULE_6__["UserfeedPage"]]
    })
], UserfeedPageModule);



/***/ }),

/***/ "./src/app/userfeed/userfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/userfeed/userfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 13px;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#comment {\n  font-size: 13px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n\nion-icon#closeIcon {\n  font-size: 30px;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  margin-top: 25px;\n  margin-right: 4px;\n  z-index: 1000000;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\n\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.49);\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\n\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\n\ndiv#heartAnimations ion-icon#animation1 {\n  color: #E91E63;\n  margin-right: 15px;\n}\n\ndiv#heartAnimations ion-icon#animation2 {\n  color: #E91E63;\n  margin-left: 20px;\n}\n\ndiv#heartAnimations ion-icon#animation3 {\n  color: #E91E63;\n  margin-right: 30px;\n}\n\ndiv#heartAnimations ion-icon#animation4 {\n  color: #E91E63;\n}\n\n.allComments {\n  width: 100%;\n  height: 300px;\n  background: white;\n  position: absolute;\n  z-index: 1016;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n}\n\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdXNlcmZlZWQvdXNlcmZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyZmVlZC91c2VyZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0U7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0FKOztBREdFO0VBQ0UsMEJBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNESjs7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0hKOztBRE1FO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRlA7RURHRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNBVDtBQUNGOztBREhFO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDRlA7RURHRTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNBVDtBQUNGOztBRElFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNGSjs7QURJSTtFQUNFLGVBQUE7QUNGTjs7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFB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Q0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQk47O0FEbUJJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDakJOOztBRG9CSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNsQk47O0FEdUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ3BCSjs7QURzQkk7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDcEJOOztBRHlCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDdkJOOztBRHFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDdkJOOztBRHFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDdkJOOztBRHFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDdkJOOztBRHFCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDdkJOOztBRDBCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3hCTiIsImZpbGUiOiJzcmMvYXBwL3VzZXJmZWVkL3VzZXJmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIFxuICBpbWcubG9nb2ZvbnQge1xuICAgIGhlaWdodDogMjNweDtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgfVxuICBcbiAgaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgfVxuICBcbiAgLmhvbWVVcGxvYWR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICBcbiAgLmhvbWVTZW5ke1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIFxuICB9XG4gIFxuICBkaXYjTG9hZGVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuICBcbiAgXG4gIFxuICAudmlkZW9iY2cge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICBcbiAgI3NsaWRlc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICBwI3Bvc3RHZW5yZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIGRpdiNQb3N0RGF0YSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBkaXYjb3ZlcmxheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW5wdXQuY29tbWVudElucHV0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICAjY29tbWVudEJ0bntcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY29tbWVudEJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBcbiAgZGl2I3VzZXJpbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDo5NSU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgXG4gICAgI3Bvc3REZXNjcmlwdGlvbntcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gIFxuICBkaXYjc3RyZWFtSWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB9XG4gIC5pY29ue1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgXG4gICN1c2VyQ29tbWVudHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNjb21tZW50e1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICB9XG4gIFxuICBcbiAgI3NoYXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICB9XG5cbiAgaW9uLWljb24jY2xvc2VJY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5zcGFuI2NvbW1lbnRzSGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4gIFxuICBkaXYjcHJvZmlsZUltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMDAwO1xuXG4gICAgc3BhbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogMTglO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIFxuICAgICAgZGl2I2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIFxuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG4gIFxuICBkaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgXG4gIFxuICAgIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICAgICAgY29sb3I6ICNFOTFFNjM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIGlvbi1pY29uI2FuaW1hdGlvbjIge1xuICAgICAgY29sb3I6ICNFOTFFNjM7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9ICBcbiAgICBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgICAgIGNvbG9yOiAjRTkxRTYzO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH0gIFxuICAgIGlvbi1pY29uI2FuaW1hdGlvbjQge1xuICAgICAgY29sb3I6ICNFOTFFNjM7XG4gICAgfVxuICB9XG5cblxuXG4gIC5hbGxDb21tZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAxNjtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIFxuICBcbiAgICBwe1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgXG4gICAgc3BhbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICBcbiAgICAjYWxsY29tQ29tbWVudHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgI2Z1bGxDb21tZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gICAgLmNvbW1lbnRJbnB1dDJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiA2OSU7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgXG4gIFxuICAgIH1cbiAgXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIFxuICAgICNjb21tZW50QnRue1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZy5sb2dvZm9udCB7XG4gIGhlaWdodDogMjNweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4uaG9tZVVwbG9hZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob21lU2VuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDlkZWcpO1xufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi52aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuZGl2I1Bvc3REYXRhIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jb21tZW50SW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogODUlO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI2NvbW1lbnRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDk1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmRpdiN1c2VyaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZGl2I3VzZXJpbmZvICNwb3N0RGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjc3RyZWFtSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuI3VzZXJDb21tZW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNzaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNTRweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbmlvbi1pY29uI2Nsb3NlSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2I3Byb2ZpbGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbmRpdiNwcm9maWxlSW1hZ2Ugc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIGRpdiNpbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OSk7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICBjb2xvcjogI0U5MUU2MztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gIGNvbG9yOiAjRTkxRTYzO1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAxNjtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5hbGxDb21tZW50cyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5hbGxDb21tZW50cyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hbGxDb21tZW50cyAjYWxsY29tQ29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2Z1bGxDb21tZW50cyAuY29tbWVudElucHV0MiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA2OSU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4jZnVsbENvbW1lbnRzIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiNmdWxsQ29tbWVudHMgI2NvbW1lbnRCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userfeed/userfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/userfeed/userfeed.page.ts ***!
  \*******************************************/
/*! exports provided: UserfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserfeedPage", function() { return UserfeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");














let UserfeedPage = class UserfeedPage {
    constructor(database, actionSheetController, platform, tabs, requests, toastController, statusBar, route, loadingController, storage) {
        this.database = database;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.tabs = tabs;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.commentsRef$ = this.database.list("comments").valueChanges();
        this.postViewsRef$ = this.database.list("views").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleDefault();
        this.tabs.bgColor = 'transparent';
        this.displayComments();
    }
    ngOnInit() {
    }
    displayComments() {
        this.commentsRef$.subscribe((val) => {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (let x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
                //reset the comments count for each post
                for (let c = 0; c < val.length; c++) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (let c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    let currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
            }, 1000);
        });
    }
    CommentsUp(i) {
        console.log("Move comments up");
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + i + "userInfo").css("margin-bottom", "90%");
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + i + "PostData").css("margin-top", "-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
        }
    }
    CommentsDown(i) {
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + i + "userInfo").css("margin-bottom", "100px");
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + i + "PostData").css("margin-top", "20%");
        }
    }
    share(file) {
        this.presentActionSheet();
    }
    ionicSlide() {
        this.slide.getActiveIndex().then((val) => {
            console.log(val);
            this.playVideo(val);
        });
    }
    ionViewWillLeave() {
        this.slide.getActiveIndex().then((val) => {
            console.log("left slide ", val);
            this.pauseVideo(val);
        });
        console.log("Leaving");
    }
    commentAdded() {
        console.log("Comment added");
        //get comments tabs
        this.commnentsTab = document.getElementsByClassName("commentBox");
        //display the last comment added
        for (let x = 0; x < this.commnentsTab.length; x++) {
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            console.log("scroll top", this.commnentsTab[x].scrollTop);
            console.log("scroll height", this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
    }
    playVideo(id) {
        var video = document.getElementById(id + "videob");
        console.log(id);
        console.log("paused", video.paused);
        let CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_3__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        for (let x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        if (video.paused == true) {
            video.play();
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + id + "userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + id + "PostData").show();
        }
        else {
            video.pause();
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + id + "userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_3__("." + id + "PostData").show();
        }
    }
    pauseVideo(id) {
        var video = document.getElementById(id + "videob");
        console.log(id);
        console.log("paused", video.paused);
        video.pause();
    }
    repost(post_id) {
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        let repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(x => {
            console.log(x);
            if (x == "Repost exists") {
                this.presentToast("You've already reposted this post");
            }
            else {
                this.presentToast("Post has been shared to your feed");
            }
        });
    }
    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    onSwipeUp(user_id, email, i) {
        console.log("swipe up");
        console.log(user_id, email);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.pauseVideo(i);
        this.storage.get("current_userID").then((val) => {
            if (user_id != val) {
                this.route.navigate(['/home/tabs/profile']);
            }
            else {
                this.route.navigate(['/home/tabs/tab4']);
            }
        });
    }
    doRefresh(event) {
        console.log(event);
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
            this.ionViewDidEnter();
        }, 2000);
    }
    like(post_id, slideId) {
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(response => {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(this.email);
            if (response == false) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#E91E63");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes += 1);
                jquery__WEBPACK_IMPORTED_MODULE_3__("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    }
    showAllComments(post_id) {
        console.log(post_id);
        jquery__WEBPACK_IMPORTED_MODULE_3__("#" + post_id + "allComments").show();
        // this.commentsRef$.subscribe((com)=>{
        //   console.log(com);
        //   $("#"+post_id+"allComments").html("");
        //   for(let c = 0; c < com.length; c++ ){
        //     if(com[c].post == post_id){
        //       $("#"+post_id+"allComments").append("<div><span>"+com[c].user+"</span><p>"+com[c].comment+"</p></div>");
        //       console.log(com[c].user);
        //     }
        //   }
        // });
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.tabs.bottom = false;
        this.storage.get('mail').then((val) => {
            this.email = val;
            if (this.email == undefined) {
                console.log(this.email);
                this.route.navigate(['/home/tabs/tab1']);
            }
            else {
                this.storage.get("uerFeedUsername").then((val) => {
                    console.log(val);
                    let profile_url = 'https://uploaded.herokuapp.com/users/users';
                    this.storage.get("mail").then((email) => {
                        this.results = this.requests.getUserFeed(profile_url, val, email);
                        this.results.subscribe((posts) => {
                            console.log(posts);
                        });
                    });
                });
            }
        });
    }
    presentNotificationToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({ message: msg.body, duration: 3000 });
            toast.present();
        });
    }
    swiped(id) {
        console.log("left");
        var video = document.getElementById(id + "videob");
        console.log(id);
        console.log("paused", video.paused);
        //video.pause();
        if (video.paused == true) {
            //video.play();
        }
        else {
            video.pause();
        }
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
    //
    //present share options
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Share post',
                buttons: [{
                        text: 'Facebook',
                        role: 'destructive',
                        icon: 'logo-facebook',
                        handler: () => {
                            console.log('Facebook');
                        }
                    }, {
                        text: 'Twitter',
                        icon: 'logo-twitter',
                        handler: () => {
                            console.log('Twitter');
                        }
                    },
                    {
                        text: 'WhatsApp',
                        icon: 'logo-whatsapp',
                        handler: () => {
                            console.log('WhatsApp');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
UserfeedPage.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], UserfeedPage.prototype, "slide", void 0);
UserfeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userfeed',
        template: __webpack_require__(/*! raw-loader!./userfeed.page.html */ "./node_modules/raw-loader/index.js!./src/app/userfeed/userfeed.page.html"),
        styles: [__webpack_require__(/*! ./userfeed.page.scss */ "./src/app/userfeed/userfeed.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"], _services_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], UserfeedPage);



/***/ })

}]);
//# sourceMappingURL=userfeed-userfeed-module-es2015.js.map