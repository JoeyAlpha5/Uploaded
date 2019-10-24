(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-slides #slider (ionSlideTransitionEnd)=\"ionicSlide()\" id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider'  *ngFor='let item of ( results | async); let i = index' (swiperight)=\"swiped(i,item.post_id,'right')\"  (swipeleft)=\"swiped(i,item.post_id,'left')\"  (swipeup)=\"onSwipeUp( item.user_id,item.user_email,i )\">\n      <div id=\"streamIcon\">Stream</div>\n      <video playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobcg\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\" class=\"{{i}}PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#E91E63'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\" name=\"eye\" id=\"eye\"></ion-icon><span class=\"{{item.post_id}}viewCount\">0</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\" (click)=\"showAllComments(item.post_id)\"></ion-icon><span id=\"{{item.post_id}}CommentsCount\">0</span>\n          <div class=\"postViews\"><span class=\"{{ item.post_id }}views\"  id=\"{{i}}PostViews\">{{ item.post_id }}</span></div>\n      </div>\n\n\n      <div id=\"userinfo\" class=\"{{i}}userInfo\">\n         <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <span id=\"commentsHeading\">Comments</span><br/>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n            <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n              <span *ngIf=\"item.post_id == comment.post\" id=\"userComment\">\n                <span>@{{comment.user}}</span><span> {{ comment.comment }}</span><br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <div (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\" [ngStyle]= \"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\"><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon></div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n      <div  class=\"{{i}}heartAnimations\"  id=\"heartAnimations\">\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n      \n      <div id=\"overlay\" (click)=\"playVideo(i, item.post_id)\">\n      </div>\n\n\n    <div id=\"{{item.post_id}}allComments\"  class=\"allComments animated fadeInUp\">\n      <div *ngFor='let comment of (commentsRef$ | async)' id=\"{{item.post_id}}allComments\">\n        <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span><p>{{ comment.comment }}</p></div>\n      </div>\n\n      <div id=\"fullComments\">\n        <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput2\" id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n        <span (click)=\"postComment2(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n    </div>\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n</ion-content>\n\n\n\n"

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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 13px;\n}\n\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n\n.allComments {\n  width: 100%;\n  height: 300px;\n  background: white;\n  position: absolute;\n  z-index: 1016;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n}\n\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n\n.postViews {\n  opacity: 0;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#comment {\n  font-size: 13px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\n\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.49);\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\n\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\n\ndiv#heartAnimations ion-icon#animation1 {\n  color: #E91E63;\n  margin-right: 15px;\n}\n\ndiv#heartAnimations ion-icon#animation2 {\n  color: #E91E63;\n  margin-left: 20px;\n}\n\ndiv#heartAnimations ion-icon#animation3 {\n  color: #E91E63;\n  margin-right: 30px;\n}\n\ndiv#heartAnimations ion-icon#animation4 {\n  color: #E91E63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0RGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDSEY7O0FETUE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESEE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNB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LGNBQUE7QUNuQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FEc0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJOOztBRHdCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3RCSjs7QUQwQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ3ZCRjs7QUQwQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDeEJKOztBRDBCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3hCSjs7QUQwQkU7RUFDRSxjQUFBO0FDeEJKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWR7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmhvbWVTZW5ke1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbiAgLy8gbWFyZ2luLXRvcDogN3B4O1xuXG59XG5cbmRpdiNMb2FkZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cblxuXG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuXG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbjo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6OTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gICNwb3N0RGVzY3JpcHRpb257XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAxNjtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTs7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG5cblxuICBwe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuICBzcGFue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4gICNhbGxjb21Db21tZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgfVxufVxuXG5cbiNmdWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLmNvbW1lbnRJbnB1dDJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA2OSU7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG5cbiAgfVxuXG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICNjb21tZW50QnRue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0Vmlld3N7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuLmljb257XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiN1c2VyQ29tbWVudHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2NvbW1lbnR7XG4gIGZvbnQtc2l6ZToxM3B4O1xufVxuXG5cbiNzaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNTRweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbmRpdiNwcm9maWxlSW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDA7XG5cbiAgc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxOCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICAgZGl2I2ltYWdlIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTMlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gIH1cblxuICBwe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5kaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MXB4O1xuICBkaXNwbGF5OiBub25lO1xuXG5cbiAgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gICAgY29sb3I6ICNFOTFFNjM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIGlvbi1pY29uI2FuaW1hdGlvbjIge1xuICAgIGNvbG9yOiAjRTkxRTYzO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uMyB7XG4gICAgY29sb3I6ICNFOTFFNjM7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gICAgY29sb3I6ICNFOTFFNjM7XG4gIH1cbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmltZy5sb2dvZm9udCB7XG4gIGhlaWdodDogMjNweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4uaG9tZVVwbG9hZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob21lU2VuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDlkZWcpO1xufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi52aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuZGl2I1Bvc3REYXRhIHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jb21tZW50SW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogODUlO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI2NvbW1lbnRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDk1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmRpdiN1c2VyaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZGl2I3VzZXJpbmZvICNwb3N0RGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5zcGFuI2NvbW1lbnRzSGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGxDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDE2O1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLmFsbENvbW1lbnRzIHAge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFsbENvbW1lbnRzIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmFsbENvbW1lbnRzICNhbGxjb21Db21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6ICMyOTI5Mjk7XG59XG5cbiNmdWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4jZnVsbENvbW1lbnRzIC5jb21tZW50SW5wdXQyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDY5JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbiNmdWxsQ29tbWVudHMgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI2Z1bGxDb21tZW50cyAjY29tbWVudEJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9zdFZpZXdzIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiN1c2VyQ29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb21tZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuZGl2I3Byb2ZpbGVJbWFnZSBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE4JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdiNwcm9maWxlSW1hZ2UgZGl2I2ltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5KTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmbG9hdDogbGVmdDtcbn1cbmRpdiNwcm9maWxlSW1hZ2UgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuZGl2I2hlYXJ0QW5pbWF0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNTFweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gIGNvbG9yOiAjRTkxRTYzO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjIge1xuICBjb2xvcjogI0U5MUU2MztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjMge1xuICBjb2xvcjogI0U5MUU2MztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb240IHtcbiAgY29sb3I6ICNFOTFFNjM7XG59Il19 */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");














let Tab1Page = class Tab1Page {
    constructor(tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage) {
        this.tabs = tabs;
        this.platform = platform;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.requests = requests;
        this.database = database;
        this.route = route;
        this.storage = storage;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        this.postViewsRef$ = this.database.list("views").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
    }
    displayComments() {
        this.commentsRef$.subscribe((val) => {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
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
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (let c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    let currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
            }, 1000);
        });
    }
    CommentsUp(i) {
        console.log("Move comments up");
        this.tabs.bottom = false;
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "80%");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "PostData").css("margin-top", "-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "0");
        }
    }
    CommentsDown(i) {
        this.statusBar.overlaysWebView(true);
        this.tabs.bottom = true;
        console.log("Move comments down");
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "100px");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "PostData").css("margin-top", "20%");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "100px");
        }
    }
    share(file) {
        this.presentActionSheet();
    }
    ionicSlide(direction) {
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
        var video = document.getElementById(id + "videobcg");
        let CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        for (let x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        this.tabs.bottom = true;
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            video.play();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            //add view count
        }
        else {
            video.pause();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
        }
    }
    pauseVideo(id) {
        var video = document.getElementById(id + "videobcg");
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
        this.route.navigate(['/home/tabs/profile']);
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
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeIcon").css("color", "#E91E63");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text(likes += 1);
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text());
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    }
    postComment2(post_id) {
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput2").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput2").val("");
            }
            console.log(commentMessage);
        });
    }
    showAllComments(post_id) {
        console.log(post_id);
        this.tabs.bottom = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "allComments").show();
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
    changeIconColors() {
        this.tabs.tab1 = "#fc8700";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        //change icon colors
        this.changeIconColors();
        this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            // var profile_url = 'http://127.0.0.1:8000/users/users'
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
    presentNotificationToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({ message: msg.body, duration: 3000 });
            toast.present();
        });
    }
    swiped(id, post_id, direction) {
        console.log("post", post_id);
        console.log("left");
        let idd = id - 1;
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        //video.pause();
        if (video.paused == true) {
            //video.play();
        }
        else {
            video.pause();
        }
        console.log(direction);
        if (direction == "left") {
            let current_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id + 1) + "PostViews").text();
            let prev_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "PostViews").text();
            this.storage.get("current_userID").then((val) => {
                this.database.list("views/").remove(JSON.stringify(val + current_post_id));
                this.database.list("views/").remove(JSON.stringify(val + prev_post_id));
                this.database.object("views/" + JSON.stringify(val + current_post_id)).set({ "user": val, "post_id": current_post_id });
                //display views
                this.postViewsRef$.subscribe((val) => {
                    for (let c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (let v = 0; v < val.length; v++) {
                        let key = Object.keys(val[v])[0];
                        console.log(key);
                        let post_id = val[v].post_id;
                        console.log(post_id);
                        let current_views = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id + "viewCount").text());
                        current_views += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id + "viewCount").text(current_views);
                    }
                });
            });
            console.log(current_post_id);
        }
        else if (direction == "right") {
            let current_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + idd + "PostViews").text();
            let prev_post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id) + "PostViews").text();
            this.storage.get("current_userID").then((val) => {
                this.database.list("views/").remove(JSON.stringify(val + current_post_id));
                this.database.list("views/").remove(JSON.stringify(val + prev_post_id));
                this.database.object("views/" + JSON.stringify(val + current_post_id)).set({ "user": val, "post_id": current_post_id });
                this.postViewsRef$.subscribe((val) => {
                    for (let c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (let v = 0; v < val.length; v++) {
                        let key = Object.keys(val[v])[0];
                        console.log(key);
                        let post_id = val[v].post_id;
                        console.log(post_id);
                        let current_views = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id + "viewCount").text());
                        current_views += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id + "viewCount").text(current_views);
                    }
                });
            });
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
Tab1Page.ctorParameters = () => [
    { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], Tab1Page.prototype, "slide", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map