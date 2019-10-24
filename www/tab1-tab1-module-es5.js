(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-refresher id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-slides #slider (ionSlideTransitionEnd)=\"ionicSlide()\" id=\"slides\" [options]=\"slideOpts\">\n    <ion-slide id='slider'  *ngFor='let item of ( results | async); let i = index' (swiperight)=\"swiped(i,item.post_id,'right')\"  (swipeleft)=\"swiped(i,item.post_id,'left')\"  (swipeup)=\"onSwipeUp( item.user_id,item.user_email,i )\">\n      <div id=\"streamIcon\">Stream</div>\n      <video playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobcg\" poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4\" type=\"video/mp4\">\n      </video>\n      <div id=\"PostData\" class=\"{{i}}PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 0\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#E91E63'}\" name=\"heart\" id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\" id=\"{{item.post_id}}likeCount\">{{ item.like }}</span><br *ngIf=\"item.liked == 1\"/>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"postIcon\"></ion-icon><span id=\"{{item.reposts}}repostCount\">{{ item.reposts }}</span><br>\n          <ion-icon class=\"icon\"  (click)=\"share(item.file)\" name=\"share\" id=\"postIcon\"></ion-icon><br>\n          <ion-icon class=\"icon\" name=\"text\" id=\"postIcon\" (click)=\"showAllComments(item.post_id)\"></ion-icon><span id=\"{{item.post_id}}CommentsCount\">0</span>\n          <div class=\"postViews\"><span class=\"{{ item.post_id }}views\"  id=\"{{i}}PostViews\">{{ item.post_id }}</span></div>\n      </div>\n\n      <div id=\"eyeView\"><ion-icon class=\"icon\" name=\"eye\" id=\"eye\"></ion-icon><span class=\"{{item.post_id}}viewCount\">0</span><br></div>\n\n      <div id=\"userinfo\" class=\"{{i}}userInfo\">\n         <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n         <p id=\"postDescription\">{{ item.description }}</p>\n         <span id=\"commentsHeading\">Comments</span><br/>\n         <div class=\"commentBox\" id=\"{{item.post_id}}commentBox\">\n            <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n              <span *ngIf=\"item.post_id == comment.post\" id=\"userComment\">\n                <span>@{{comment.user}}</span><span> {{ comment.comment }}</span><br><br>\n              </span>\n            </span>\n\n         </div>\n         <input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\" class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">\n         <span (click)=\"postComment(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <div (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\" [ngStyle]= \"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\"><ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon></div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n      <div  class=\"{{i}}heartAnimations\"  id=\"heartAnimations\">\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\"  class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n      \n      <div id=\"overlay\" (click)=\"playVideo(i, item.post_id)\">\n      </div>\n\n\n    <div id=\"{{item.post_id}}allComments\"  class=\"allComments animated fadeInUp\">\n      <div id=\"scrollableComments\" class=\"scrollableComments\">\n        <div class=\"totalComments\" id=\"{{item.post_id}}totalCOmments\"></div>\n        <div *ngFor='let comment of (commentsRef$ | async)' id=\"{{item.post_id}}allComments\">\n          <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span><p>{{ comment.comment }}</p></div>\n        </div>\n      </div>\n      <div id=\"fullComments\">\n        <input type=\"text\"  class=\"commentInput2\" id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n        <span (click)=\"postComment2(item.post_id)\" id=\"commentBtn\">Post</span>\n      </div>\n    </div>\n\n      <div>{{ results.length }}</div>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n</ion-content>\n\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
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
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n\nion-title {\n  text-align: -webkit-center;\n}\n\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\n\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.videobcg {\n  width: inherit;\n  height: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: black;\n}\n\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n\np#postGenre {\n  font-weight: bold;\n}\n\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#PostData span {\n  font-size: 11px;\n}\n\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n\n::-webkit-input-placeholder {\n  color: white;\n}\n\n::-moz-placeholder {\n  color: white;\n}\n\n:-ms-input-placeholder {\n  color: white;\n}\n\n::-ms-input-placeholder {\n  color: white;\n}\n\n::placeholder {\n  color: white;\n}\n\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.commentBox {\n  width: 100%;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\n\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 100px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\n\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 13px;\n}\n\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n\n.allComments {\n  width: 100%;\n  height: 300px;\n  background: white;\n  position: absolute;\n  z-index: 1016;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n}\n\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n\n.postViews {\n  opacity: 0;\n}\n\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  padding: 12px;\n  border-radius: 27px;\n  color: white;\n  font-size: 12px;\n  width: 100px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n\n.icon {\n  margin-top: 12px;\n}\n\n#userComment {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#comment {\n  font-size: 13px;\n}\n\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\n\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\n\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n}\n\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.49);\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\n\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\n\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\n\ndiv#heartAnimations ion-icon#animation1 {\n  color: #E91E63;\n  margin-right: 15px;\n}\n\ndiv#heartAnimations ion-icon#animation2 {\n  color: #E91E63;\n  margin-left: 20px;\n}\n\ndiv#heartAnimations ion-icon#animation3 {\n  color: #E91E63;\n  margin-right: 30px;\n}\n\ndiv#heartAnimations ion-icon#animation4 {\n  color: #E91E63;\n}\n\ndiv#eyeView {\n  position: absolute;\n  top: 0;\n  margin-left: 75px;\n  margin-top: 15px;\n  font-size: 17px;\n  color: white;\n  border-radius: 26%;\n  padding: 4px;\n}\n\ndiv#eyeView span {\n  margin-left: 5px !important;\n}\n\ndiv#scrollableComments {\n  width: 100%;\n  height: 200px;\n  overflow: scroll;\n}\n\n.totalComments {\n  width: 100%;\n  height: 26px;\n  font-weight: bold;\n  font-size: 13px;\n  padding-top: 10px;\n  position: fixed;\n  background: white;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0RGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDSEY7O0FETUE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESEE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNGTDtFREdBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0FQO0FBQ0Y7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRElBO0VBQ0UsWUFBQTtBQ0xGOztBRElBO0VBQ0UsWUFBQTtBQ0xGOztBRElBO0VBQ0UsWUFBQTtBQ0xGOztBRElBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0xGOztBRE9FO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNOSjs7QURXQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNSRjs7QURXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFlFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVko7O0FEYUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDWEo7O0FEZ0JBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ2JGOztBRGVFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGtCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDaEJKOztBRGNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNoQko7O0FEY0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURjRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDaEJKOztBRGNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLFVBQUE7QUNsQkY7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsZ0JBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDbEJGOztBRHFCQTtFQUNFLGVBQUE7QUNsQkY7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDbkJGOztBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNuQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FEc0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJOOztBRHdCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3RCSjs7QUQwQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ3ZCRjs7QUQwQkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDeEJKOztBRDBCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3hCSjs7QUQwQkU7RUFDRSxjQUFBO0FDeEJKOztBRDRCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3pCRjs7QUQyQkU7RUFDRSwyQkFBQTtBQ3pCSjs7QUQ2QkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDMUJGOztBRDZCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQzFCRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW1nLmxvZ29mb250IHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5ob21lVXBsb2Fke1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5ob21lU2VuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcblxufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuLnZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jc2xpZGVze1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuXG46OnBsYWNlaG9sZGVye1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0LmNvbW1lbnRJbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA4NSU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4jY29tbWVudEJ0bntcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOjk1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAjcG9zdERlc2NyaXB0aW9ue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMTY7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuXG5cbiAgcHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbiAgc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuICAjYWxsY29tQ29tbWVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gIH1cbn1cblxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC5jb21tZW50SW5wdXQye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNjklO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxuXG4gIH1cblxuICA6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAjY29tbWVudEJ0bntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9zdFZpZXdze1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbmRpdiNzdHJlYW1JY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbi5pY29ue1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnR7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNjb21tZW50e1xuICBmb250LXNpemU6MTNweDtcbn1cblxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIHNwYW57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTglO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAgIGRpdiNpbWFnZSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OSk7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBmbG9hdDogbGVmdDtcblxuICB9XG5cbiAgcHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuZGl2I2hlYXJ0QW5pbWF0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNTFweDtcbiAgZGlzcGxheTogbm9uZTtcblxuXG4gIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICAgIGNvbG9yOiAjRTkxRTYzO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgICBjb2xvcjogI0U5MUU2MztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfSAgXG4gIGlvbi1pY29uI2FuaW1hdGlvbjMge1xuICAgIGNvbG9yOiAjRTkxRTYzO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfSAgXG4gIGlvbi1pY29uI2FuaW1hdGlvbjQge1xuICAgIGNvbG9yOiAjRTkxRTYzO1xuICB9XG59XG5cbmRpdiNleWVWaWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjYlO1xuICBwYWRkaW5nOiA0cHg7XG5cbiAgc3BhbntcbiAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuZGl2I3Njcm9sbGFibGVDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udG90YWxDb21tZW50c3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjUG9zdERhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmRpdiNQb3N0RGF0YSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5kaXYjb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgei1pbmRleDogMTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA5NSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5kaXYjdXNlcmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdiN1c2VyaW5mbyAjcG9zdERlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAxNjtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5hbGxDb21tZW50cyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5hbGxDb21tZW50cyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hbGxDb21tZW50cyAjYWxsY29tQ29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2Z1bGxDb21tZW50cyAuY29tbWVudElucHV0MiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA2OSU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4jZnVsbENvbW1lbnRzIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiNmdWxsQ29tbWVudHMgI2NvbW1lbnRCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvc3RWaWV3cyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmRpdiNzdHJlYW1JY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAyZTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI3NoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiA1NHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuZGl2I3Byb2ZpbGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbmRpdiNwcm9maWxlSW1hZ2Ugc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIGRpdiNpbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OSk7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICBjb2xvcjogI0U5MUU2MztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gIGNvbG9yOiAjRTkxRTYzO1xufVxuXG5kaXYjZXllVmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgcGFkZGluZzogNHB4O1xufVxuZGl2I2V5ZVZpZXcgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3Njcm9sbGFibGVDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udG90YWxDb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/requests.service */ "./src/app/services/requests.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");














var Tab1Page = /** @class */ (function () {
    function Tab1Page(tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage) {
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
    Tab1Page.prototype.displayComments = function () {
        this.commentsRef$.subscribe(function (val) {
            console.log("Comments", val);
            //load comments bottom
            setTimeout(function () {
                this.commnentsTab = document.getElementsByClassName("commentBox");
                this.commnentsTab = document.getElementsByClassName("commentBox");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab.length; x++) {
                    this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
                    console.log("scroll top", this.commnentsTab[x].scrollTop);
                    console.log("scroll height", this.commnentsTab[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
                //reset the comments count for each post
                for (var c = 0; c < val.length; c++) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (var c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    var currentTotalComments = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
                //
                //commentinput 2
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                //display the last comment added
                for (var x = 0; x < this.commnentsTab2.length; x++) {
                    this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
                    console.log("scroll top2", this.commnentsTab2[x].scrollTop);
                    console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
            }, 1000);
        });
    };
    Tab1Page.prototype.CommentsUp = function (i) {
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
    };
    Tab1Page.prototype.CommentsDown = function (i) {
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
    };
    Tab1Page.prototype.share = function (file) {
        this.presentActionSheet();
    };
    Tab1Page.prototype.ionicSlide = function () {
        var _this = this;
        this.slide.getActiveIndex().then(function (val) {
            console.log(val);
            _this.playVideo(val);
        });
    };
    Tab1Page.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.slide.getActiveIndex().then(function (val) {
            console.log("left slide ", val);
            _this.pauseVideo(val);
        });
        console.log("Leaving");
    };
    Tab1Page.prototype.commentAdded = function () {
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
    Tab1Page.prototype.playVideo = function (id) {
        var video = document.getElementById(id + "videobcg");
        this.tabs.bottom = true;
        var CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        for (var x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        // this.CommentsUp(id);
        console.log("id", id);
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
    };
    Tab1Page.prototype.pauseVideo = function (id) {
        var video = document.getElementById(id + "videobcg");
        console.log(id);
        console.log("paused", video.paused);
        video.pause();
    };
    Tab1Page.prototype.repost = function (post_id) {
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
    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
    Tab1Page.prototype.presentToast = function (message) {
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
    Tab1Page.prototype.onSwipeUp = function (user_id, email, i) {
        console.log("swipe up");
        console.log(user_id, email);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.pauseVideo(i);
        this.route.navigate(['/home/tabs/profile']);
    };
    Tab1Page.prototype.doRefresh = function (event) {
        var _this = this;
        console.log(event);
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
            _this.ionViewDidEnter();
        }, 2000);
    };
    Tab1Page.prototype.like = function (post_id, slideId) {
        var _this = this;
        console.log(post_id);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        var like = this.requests.Like(profile_url, this.email, post_id);
        like.subscribe(function (response) {
            console.log(response);
            //if false meaning had not been liked, but now liked
            console.log(_this.email);
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
    };
    Tab1Page.prototype.postComment = function (post_id) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    };
    Tab1Page.prototype.postComment2 = function (post_id) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput2").val();
        var postedBy;
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "commentInput2").val("");
            }
            console.log(commentMessage);
        });
    };
    Tab1Page.prototype.showAllComments = function (post_id) {
        console.log(post_id);
        this.tabs.bottom = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "allComments").show();
        //commentinput 2
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        //display the last comment added
        for (var x = 0; x < this.commnentsTab2.length; x++) {
            this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
            console.log("scroll top2", this.commnentsTab2[x].scrollTop);
            console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
        var totalComments = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").text();
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "totalCOmments").text(totalComments + " Comments");
        console.log("total comments", totalComments);
    };
    Tab1Page.prototype.changeIconColors = function () {
        this.tabs.tab1 = "#fc8700";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    Tab1Page.prototype.playFirstVideo = function () {
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.playFirstVideo();
        //change icon colors
        this.changeIconColors();
        this.storage.get('mail').then(function (val) {
            console.log('Your email is', val);
            _this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            // var profile_url = 'http://127.0.0.1:8000/users/users'
            if (_this.email == undefined) {
                console.log(_this.email);
                _this.route.navigate(['/home/tabs/tab1']);
            }
            else {
                console.log(_this.email);
                _this.results = _this.requests.getFeed(profile_url, _this.email);
            }
        });
    };
    Tab1Page.prototype.presentNotificationToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({ message: msg.body, duration: 3000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.swiped = function (id, post_id, direction) {
        var _this = this;
        console.log("post", post_id);
        console.log("left");
        var idd = id - 1;
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
            var current_post_id_1 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id + 1) + "PostViews").text();
            var prev_post_id_1 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "PostViews").text();
            this.storage.get("current_userID").then(function (val) {
                _this.database.list("views/").remove(JSON.stringify(val + current_post_id_1));
                _this.database.list("views/").remove(JSON.stringify(val + prev_post_id_1));
                _this.database.object("views/" + JSON.stringify(val + current_post_id_1)).set({ "user": val, "post_id": current_post_id_1 });
                //display views
                _this.postViewsRef$.subscribe(function (val) {
                    for (var c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (var v = 0; v < val.length; v++) {
                        var key = Object.keys(val[v])[0];
                        console.log(key);
                        var post_id_1 = val[v].post_id;
                        console.log(post_id_1);
                        var current_views = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_1 + "viewCount").text());
                        current_views += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_1 + "viewCount").text(current_views);
                    }
                });
            });
            console.log(current_post_id_1);
        }
        else if (direction == "right") {
            var current_post_id_2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + idd + "PostViews").text();
            var prev_post_id_2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id) + "PostViews").text();
            this.storage.get("current_userID").then(function (val) {
                _this.database.list("views/").remove(JSON.stringify(val + current_post_id_2));
                _this.database.list("views/").remove(JSON.stringify(val + prev_post_id_2));
                _this.database.object("views/" + JSON.stringify(val + current_post_id_2)).set({ "user": val, "post_id": current_post_id_2 });
                _this.postViewsRef$.subscribe(function (val) {
                    for (var c = 0; c < val.length; c++) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + val[c].post_id + "viewCount").text("0");
                    }
                    for (var v = 0; v < val.length; v++) {
                        var key = Object.keys(val[v])[0];
                        console.log(key);
                        var post_id_2 = val[v].post_id;
                        console.log(post_id_2);
                        var current_views = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_2 + "viewCount").text());
                        current_views += 1;
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_2 + "viewCount").text(current_views);
                    }
                });
            });
        }
    };
    //loading component
    Tab1Page.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            duration: 4000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // const { role, data } = await loading.onDidDismiss();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    //present share options
    Tab1Page.prototype.presentActionSheet = function () {
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
    Tab1Page.ctorParameters = function () { return [
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
    ]; };
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
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map