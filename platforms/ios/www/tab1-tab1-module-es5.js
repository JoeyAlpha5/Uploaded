(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <!--<ion-refresher  *ngIf=\"refresh ==  true\" id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>-->\n  <ion-slides #slider id=\"slides\" (ionSlideDidChange)=\"currentSlideVideo()\" (ionSlidesDidLoad)=\"setFirstViews()\" [options]=\"slideOpts\">\n    <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'\n      (swiperight)=\"swiped(i,item.post_id,'right')\" (swipeleft)=\"swiped(i,item.post_id,'left')\"\n      (swipeup)=\"onSwipeUp( item.user_id,item.user_email,i )\">\n      <div id=\"liveDot\"></div>\n      <div id=\"streamIcon\">Stream</div>\n      <video playsinline webkit-playsinline class=\"videobcg\" (ended)=\"getNext(item.username,i)\" id=\"{{i}}videobcg\"\n        poster=\"https://res.cloudinary.com/uploaded/video/upload/v1567818053/{{ item.file }}.jpg\">\n        <source id=\"{{i}}videobsource\"\n          src=\"https://res.cloudinary.com/uploaded/video/upload/q_auto:low/{{ item.file }}.mp4#t={{ item.start }}\"\n          type=\"video/mp4\">\n      </video>\n      <div id=\"{{i}}FirstPostData\" *ngIf=\"display_firsts == true\">\n        <div id=\"PostData\" class=\"{{i}}PostData\">\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\"\n            (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\"\n            id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n          <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#fc8700'}\" name=\"heart\"\n            id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\"\n            id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n          <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"{{i}}repostIcon\"></ion-icon><span\n            id=\"{{item.post_id}}repostCount\">{{ item.reposts }}</span>\n          <ion-icon class=\"icon\" (click)=\"share(item.file)\" name=\"share\" id=\"{{i}}shareIcon\"></ion-icon><br/>\n          <ion-icon class=\"icon\" name=\"text\" id=\"{{ i }}postIcon\" (click)=\"showAllComments(item.post_id, i)\"></ion-icon>\n          <span id=\"{{item.post_id}}CommentsCount\">0</span>\n          <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}PostViews\">{{ item.post_id }}</span>\n          </div>\n        </div>\n      </div>\n      \n      <div id=\"{{i}}newPostData\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n        <div *ngIf=\"post.username == item.username \">\n          <div id=\"PostData\" class=\"{{p}}PostData\">\n            <ion-icon class=\"icon\" *ngIf=\"post.liked == 0\" name=\"heart\" id=\"{{post.post_id}}likeIcon\"\n              (click)=\"like(post.post_id,i)\"></ion-icon><span *ngIf=\"post.liked == 0\"\n              id=\"{{post.post_id}}likeCount\">{{ post.like }}</span>\n            <ion-icon class=\"icon\" *ngIf=\"post.liked == 1\" [ngStyle]=\"{color:'#fc8700'}\" name=\"heart\"\n              id=\"{{post.post_id}}likeIcon\" (click)=\"like(post.post_id,i)\"></ion-icon><span *ngIf=\"post.liked == 1\"\n              id=\"{{post.post_id}}likeCount\">{{ post.like }}</span>\n            <ion-icon class=\"icon\" (click)=\"repost(post.post_id)\" name=\"share-alt\" id=\"{{i}}repostIcon\"></ion-icon><span\n              id=\"{{post.post_id}}repostCount\">{{ post.reposts }}</span>\n            <ion-icon class=\"icon\" (click)=\"share(post.file)\" name=\"share\" id=\"{{i}}shareIcon\"></ion-icon><br/>\n            <ion-icon class=\"icon\" name=\"text\" id=\"{{ i }}postIcon\" (click)=\"showAllComments(post.post_id,i)\">\n            </ion-icon><span id=\"{{post.post_id}}CommentsCount\">0</span>\n            <div class=\"postViews\"><span class=\"{{ post.post_id }}views\" id=\"{{i}}PostViews\">{{ post.post_id }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      \n      <div id=\"eyeView\">\n        <ion-icon class=\"icon\" name=\"eye\" id=\"eye\"></ion-icon><span id=\"{{i}}viewCount\" class=\"{{item.post_id}}viewCount \">0</span><br>\n        <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}ReservedPostViews\">{{ item.post_id }}</span></div>\n      </div>\n\n      <div id=\"userinfo\" class=\"{{i}}userInfo\" *ngIf=\"userInfo ==  true\">\n        <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n        <p id=\"postDescription\" class=\"{{i}}PostDescription\">{{ item.description }}</p>\n        <span id=\"commentsHeading\">Comments</span><br />\n        <div *ngIf=\"display_firsts == true\" class=\"{{i}}oldPostComments\" id=\"{{ item.post_id }}actualCommnents\">\n          <div class=\"commentBox\" id=\"{{i}}commentBox\">\n            <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n              <span *ngIf=\"item.post_id == comment.post\" class=\"{{i}}commentSection\" id=\"userComment\">\n                <span id=\"userCommenter\">@{{comment.user}}</span><span> {{ comment.comment }}</span><br><br>\n              </span>\n            </span>\n          </div>\n      </div>\n        <div id=\"{{i}}nextPostComments\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n          <div id=\"{{ post.post_id }}actualCommnents\">\n          <div *ngIf=\"post.username == item.username \" class=\"commentBox\" id=\"{{i}}commentBoxNew\">\n            <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n              <span *ngIf=\"post.post_id == comment.post\" class=\"{{i}}commentSection\" id=\"userComment\">\n                <span id=\"userCommenter\">@{{comment.user}}</span><span> {{ comment.comment }}</span><br><br>\n              </span>\n            </span>\n          </div>\n          </div>\n        </div>\n        <!--<input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\"*/ class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">-->\n        <input type=\"text\" (focus)=\"CommentsUp(i)\" class=\"commentInput\" id=\"{{i}}commentInput\"\n          placeholder=\"Add Comment...\">\n        <label class=\"{{i}}CommentLabel\" for=\"{{i}}commentInput\" id=\"commentBtn\"><span\n            (click)=\"postComment(i)\">Post</span></label>\n      </div>\n\n\n\n      <div id=\"profileImage\" *ngIf=\"item.image\">\n        <svg class=\"_18eSE\" width=\"60\" height=\"60\" viewBox=\"0 0 104 104\">\n          <circle id=\"{{i}}Circle\" cx=\"52\" cy=\"52\" r=\"50\" fill=\"transparent\" stroke-linecap=\"round\" stroke-width=\"4\" stroke-dashoffset=\"387.69908169872417\" class=\"_3yudO\" stroke=\"white\" stroke-width=\"3\"></circle>\n        </svg>\n        <div class=\"circle\" (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\"\n          [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+ item.image +'.jpg)'}\">\n          <ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon>\n        </div>\n        <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n      </div>\n\n      <div class=\"{{i}}heartAnimations\" id=\"heartAnimations\">\n        <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n        <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n        <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n        <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n      </div>\n\n      <div id=\"overlay\" class=\"{{item.post_id}}Overlay\" (click)=\"removeItems(i, item.post_id)\">\n      </div>\n\n      <div id=\"newPostOverlay\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n        <div *ngIf=\"post.username == item.username\" id=\"overlay\" (click)=\"removeItems(i, post.post_id)\">\n        </div>\n      </div>\n\n      <div *ngIf=\"display_firsts == true\" id=\"playPause\" class=\"{{i}}playPauseDiv {{i}}playPauseBtn2\">\n          <ion-icon class=\"playPauseIcon\" id=\"{{i}}playPause\" (click)=\"playVideo(i, item.post_id)\" name=\"pause\"></ion-icon>\n      </div>\n\n\n      <circle-progress id=\"ngCircle\" class=\"{{i}}videoProgress\"\n      [percent]=\"percent\"\n      [radius]=\"25\"\n      [outerStrokeWidth]=\"2\"\n      [innerStrokeWidth]=\"2\"\n      [outerStrokeColor]=\"'#fc8700'\"\n      [innerStrokeColor]=\"'#ffffff'\"\n      [animation]=\"true\"\n      [animationDuration]=\"300\"\n      [showTitle]=\"false\"\n      [showSubtitle]=\"false\"\n      [showUnits]=\"false\"\n      [startFromZero]=\"false\"\n    ></circle-progress>\n      <div id=\"playPause\" class=\"{{i}}playPauseDiv {{i}}playPauseDiv2\" *ngFor=\"let post of ( nextPostData | async); let p = index\">\n          <ion-icon class=\"playPauseIcon\" *ngIf=\"post.username == item.username\" (click)=\"playVideo(i, post.post_id)\" id=\"{{i}}playPause2\" name=\"pause\"></ion-icon>\n      </div>\n\n      <div id=\"{{item.post_id}}allComments\" class=\"allComments animated fadeInUp\">\n        <div id=\"scrollableComments\" class=\"scrollableComments\">\n          <div class=\"totalComments\" id=\"{{item.post_id}}totalCOmments\"></div>\n          <div *ngFor='let comment of (commentsRef$ | async),let c = index' id=\"{{item.post_id}}allComments\">\n            <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span>\n              <p>{{ comment.comment }}</p>\n              <ion-icon class=\"{{c}}likeComment\" id=\"likeComment\" name=\"heart-empty\" (click)=\"likeComment(c)\">\n              </ion-icon>\n            </div>\n          </div>\n        </div>\n\n        <ion-footer keyboard-attach class=\"bar-assertive\">\n          <div id=\"fullComments\">\n            <input type=\"text\" (focus)=\"attchKeyBoard()\" (blur)=\"dettchKeyBoard()\" class=\"commentInput2\"\n              id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n            <label for=\"{{item.post_id}}commentInput2\" id=\"commentBtn\"><span (click)=\"postComment2(item.post_id)\"\n                id=\"commentBtn\">Post</span></label>\n          </div>\n        </ion-footer>\n      </div>\n\n\n\n      <div *ngFor=\"let post of ( nextPostData | async); let p = index\" id=\"{{post.post_id}}allComments\"\n        class=\"allComments animated fadeInUp\">\n        <div id=\"scrollableComments\" class=\"scrollableComments\">\n          <div class=\"totalComments\" id=\"{{post.post_id}}totalCOmments\"></div>\n          <div *ngFor='let comment of (commentsRef$ | async),let c = index' id=\"{{post.post_id}}allComments\">\n            <div id=\"allcomComment\" *ngIf=\"post.post_id == comment.post\"><span>@{{comment.user}}</span>\n              <p>{{ comment.comment }}</p>\n              <ion-icon class=\"{{c}}likeComment\" id=\"likeComment\" name=\"heart-empty\" (click)=\"likeComment(c)\">\n              </ion-icon>\n            </div>\n          </div>\n        </div>\n\n        <ion-footer keyboard-attach class=\"bar-assertive\">\n          <div id=\"fullComments\">\n            <input type=\"text\" (focus)=\"attchKeyBoard()\" (blur)=\"dettchKeyBoard()\" class=\"commentInput2\"\n              id=\"{{post.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n            <label for=\"{{post.post_id}}commentInput2\" id=\"commentBtn\"><span (click)=\"postComment2(post.post_id)\"\n                id=\"commentBtn\">Post</span></label>\n          </div>\n        </ion-footer>\n      </div>\n\n      <div id=\"disapearingComment\" class=\"{{i}}LatestComment animated fadeInUp\" *ngIf=\"latest_comment.post == item.post_id\">\n         <p><span>@{{latest_comment.user}}</span> {{ latest_comment.comment }}</p>\n      </div>\n\n      <div>{{ results.length }}</div>\n\n      <ion-spinner name=\"crescent\" id=\"spinner\" class=\"{{i}}Spinner\"></ion-spinner>\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n</ion-content>"

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
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
                // Specify ng-circle-progress as an import
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                })
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

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('Roboto-Medium.ttf');\n}\np, span, ion-label, ion-searchbar {\n  font-family: \"helvetica\" !important;\n}\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\nion-title {\n  text-align: -webkit-center;\n}\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.videobcg {\n  width: inherit;\n  height: inherit;\n  background: black;\n}\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\n#spinner {\n  position: absolute;\n  z-index: 99999999999;\n  color: orange;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#playPause {\n  position: absolute;\n  width: 32px;\n  height: 100px;\n  bottom: 0;\n  margin-bottom: 100px;\n  color: white;\n  right: 0;\n  z-index: 9999999999;\n  margin-right: 30px;\n  font-size: 25px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#disapearingComment {\n  width: 276px;\n  position: absolute;\n  color: white;\n  z-index: 9999999999999;\n  bottom: 0;\n  height: 36px;\n  margin-bottom: 128px;\n  left: 0;\n  font-size: 15px;\n  text-align: left;\n  margin-left: 15px;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#playPauseIcon {\n  position: absolute;\n  z-index: 99999;\n  margin-right: 15px !important;\n  right: 0;\n}\ndiv#disapearingComment span {\n  font-size: 12px;\n  font-weight: bold;\n}\np#postGenre {\n  font-weight: bold;\n}\ndiv#newPostOverlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#PostData span {\n  font-size: 13px;\n  display: flow-root;\n  line-height: 0px;\n  font-weight: bold;\n}\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n::-webkit-input-placeholder {\n  color: white;\n}\n::-moz-placeholder {\n  color: white;\n}\n:-ms-input-placeholder {\n  color: white;\n}\n::-ms-input-placeholder {\n  color: white;\n}\n::placeholder {\n  color: white;\n}\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.commentBox {\n  width: 280px;\n  height: 135px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 78px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 14px;\n}\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n.bar-assertive {\n  bottom: 0px;\n  position: absolute;\n}\n.allComments {\n  width: 100%;\n  height: 433px;\n  position: absolute;\n  z-index: 99999;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  background: white;\n  padding-top: 12px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n.postViews {\n  opacity: 0;\n}\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  font-family: \"helveticaB\" !important;\n  padding: 6px;\n  border-radius: 27px;\n  color: white;\n  font-size: 14px;\n  width: 73px;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n.icon {\n  margin-top: 12px;\n}\n#userComment {\n  font-size: 13px;\n}\n#userCommenter {\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n}\n#comment {\n  font-size: 13px;\n}\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: bold;\n}\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\ndiv#heartAnimations ion-icon#animation1 {\n  color: #fc8700;\n  margin-right: 15px;\n}\ndiv#heartAnimations ion-icon#animation2 {\n  color: #fc8700;\n  margin-left: 20px;\n}\ndiv#heartAnimations ion-icon#animation3 {\n  color: #fc8700;\n  margin-right: 30px;\n}\ndiv#heartAnimations ion-icon#animation4 {\n  color: #fc8700;\n}\n#ngCircle {\n  position: absolute;\n}\n#ngCircle {\n  position: absolute;\n  float: right;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 150px;\n  margin-right: 15px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\nion-icon#eye {\n  margin-top: 1px;\n}\ndiv#liveDot {\n  position: absolute;\n  z-index: 999999999;\n  width: 8px;\n  height: 8px;\n  background: #F44336;\n  border-radius: 50%;\n  top: 0;\n  margin-top: 21px;\n  margin-left: 33px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#eyeView {\n  position: absolute;\n  top: 0;\n  margin-left: 53px;\n  margin-top: 15px;\n  font-size: 17px;\n  color: white;\n  border-radius: 26%;\n  padding: 4px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 9999;\n  background: #0000002e;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 21px;\n  border-radius: 10px;\n  margin-top: 25px;\n  width: auto;\n}\ndiv#eyeView span {\n  margin-left: 4px !important;\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n  float: right;\n  margin-top: 2px;\n  margin-right: 2px;\n}\ndiv#scrollableComments {\n  width: 100%;\n  height: 361px;\n  overflow: scroll;\n  background: white;\n}\nion-icon#likeComment {\n  float: right;\n  font-size: 15px;\n  margin-right: 10px;\n}\n.totalComments {\n  width: 100%;\n  height: 26px;\n  font-weight: bold;\n  font-size: 13px;\n  padding-top: 10px;\n  position: absolute;\n  background: white;\n  padding-bottom: 10px;\n  z-index: 99;\n}\nsvg._18eSE {\n  float: left;\n  position: absolute;\n  left: 0;\n  margin-left: 11px;\n  margin-top: 11.4%;\n}\n@media (max-width: 361px) {\n  playPauseIcon {\n    margin-right: 29px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQ0FGO0FESUE7RUFDSSxtQ0FBQTtBQ0ZKO0FET0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSkY7QURRQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0FDTEY7QURRQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDTEY7QURTQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ05GO0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNSRjtBRFdBO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDUEw7RURRQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNMUDtBQUNGO0FERUE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNQTDtFRFFBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0xQO0FBQ0Y7QURTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNB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O0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ2xDRjtBRHNDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbkNKO0FEc0NBO0VBQ0U7SUFDRSxrQkFBQTtFQ25DRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJztcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5cbkBmb250LWZhY2V7XG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhQic7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0Zik7XG59XG5cblxucCwgc3BhbiwgaW9uLWxhYmVsLGlvbi1zZWFyY2hiYXJ7XG4gICAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW1nLmxvZ29mb250IHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5ob21lVXBsb2Fke1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5ob21lU2VuZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcblxufVxuXG5kaXYjTG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgI0ZGOTgwMDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cblxuLnZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbiNzcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuZGl2I3BsYXlQYXVzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jZGlzYXBlYXJpbmdDb21tZW50IHtcbiAgd2lkdGg6IDI3NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEyOHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jcGxheVBhdXNlSWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwO1xufVxuXG5kaXYjZGlzYXBlYXJpbmdDb21tZW50IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wI3Bvc3RHZW5yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjbmV3UG9zdE92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdiNQb3N0RGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgei1pbmRleDogMTAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5cbmRpdiNvdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbjo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY29tbWVudElucHV0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbiNjb21tZW50QnRue1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5kaXYjdXNlcmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDc4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6OTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gICNwb3N0RGVzY3JpcHRpb257XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbn1cblxuc3BhbiNjb21tZW50c0hlYWRpbmcge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5iYXItYXNzZXJ0aXZle1xuICBib3R0b206MHB4O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuLmFsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuXG5cbiAgcHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbiAgc3BhbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuICAjYWxsY29tQ29tbWVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gIH1cbn1cblxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG5cbiAgLmNvbW1lbnRJbnB1dDJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA2OSU7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG5cbiAgfVxuXG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICNjb21tZW50QnRue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbmlvbi1pY29uI3Byb2ZpbGVJb2NuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3N0Vmlld3N7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDczcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbi5pY29ue1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI3VzZXJDb21tZW50ZXJ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG59XG5cbiNjb21tZW50e1xuICBmb250LXNpemU6MTNweDtcbn1cblxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIHNwYW57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTglO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAgIGRpdiNpbWFnZSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTMlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gIH1cblxuICBwe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5kaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MXB4O1xuICBkaXNwbGF5OiBub25lO1xuXG5cbiAgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIGlvbi1pY29uI2FuaW1hdGlvbjIge1xuICAgIGNvbG9yOiAjZmM4NzAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uMyB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gIH1cbn1cblxuI25nQ2lyY2xle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuXG4jbmdDaXJjbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBcbn1cblxuaW9uLWljb24jZXllIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG5kaXYjbGl2ZURvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjZXllVmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNTNweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgcGFkZGluZzogNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG5cbiAgc3BhbntcbiAgICBtYXJnaW4tbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG59XG5cbmRpdiNzY3JvbGxhYmxlQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNjFweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uI2xpa2VDb21tZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsQ29tbWVudHN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk7XG59XG5cblxuc3ZnLl8xOGVTRSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgbWFyZ2luLXRvcDogMTEuNCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjM2MXB4KXtcbiAgcGxheVBhdXNlSWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDI5cHg7XG4gIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCI7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0udHRmKTtcbn1cbnAsIHNwYW4sIGlvbi1sYWJlbCwgaW9uLXNlYXJjaGJhciB7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW1nLmxvZ29mb250IHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5ob21lVXBsb2FkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhvbWVTZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00OWRlZyk7XG59XG5cbmRpdiNMb2FkZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjRkY5ODAwO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLnZpZGVvYmNnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbiNzbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG4jc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNwbGF5UGF1c2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI2Rpc2FwZWFyaW5nQ29tbWVudCB7XG4gIHdpZHRoOiAyNzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMjhweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI3BsYXlQYXVzZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDA7XG59XG5cbmRpdiNkaXNhcGVhcmluZ0NvbW1lbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNuZXdQb3N0T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2I1Bvc3REYXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5kaXYjUG9zdERhdGEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxvdy1yb290O1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0LmNvbW1lbnRJbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA4NSU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4jY29tbWVudEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNzhweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogOTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuZGl2I3VzZXJpbmZvIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5kaXYjdXNlcmluZm8gI3Bvc3REZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJhci1hc3NlcnRpdmUge1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5hbGxDb21tZW50cyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5hbGxDb21tZW50cyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hbGxDb21tZW50cyAjYWxsY29tQ29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG4jZnVsbENvbW1lbnRzIC5jb21tZW50SW5wdXQyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDY5JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbiNmdWxsQ29tbWVudHMgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI2Z1bGxDb21tZW50cyAjY29tbWVudEJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9zdFZpZXdzIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDczcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiN1c2VyQ29tbWVudGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNzaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNTRweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbmRpdiNwcm9maWxlSW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDA7XG59XG5kaXYjcHJvZmlsZUltYWdlIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTglO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZGl2I3Byb2ZpbGVJbWFnZSBkaXYjaW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTMlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuZGl2I3Byb2ZpbGVJbWFnZSBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24xIHtcbiAgY29sb3I6ICNmYzg3MDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uMiB7XG4gIGNvbG9yOiAjZmM4NzAwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uMyB7XG4gIGNvbG9yOiAjZmM4NzAwO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjQge1xuICBjb2xvcjogI2ZjODcwMDtcbn1cblxuI25nQ2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jbmdDaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24jZXllIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG5kaXYjbGl2ZURvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjZXllVmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNTNweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgcGFkZGluZzogNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG59XG5kaXYjZXllVmlldyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbmRpdiNzY3JvbGxhYmxlQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNjFweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uI2xpa2VDb21tZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG5zdmcuXzE4ZVNFIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIG1hcmdpbi10b3A6IDExLjQlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYxcHgpIHtcbiAgcGxheVBhdXNlSWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");

















var Tab1Page = /** @class */ (function () {
    function Tab1Page(socialSharing, keyboard, tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage, oneSignal) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.keyboard = keyboard;
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
        this.oneSignal = oneSignal;
        this.display_firsts = true;
        this.refresh = true;
        this.userInfo = true;
        this.mute = true;
        this.circle_circum = 294.159265359;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.commentsRef$ = this.database.list("comments").valueChanges();
        this.postViewsRef$ = this.database.list("views").valueChanges();
        this.likedComments = this.database.list("comment_likes").valueChanges();
        // this.commentsRef$ = this.database.list("reposts").valueChanges();
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.platform.backButton.subscribeWithPriority(0, function () {
            if (_this.keyboard.isVisible == true) {
                _this.tabs.bottom = true;
                _this.statusBar.overlaysWebView(true);
                _this.slide.getActiveIndex().then(function (i) {
                    document.getElementById(i + "commentInput").blur();
                    _this.CommentsDown(i);
                });
            }
        });
    }
    Tab1Page.prototype.stopOtherVids = function () {
        //ensure previous videos are paused
        // executor (`the producing code, "singer")
        var a = document.getElementsByTagName("video");
        console.log("videos", a);
        for (var b = 0; b < a.length; b++) {
            a[b].pause();
        }
    };
    Tab1Page.prototype.displayComments = function () {
        var _this = this;
        this.commentsRef$.subscribe(function (val) {
            //
            // let array_length = val.length;
            // this.latest_comment =  val[array_length]; 
            // this.latest_comment.subscribe();
            var length_of_comments = val.length;
            _this.latest_comment = val[length_of_comments - 1];
            console.log("Comments", val, val[length_of_comments - 1]);
            _this.slide.getActiveIndex().then(function (i) {
                var current_coments_display = jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display");
                console.log(current_coments_display);
                if (current_coments_display == "none") {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").show();
                    setTimeout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").hide();
                    }, 5000);
                }
                // console.log("current comments display ", current_coments_display.css("display"));
            });
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
            }, 2000);
        });
    };
    Tab1Page.prototype.getNext = function (username, slideNum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile_url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("user " + username);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause").remove();
                console.log("ended");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "commentBox").remove();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "FirstPostData").remove();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "oldCommentsInput").remove();
                profile_url = 'https://uploaded.herokuapp.com/users/users';
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideNum + "Spinner").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideNum + "videobcg").css("display", "none");
                this.stopOtherVids();
                this.storage.get("mail").then(function (email) {
                    var user_post;
                    var req = _this.requests;
                    var com = _this.commentsRef$;
                    _this.nextPostData = _this.requests.getUserFeed(profile_url, username, email);
                    _this.nextPostData.subscribe();
                    //disable the firsts
                    _this.display_firsts = false;
                    //
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "FirstPostData").remove();
                    setTimeout(function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("fetching video");
                                        return [4 /*yield*/, req.getUserFeed(profile_url, username, email)];
                                    case 1:
                                        user_post = _a.sent();
                                        user_post.subscribe(function (users_post) {
                                            console.log(users_post);
                                            var post_id = users_post[0].post_id;
                                            console.log(post_id);
                                            var video_file = "https://res.cloudinary.com/uploaded/video/upload/q_auto:low/" + users_post[0].file + ".mp4#t=" + users_post[0].start + "";
                                            var post_description = users_post[0].description;
                                            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "videobsource").attr("src", video_file);
                                            var new_vid = document.getElementById(slideNum + "videobcg");
                                            jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideNum + "PostDescription").text(post_description);
                                            var comments_array = [];
                                            com.subscribe(function (comment) {
                                                console.log(comment);
                                                // $("."+slideNum+"commentSection").html("");
                                                for (var c = 0; c < comment.length; c++) {
                                                    if (comment[c].post == post_id) {
                                                        console.log(comment[c].post == post_id);
                                                        console.log(comment[c].post, post_id);
                                                        comments_array.push(comment[c]);
                                                    }
                                                    // {{post.post_id}}CommentsCount
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").text(comments_array.length);
                                                }
                                                // $("."+slideNum+"CommentLabel").html("<span (click)='postComment("+post_id+","+slideNum+")'>Post</span>");
                                                console.log(comments_array);
                                            });
                                            console.log(com);
                                            new_vid.load();
                                            // this.stopOtherVids();
                                            var a = document.getElementsByTagName("video");
                                            console.log("videos", a);
                                            for (var b = 0; b < a.length; b++) {
                                                a[b].pause();
                                            }
                                            //
                                            new_vid.play();
                                            jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideNum + "videobcg").css("display", "block");
                                            jquery__WEBPACK_IMPORTED_MODULE_2__("." + slideNum + "Spinner").hide();
                                            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause2").attr("name", "pause");
                                            if (window.innerWidth > 360) {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause").css("margin-right", "2.8px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause2").css("margin-right", "2.8px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause").css("margin-top", "1px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause2").css("margin-right", "1px");
                                            }
                                            else {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause").css("margin-right", "2px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause2").css("margin-right", "2px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause").css("margin-top", "0px");
                                                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slideNum + "playPause2").css("margin-right", "0px");
                                            }
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }, 2000);
                    // return this.requests;
                });
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.CommentsUp = function (i) {
        console.log("Move comments up");
        this.tabs.bottom = false;
        this.slide.lockSwipes(true);
        if (this.platform.is("android")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").hide();
        }
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "0px");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").hide();
            // $("."+i+"userInfo").css("margin-bottom","82%");
            // $("."+i+"PostData").css("margin-top","-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "0px");
        }
    };
    Tab1Page.prototype.CommentsDown = function (i) {
        this.statusBar.overlaysWebView(true);
        this.tabs.bottom = true;
        console.log("Move comments down");
        if (this.platform.is("android")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "100px");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "PostData").css("margin-top", "20%");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "100px");
        }
    };
    Tab1Page.prototype.attchKeyBoard = function () {
        this.statusBar.overlaysWebView(false);
    };
    Tab1Page.prototype.dettchKeyBoard = function (post_id) {
        this.statusBar.overlaysWebView(true);
        console.log(post_id);
    };
    Tab1Page.prototype.share = function (file) {
        this.presentActionSheet();
    };
    // ionicSlide(post_id){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val,post_id);
    //   });
    // }
    Tab1Page.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.slide.getActiveIndex().then(function (val) {
            console.log("left slide ", val);
            _this.pauseVideo(val);
            jquery__WEBPACK_IMPORTED_MODULE_2__("slides").html("");
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
    Tab1Page.prototype.playVideo = function (id, post_id) {
        var video = document.getElementById(id + "videobcg");
        this.tabs.bottom = true;
        var CommentsBox = jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        this.CommentsDown(id);
        this.refresh = true;
        this.userInfo = true;
        this.slide.lockSwipes(false);
        for (var x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        // this.CommentsUp(id);
        console.log("id", id);
        this.tabs.bottom = true;
        console.log(id);
        console.log("paused", video.paused);
        if (video.paused == true) {
            this.currentSlideVideo();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            // {{ post. }}actualCommnents
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "pause");
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "pause");
            if (window.innerWidth > 360) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-right", "2.8px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-right", "2.8px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-top", "1px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-right", "1px");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-right", "2px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-right", "2px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-top", "0px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-right", "0px");
            }
        }
        else {
            video.pause();
            // $("."+id+"userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            if (video.paused) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "play");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "play");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-right", "0px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-right", "0px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").css("margin-top", "0px");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").css("margin-top", "0px");
            }
        }
    };
    //set the video length
    Tab1Page.prototype.displayVideoDuration = function (current_lenght, video_length, current_slide) {
        var _this = this;
        var video_percent = Math.round((current_lenght / video_length) * 100);
        this.percent = video_percent;
        console.log("video duration at ", video_percent + "%");
        // clearInterval(this.VideoTimer);
        clearInterval();
        setInterval(function () {
            _this.slide.getActiveIndex().then(function (slide) {
                var video = document.getElementById(slide + "videobcg");
                var video_percent = Math.floor(video.currentTime / video.duration * 100);
                _this.percent = video_percent;
            });
        }, 1000);
    };
    Tab1Page.prototype.currentSlideVideo = function () {
        var _this = this;
        this.stopOtherVids();
        this.slide.getActiveIndex().then(function (currentSlide) {
            console.log("currentSlide after change is ", currentSlide);
            var current_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + currentSlide + "PostViews").text();
            var current_post_exits = true;
            console.log(current_post);
            if (current_post == "" || current_post == undefined || currentSlide == null) {
                current_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + currentSlide + "ReservedPostViews").text();
                current_post_exits = false;
            }
            var video = document.getElementById(currentSlide + "videobcg");
            _this.videoDuration = _this.requests.getDuration('https://uploaded.herokuapp.com/users/users', current_post);
            _this.videoDuration.subscribe(function (duration) {
                var video_length = video.duration;
                console.log(duration, video_length);
                video.currentTime = parseFloat(duration[0]);
                console.log("post username ", duration[2]);
                console.log(duration[1] == duration[3]);
                video.currentTime = parseFloat(duration[0]);
                if (duration[3] == duration[1]) {
                    video.currentTime = parseFloat(duration[0]);
                    _this.displayVideoDuration(duration[0], video_length, currentSlide);
                    if (current_post_exits == false) {
                        var profile_url_1 = 'https://uploaded.herokuapp.com/users/users';
                        _this.storage.get("mail").then(function (email) {
                            _this.nextPostData = _this.requests.getUserFeed(profile_url_1, duration[2], email);
                            _this.nextPostData.subscribe();
                        });
                    }
                    _this.stopOtherVids();
                    video.play();
                    console.log(document.getElementsByClassName(currentSlide + "playPauseDiv2")[0]);
                    if (document.getElementsByClassName(currentSlide + "playPauseDiv2")[0] != undefined) {
                        if (document.getElementsByClassName(currentSlide + "playPauseDiv2")[0].children.length <= 0) {
                            jquery__WEBPACK_IMPORTED_MODULE_2__("." + currentSlide + "playPauseBtn2").hide();
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_2__("." + currentSlide + "playPauseBtn2").show();
                        }
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + currentSlide + "playPauseBtn2").show();
                    }
                }
                else {
                    _this.getNext(duration[2], currentSlide);
                }
            });
        });
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
        var current_reposts = JSON.parse(jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text());
        console.log(current_reposts);
        var repost = this.requests.Repost(profile_url, this.email, post_id);
        repost.subscribe(function (x) {
            // console.log(x, current_reposts > x, current_reposts == x, current_reposts, x);
            if (current_reposts > x.Response || current_reposts == x.Response) {
                _this.presentToast("Repost removed");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text(x.Response);
                _this.slide.getActiveIndex().then(function (x) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + x + "repostIcon").css("color", "#ffffff");
                });
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").text(x.Response);
                _this.presentToast("Post has been shared to your feed");
                _this.slide.getActiveIndex().then(function (x) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + x + "repostIcon").css("color", "#fc8700");
                });
            }
        });
    };
    Tab1Page.prototype.removeItems = function (i, post_id) {
        jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "LatestComment").hide();
        console.log(this.keyboard.isVisible);
        console.log(jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").css("display"));
        if (this.keyboard.isVisible == true || jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").css("display") == "block") {
            this.tabs.bottom = true;
            this.statusBar.overlaysWebView(true);
            this.CommentsDown(i);
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + "allComments").hide();
            this.slide.lockSwipes(false);
        }
        else {
            var current_coments_display = jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo");
            console.log(current_coments_display.css("display"));
            if (current_coments_display.css("display") == "block") {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "repostIcon").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "shareIcon").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "postIcon").hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display", "block");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "repostIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "shareIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "postIcon").show();
            }
        }
        // let video = <HTMLVideoElement>document.getElementById(i+"videobcg");
        // if(this.platform.is("android") && this.mute == true){
        //   this.mute = false;
        //   video.muted = false;
        // }
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
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "likeIcon").css("color", "#fc8700");
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
    Tab1Page.prototype.postComment = function (i) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput").val();
        var post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "PostViews").text();
        var postedBy;
        console.log(post_id);
        this.storage.get('username').then(function (val) {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                _this.database.list("comments").push(comment);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput").val("");
                var profile_url = 'https://uploaded.herokuapp.com/users/users';
                var commentNotif = _this.requests.sendCommentNotification(profile_url, post_id, postedBy, commentMessage);
                commentNotif.subscribe(function (x) {
                    console.log("notification sent");
                });
            }
            console.log(commentMessage);
        });
    };
    Tab1Page.prototype.postComment2 = function (post_id, i) {
        var _this = this;
        var commentMessage = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "commentInput2").val();
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
        console.log("post id ", post_id);
        this.tabs.bottom = false;
        // $("#"+post_id+"allComments").show();
        jquery__WEBPACK_IMPORTED_MODULE_2__(".allComments").show();
        this.refresh = false;
        // this.userInfo = false;
        this.slide.lockSwipes(true);
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
        this.highlightLikedComments();
    };
    Tab1Page.prototype.highlightLikedComments = function () {
        var _this = this;
        this.likedComments.subscribe(function (x) {
            console.log(x);
            var _loop_1 = function (c) {
                var commentCount = x[c].comment_array_number;
                var user_id = x[c].user_id;
                _this.storage.get("current_userID").then(function (val) {
                    if (user_id == val) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + commentCount + "likeComment").css("color", "rgb(252, 135, 0)");
                    }
                });
            };
            for (var c = 0; c < x.length; c++) {
                _loop_1(c);
            }
        });
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
    Tab1Page.prototype.saveUserToken = function () {
        var _this = this;
        //savetoken
        this.oneSignal.getIds().then(function (identity) {
            var id = identity.userId;
            var url = 'https://uploaded.herokuapp.com/users/users';
            _this.storage.get("mail").then(function (mail) {
                var registerDevice = _this.requests.registerDevice(url, id, mail);
                registerDevice.subscribe(function (x) {
                    console.log("registration result ", x);
                });
            });
        });
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.statusBar.overlaysWebView(true);
                this.tabs.bgColor = 'transparent';
                this.displayComments();
                //save user toke
                this.saveUserToken();
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
                        _this.setFirstViews();
                        //listend for page load to display video count
                        var lstLoad_1 = _this.ListenLoad;
                        window.addEventListener('load', function () {
                            lstLoad_1();
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.ListenLoad = function () {
        var _this = this;
        this.results.subscribe(function (x) {
            if (document.readyState == "complete") {
                for (var a = 0; a < x.length; a++) {
                    var circ = JSON.stringify(_this.circle_circum / x[a].post_count);
                    console.log(circ);
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#" + a + "Circle").css("stroke-dasharray", circ + ", 10");
                }
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
    Tab1Page.prototype.ionViewDidLeave = function () {
        var _this = this;
        console.log("Left stream page");
        this.slide.getActiveIndex().then(function (index) {
            console.log("current index when leaving ", index);
            var slide_post = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + index + "ReservedPostViews").text();
            var slide_post2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + index + "PostViews").text();
            console.log("slide number ", slide_post, " ", slide_post2);
            _this.storage.get("current_userID").then(function (val) {
                _this.database.list("views/").remove(JSON.stringify(val + slide_post));
                _this.database.list("views/").remove(JSON.stringify(val + slide_post2));
                console.log(JSON.stringify(val + slide_post));
                // this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
                //display views
            });
        });
    };
    Tab1Page.prototype.setFirstViews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("hello world started");
                        this.ListenLoad();
                        return [4 /*yield*/, this.slide.getActiveIndex().then(function (index) {
                                console.log("current index is", index);
                                _this.results.subscribe(function (val) {
                                    console.log("current video at index 0 ", val[0]);
                                    console.log("all videos  ", val);
                                    var post_id = JSON.stringify(val[0].post_id);
                                    _this.storage.get("current_userID").then(function (val) {
                                        _this.database.list("views/").remove(JSON.stringify(val + post_id));
                                        _this.database.object("views/" + JSON.stringify(val + post_id)).set({ "user": val, "post_id": post_id });
                                        //display views
                                        _this.slide.getActiveIndex().then(function (val) {
                                            console.log(val);
                                            _this.playVideo(val, post_id);
                                        });
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
                                                console.log(current_views);
                                            }
                                        });
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //handles the number of live viewer
    Tab1Page.prototype.swiped = function (id, post_id, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var idd, video, current_post_id_1, prev_post_id_1, current_post_id_2, prev_post_id_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //
                console.log("post", post_id);
                console.log("left");
                idd = id - 1;
                this.current_post_id = post_id;
                video = document.getElementById(id + "videobcg");
                console.log(id);
                console.log("paused", video.paused);
                console.log(direction);
                if (direction == "left") {
                    current_post_id_1 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id + 1) + "PostViews").text();
                    prev_post_id_1 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "PostViews").text();
                    this.storage.get("current_userID").then(function (val) {
                        _this.database.list("views/").remove(JSON.stringify(val + current_post_id_1));
                        _this.database.list("views/").remove(JSON.stringify(val + prev_post_id_1));
                        _this.database.object("views/" + JSON.stringify(val + current_post_id_1)).set({ "user": val, "post_id": current_post_id_1 });
                        //display views
                        // this.slide.getActiveIndex().then((val) => { 
                        //   console.log(val);
                        //   this.playVideo(val,post_id);
                        // });
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
                    console.log(current_post_id_1);
                }
                else if (direction == "right") {
                    current_post_id_2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + idd + "PostViews").text();
                    prev_post_id_2 = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + parseInt(id) + "PostViews").text();
                    this.storage.get("current_userID").then(function (val) {
                        _this.database.list("views/").remove(JSON.stringify(val + current_post_id_2));
                        _this.database.list("views/").remove(JSON.stringify(val + prev_post_id_2));
                        _this.database.object("views/" + JSON.stringify(val + current_post_id_2)).set({ "user": val, "post_id": current_post_id_2 });
                        // this.slide.getActiveIndex().then((val) => { 
                        //   console.log(val);
                        //   this.playVideo(val,post_id);
                        // });
                        _this.postViewsRef$.subscribe(function (val) {
                            for (var c = 0; c < val.length; c++) {
                                jquery__WEBPACK_IMPORTED_MODULE_2__("." + val[c].post_id + "viewCount").text("0");
                            }
                            for (var v = 0; v < val.length; v++) {
                                var key = Object.keys(val[v])[0];
                                console.log(key);
                                var post_id_3 = val[v].post_id;
                                console.log(post_id_3);
                                var current_views = parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_3 + "viewCount").text());
                                current_views += 1;
                                jquery__WEBPACK_IMPORTED_MODULE_2__("." + post_id_3 + "viewCount").text(current_views);
                            }
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.likeComment = function (comment_array_number) {
        var _this = this;
        console.log("comment array number: ", comment_array_number);
        this.storage.get("current_userID").then(function (user_id) {
            var likeIcon = jquery__WEBPACK_IMPORTED_MODULE_2__("." + comment_array_number + "likeComment");
            console.log(likeIcon.css("color"));
            if (likeIcon.css("color") == 'rgb(252, 135, 0)') {
                console.log("unliked");
                likeIcon.css("color", 'rgb(00, 00, 00)');
                _this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number + user_id));
            }
            else {
                likeIcon.css("color", 'rgb(252, 135, 0)');
                _this.database.object("comment_likes/" + JSON.stringify(comment_array_number + user_id)).set({ "user_id": user_id, "comment_array_number": comment_array_number });
                console.log("like successful");
            }
        });
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
    Tab1Page.prototype.sharePost = function (platform) {
        var _this = this;
        this.slide.getActiveIndex().then(function (slidenum) {
            var post_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#" + slidenum + "PostViews").html();
            console.log(post_id);
            console.log(platform);
            if (platform == "facebook") {
                _this.socialSharing.shareViaFacebook("Shared post from uploaded", null, "http://uploaded.herokuapp.com/Sharepost#" + post_id).then(function (x) {
                    console.log(x);
                });
            }
            else if (platform == "twitter") {
                _this.socialSharing.shareViaTwitter("Shared post from uploaded", null, "http://uploaded.herokuapp.com/Sharepost#" + post_id).then(function (x) {
                    console.log(x);
                });
            }
            else if (platform == "instagram") {
                _this.socialSharing.shareViaInstagram("http://uploaded.herokuapp.com/Sharepost#" + post_id, null).then(function (x) {
                    console.log(x);
                });
            }
        });
    };
    //present share options
    Tab1Page.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Share post',
                            buttons: [{
                                    text: 'Facebook',
                                    role: 'destructive',
                                    icon: 'logo-facebook',
                                    handler: function () {
                                        _this.sharePost("facebook");
                                    }
                                }, {
                                    text: 'Twitter',
                                    icon: 'logo-twitter',
                                    handler: function () {
                                        _this.sharePost("twitter");
                                    }
                                },
                                {
                                    text: 'Instagram',
                                    icon: 'logo-instagram',
                                    handler: function () {
                                        _this.sharePost("instagram");
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
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"] },
        { type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"] }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map