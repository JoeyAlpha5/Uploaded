(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-view-post-view-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-view/post-view.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <!--<ion-refresher  *ngIf=\"refresh ==  true\" id=\"refresher\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>-->\n    <ion-slides #slider id=\"slides\" (ionSlideDidChange)=\"currentSlideVideo()\" (ionSlidesDidLoad)=\"setFirstViews()\" [options]=\"slideOpts\">\n      <ion-slide id='slider' *ngFor='let item of ( results | async); let i = index'\n        (swiperight)=\"swiped(i,item.post_id,'right')\" (swipeleft)=\"swiped(i,item.post_id,'left')\"\n        (swipeup)=\"onSwipeUp( item.user_id,item.user_email,i )\">\n        <div id=\"streamIcon\">Playlisted</div>\n        <div id=\"viewCount\"> <ion-icon id=\"\" name=\"eye\"></ion-icon> <span id=\"{{i}}postViewCountCont\"></span></div>\n        <ion-icon id=\"backIcon\" (click)=\"back()\" name=\"close\"></ion-icon>\n        <video  playsinline webkit-playsinline class=\"videobcg\" id=\"{{i}}videobcgP\">\n          <source id=\"{{i}}videobsource\"\n            src=\"https://res.cloudinary.com/www-uploadedstream-com/video/upload/c_pad,h_360,q_70,w_480/{{ item.file }}.mp4?alt=media#t={{ item.start }}\"\n            type=\"video/mp4\">\n        </video>\n        <div id=\"{{i}}FirstPostData\" *ngIf=\"display_firsts == true\">\n          <div id=\"PostData\" class=\"{{i}}PostData\">\n            <ion-icon class=\"icon\" *ngIf=\"item.liked == 0\" name=\"heart\" id=\"{{item.post_id}}likeIcon\"\n              (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 0\"\n              id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n            <ion-icon class=\"icon\" *ngIf=\"item.liked == 1\" [ngStyle]=\"{color:'#fc8700'}\" name=\"heart\"\n              id=\"{{item.post_id}}likeIcon\" (click)=\"like(item.post_id,i)\"></ion-icon><span *ngIf=\"item.liked == 1\"\n              id=\"{{item.post_id}}likeCount\">{{ item.like }}</span>\n            <ion-icon class=\"icon\" (click)=\"repost(item.post_id)\" name=\"share-alt\" id=\"{{i}}repostIcon\"></ion-icon><span\n              id=\"{{item.post_id}}repostCount\">{{ item.reposts }}</span>\n            <ion-icon class=\"icon\" (click)=\"share(item.file)\" name=\"share\" id=\"{{i}}shareIcon\"></ion-icon><br/>\n            <ion-icon class=\"icon\" name=\"text\" id=\"{{ i }}postIcon\" (click)=\"showAllComments(item.post_id, i)\"></ion-icon>\n            <span id=\"{{item.post_id}}CommentsCount\">0</span>\n            <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}PostViews\">{{ item.post_id }}</span>\n            </div>\n          </div>\n        </div>\n        \n\n  \n        \n        <div id=\"eyeView\">\n          <!-- <ion-icon class=\"icon\" name=\"eye\" id=\"eye\"></ion-icon><span id=\"{{i}}viewCount\" class=\"{{item.post_id}}viewCount \">0</span><br> -->\n          <div class=\"postViews\"><span class=\"{{ item.post_id }}views\" id=\"{{i}}ReservedPostViews\">{{ item.post_id }}</span></div>\n        </div>\n  \n        <div id=\"userinfo\" class=\"{{i}}userInfo\" *ngIf=\"userInfo ==  true\">\n          <!--<p id=\"postGenre\">{{ item.genre }}</p>-->\n          <p id=\"postDescription\" class=\"{{i}}PostDescription\">{{ item.description }}</p>\n          <span id=\"commentsHeading\">Comments</span><br />\n          <div *ngIf=\"display_firsts == true\" class=\"{{i}}oldPostComments\" id=\"{{ item.post_id }}actualCommnents\">\n            <div class=\"commentBox\" id=\"{{i}}commentBox\">\n              <span id=\"comment\" *ngFor='let comment of (commentsRef$ | async); let x = index'>\n                <span *ngIf=\"item.post_id == comment.post\" class=\"{{i}}commentSection\" id=\"userComment\">\n                  <span id=\"userCommenter\">@{{comment.user}}</span><span> {{ comment.comment }}</span>\n                </span>\n              </span>\n            </div>\n        </div>\n          <!--<input type=\"text\"  (focus)=\"CommentsUp(i)\" (blur)=\"CommentsDown(i)\"*/ class=\"commentInput\" id=\"{{item.post_id}}commentInput\" placeholder=\"Add Comment...\">-->\n          <input type=\"text\" (focus)=\"CommentsUp(i)\" class=\"commentInput\" id=\"{{i}}commentInput\"\n            placeholder=\"Add Comment...\">\n          <label class=\"{{i}}CommentLabel\" for=\"{{i}}commentInput\" id=\"commentBtn\"><span\n              (click)=\"postComment(i)\">Post</span></label>\n        </div>\n  \n  \n  \n        <div id=\"profileImage\" *ngIf=\"item.image\">\n          <svg class=\"_18eSE\" width=\"60\" height=\"60\" viewBox=\"0 0 104 104\">\n            <circle id=\"{{i}}Circle\" cx=\"52\" cy=\"52\" r=\"50\" fill=\"transparent\" stroke-linecap=\"round\" stroke-width=\"4\" stroke-dashoffset=\"387.69908169872417\" class=\"_3yudO\" stroke=\"white\" stroke-width=\"3\"></circle>\n          </svg>\n          <div class=\"circle\" (click)=\"onSwipeUp( item.user_id,item.user_email,i )\" id=\"image\"\n            [ngStyle]=\"{'background-image': 'url(https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1583762562/'+ item.image +'.jpg)'}\">\n            <ion-icon id=\"profileIocn\" name=\"contact\" *ngIf=\"item.image == 'none'\"></ion-icon>\n          </div>\n          <span (click)=\"onSwipeUp( item.user_id,item.user_email,i )\">@{{ item.username }}</span>\n        </div>\n  \n        <div class=\"{{i}}heartAnimations\" id=\"heartAnimations\">\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation1\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation2\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation3\"></ion-icon><br>\n          <ion-icon class=\"icon\" class=\"animated infinite fadeOutUp 2s\" name=\"heart\" id=\"animation4\"></ion-icon>\n        </div>\n  \n        <div id=\"overlay\" class=\"{{item.post_id}}Overlay\" (click)=\"removeItems(i, item.post_id)\">\n        </div>\n\n        <div id=\"{{i}}videoControlOverlay\" class=\"videoControlOverlay\">\n          <div id=\"backButton\" (click)=\"videoBack(i,item.post_id)\">\n            <ion-icon id=\"rewindIcon\" [ngStyle]=\"{color:'#ffffff'}\" name=\"rewind\"></ion-icon>\n          </div>\n          <div id=\"middleButton\" (click)=\"removeItems(i, item.post_id)\"></div>\n          <div id=\"forwardButton\" (click)=\"videoForward(i,item.post_id)\">\n            <ion-icon id=\"fowardIcon\" [ngStyle]=\"{color:'#ffffff'}\" name=\"fastforward\"></ion-icon>\n          </div>\n        </div>\n\n  \n        <div *ngIf=\"display_firsts == true\" id=\"playPause\" class=\"{{i}}playPauseDiv {{i}}playPauseBtn2\">\n            <ion-icon class=\"playPauseIcon\" id=\"{{i}}playPause\" (click)=\"playVideo(i, item.post_id)\" name=\"pause\"></ion-icon>\n        </div>\n  \n  \n        <circle-progress id=\"ngCircle\" class=\"{{i}}videoProgress\"\n        [percent]=\"percent\"\n        [radius]=\"25\"\n        [outerStrokeWidth]=\"2\"\n        [innerStrokeWidth]=\"2\"\n        [outerStrokeColor]=\"'#fc8700'\"\n        [innerStrokeColor]=\"'#ffffff'\"\n        [animation]=\"true\"\n        [animationDuration]=\"300\"\n        [showTitle]=\"false\"\n        [showSubtitle]=\"false\"\n        [showUnits]=\"false\"\n        [startFromZero]=\"false\"\n      ></circle-progress>\n\n  \n        <div id=\"{{item.post_id}}allComments\" class=\"allComments animated fadeInUp\">\n          <div id=\"scrollableComments\" class=\"scrollableComments\">\n            <div class=\"totalComments\" id=\"{{item.post_id}}totalCOmments\"></div>\n            <div *ngFor='let comment of (commentsRef$ | async),let c = index' id=\"{{item.post_id}}allComments\">\n              <div id=\"allcomComment\" *ngIf=\"item.post_id == comment.post\"><span>@{{comment.user}}</span>\n                <p>{{ comment.comment }}</p>\n                <ion-icon class=\"{{c}}likeComment\" id=\"likeComment\" name=\"heart-empty\" (click)=\"likeComment(c)\">\n                </ion-icon>\n              </div>\n            </div>\n          </div>\n  \n          <ion-footer keyboard-attach class=\"bar-assertive\">\n            <div id=\"fullComments\">\n              <input type=\"text\" (focus)=\"attchKeyBoard()\" (blur)=\"dettchKeyBoard()\" class=\"commentInput2\"\n                id=\"{{item.post_id}}commentInput2\" placeholder=\"Add Comment...\">\n              <label for=\"{{item.post_id}}commentInput2\" id=\"commentBtn\"><span (click)=\"postComment2(item.post_id)\"\n                  id=\"commentBtn\">Post</span></label>\n            </div>\n          </ion-footer>\n        </div>\n  \n  \n        <div id=\"disapearingComment\" class=\"{{i}}LatestComment animated fadeInUp\" *ngIf=\"latest_comment.post == item.post_id\">\n           <p><span>@{{latest_comment.user}}</span> {{ latest_comment.comment }}</p>\n        </div>\n  \n        <div>{{ results.length }}</div>\n  \n        <ion-spinner name=\"crescent\" id=\"spinner\" class=\"{{i}}Spinner\"></ion-spinner>\n      </ion-slide>\n  \n    </ion-slides>\n  \n  \n  \n  </ion-content>"

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
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm5/ng-circle-progress.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-view.page */ "./src/app/post-view/post-view.page.ts");








var routes = [
    {
        path: '',
        component: _post_view_page__WEBPACK_IMPORTED_MODULE_7__["PostViewPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                })
            ],
            declarations: [_post_view_page__WEBPACK_IMPORTED_MODULE_7__["PostViewPage"]]
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

module.exports = "@font-face {\n  font-family: \"helvetica\";\n  src: url('Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: \"helveticaB\";\n  src: url('Roboto-Medium.ttf');\n}\np, span, ion-label, ion-searchbar {\n  font-family: \"helvetica\" !important;\n}\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\nimg.logofont {\n  height: 23px;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\nion-title {\n  text-align: -webkit-center;\n}\n.homeUpload {\n  float: left;\n  font-size: 16px;\n}\n.homeSend {\n  float: right;\n  font-size: 16px;\n  -webkit-transform: rotate(-49deg);\n          transform: rotate(-49deg);\n}\ndiv#Loader {\n  width: 50px;\n  height: 50px;\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #FF9800;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.videobcg {\n  width: inherit;\n  height: inherit;\n  background: black;\n}\n#slides {\n  width: 100%;\n  height: 100%;\n  position: fixed !important;\n  top: 0;\n}\ndiv#viewCount {\n  position: absolute;\n  top: 0;\n  color: white;\n  margin-top: 24px;\n  margin-left: 51px;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#spinner {\n  position: absolute;\n  z-index: 99999999999;\n  color: orange;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#playPause {\n  position: absolute;\n  width: 32px;\n  height: 100px;\n  bottom: 0;\n  margin-bottom: 100px;\n  color: white;\n  right: 0;\n  z-index: 9999999999;\n  margin-right: 30px;\n  font-size: 25px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#disapearingComment {\n  width: 276px;\n  position: absolute;\n  color: white;\n  z-index: 9999999999999;\n  bottom: 0;\n  height: 36px;\n  margin-bottom: 128px;\n  left: 0;\n  font-size: 15px;\n  text-align: left;\n  margin-left: 15px;\n  display: none;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#playPauseIcon {\n  position: absolute;\n  z-index: 99999;\n  margin-right: 15px !important;\n  right: 0;\n}\ndiv#disapearingComment span {\n  font-size: 12px;\n  font-weight: bold;\n}\np#postGenre {\n  font-weight: bold;\n}\ndiv#newPostOverlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\ndiv#PostData {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 15px;\n  margin-top: 20%;\n  color: white;\n  padding: 5px;\n  border-radius: 2px;\n  font-size: 45px;\n  z-index: 100;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#PostData span {\n  font-size: 13px;\n  display: flow-root;\n  line-height: 0px;\n  font-weight: bold;\n}\ndiv#overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.17);\n  z-index: 1;\n}\n::-webkit-input-placeholder {\n  color: white;\n}\n::-moz-placeholder {\n  color: white;\n}\n:-ms-input-placeholder {\n  color: white;\n}\n::-ms-input-placeholder {\n  color: white;\n}\n::placeholder {\n  color: white;\n}\ninput.commentInput {\n  color: white;\n  background: transparent;\n  border: 0px;\n  border-bottom: 1px solid white;\n  width: 85%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border: 1px solid white;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#commentBtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.commentBox {\n  width: 280px;\n  height: 100px;\n  text-align: left;\n  padding-top: 9px;\n  padding-bottom: 5px;\n  overflow: scroll;\n  margin-top: 5px;\n}\ndiv#userinfo {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  font-size: 13px;\n  left: 0;\n  margin-bottom: 78px;\n  margin-left: 8px;\n  z-index: 100;\n  width: 95%;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#userinfo p {\n  margin: 0;\n  text-align: left;\n}\ndiv#userinfo #postDescription {\n  font-weight: bold;\n  font-size: 14px;\n}\nspan#commentsHeading {\n  font-weight: lighter;\n  width: 100%;\n  float: left;\n  text-align: left;\n}\n.bar-assertive {\n  bottom: 0px;\n  position: absolute;\n}\n.allComments {\n  width: 100%;\n  height: 433px;\n  position: absolute;\n  z-index: 99999;\n  bottom: 0;\n  border-top-right-radius: 10px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  display: none;\n  border-top-left-radius: 10px;\n}\n.allComments p {\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  margin-left: 6px;\n  font-size: 13px;\n}\n.allComments span {\n  float: left;\n  font-size: 12px;\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n  overflow-y: scroll;\n}\n.allComments #allcomComment {\n  width: 100%;\n  margin-top: 22px;\n  height: auto;\n  float: left;\n  padding: 4px;\n  color: #292929;\n}\n#fullComments {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  background: white;\n  padding-top: 12px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n#fullComments .commentInput2 {\n  border: 1px solid #00000069;\n  float: left;\n  margin-bottom: 20px;\n  margin-left: 15px;\n  color: black;\n  width: 69%;\n  outline: 0;\n  padding: 5px;\n  height: 42px;\n  border-radius: 12px;\n  padding-left: 15px;\n}\n#fullComments ::-webkit-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-moz-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments :-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::-ms-input-placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments ::placeholder {\n  color: black;\n  font-size: 12px;\n}\n#fullComments #commentBtn {\n  float: left;\n  color: black;\n  margin-left: 20px;\n  margin-top: 15px;\n}\nion-icon#profileIocn {\n  font-size: 50px;\n  color: white;\n}\n.postViews {\n  opacity: 0;\n}\ndiv#streamIcon {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  background: #0000002e;\n  font-family: \"helveticaB\" !important;\n  padding: 6px;\n  border-radius: 27px;\n  color: white;\n  font-size: 14px;\n  width: 74px;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\n.icon {\n  margin-top: 12px;\n}\n#userComment {\n  font-size: 13px;\n  display: inline-block;\n  height: 30px;\n  width: 100%;\n}\n#userCommenter {\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n}\n#comment {\n  font-size: 13px;\n}\n#share {\n  position: absolute;\n  z-index: 999;\n  width: 54px;\n  right: 0;\n  margin-right: 25px;\n  top: 0;\n  margin-top: 50%;\n}\ndiv#profileImage {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  float: right;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 10000;\n}\ndiv#profileImage span {\n  float: left;\n  margin-top: 18%;\n  margin-left: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: bold;\n}\ndiv#profileImage div#image {\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n  margin-top: 13%;\n  border-radius: 50%;\n  background-size: cover;\n  float: left;\n}\ndiv#profileImage p {\n  text-align: left;\n  margin-left: 23px;\n  color: white;\n  font-size: 13px;\n}\ndiv#heartAnimations {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  padding-right: 30px;\n  font-size: 30px;\n  margin-bottom: 251px;\n  display: none;\n}\ndiv#heartAnimations ion-icon#animation1 {\n  color: #fc8700;\n  margin-right: 15px;\n}\ndiv#heartAnimations ion-icon#animation2 {\n  color: #fc8700;\n  margin-left: 20px;\n}\ndiv#heartAnimations ion-icon#animation3 {\n  color: #fc8700;\n  margin-right: 30px;\n}\ndiv#heartAnimations ion-icon#animation4 {\n  color: #fc8700;\n}\n#ngCircle {\n  position: absolute;\n}\n#ngCircle {\n  position: absolute;\n  float: right;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 150px;\n  margin-right: 15px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\nion-icon#eye {\n  margin-top: 1px;\n}\nion-icon#backIcon {\n  color: white;\n  position: absolute;\n  z-index: 9999999;\n  font-size: 25px;\n  top: 0;\n  right: 0;\n  margin-right: 30px;\n  margin-top: 20px;\n}\ndiv#eyeView {\n  position: absolute;\n  top: 0;\n  margin-left: 53px;\n  margin-top: 15px;\n  font-size: 17px;\n  color: white;\n  border-radius: 26%;\n  padding: 4px;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n  z-index: 9999;\n  background: #0000002e;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 21px;\n  border-radius: 10px;\n  margin-top: 25px;\n  width: auto;\n}\ndiv#eyeView span {\n  margin-left: 4px !important;\n  font-size: 14px;\n  font-family: \"helveticaB\" !important;\n  float: right;\n  margin-top: 2px;\n  margin-right: 2px;\n}\ndiv#scrollableComments {\n  width: 100%;\n  height: 361px;\n  overflow: scroll;\n  background: white;\n}\nion-icon#likeComment {\n  float: right;\n  font-size: 15px;\n  margin-right: 10px;\n}\n.totalComments {\n  width: 100%;\n  height: 26px;\n  font-weight: bold;\n  font-size: 13px;\n  padding-top: 10px;\n  position: absolute;\n  background: white;\n  padding-bottom: 10px;\n  z-index: 99;\n}\nsvg._18eSE {\n  float: left;\n  position: absolute;\n  left: 0;\n  margin-left: 11px;\n  margin-top: 11.4%;\n}\n.videoControlOverlay {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  display: none;\n  z-index: 999999;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  transform: translate3d(0, 0, 0) !important;\n}\ndiv#backButton {\n  width: 30%;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\ndiv#middleButton {\n  width: 40%;\n  height: 100%;\n  float: left;\n}\ndiv#forwardButton {\n  width: 30%;\n  height: 100%;\n  float: right;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#fowardIcon {\n  margin-left: 50%;\n  font-size: 35px;\n  opacity: 0.3;\n}\n#rewindIcon {\n  margin-left: 30%;\n  font-size: 35px;\n  opacity: 0.3;\n}\n@media (max-width: 361px) {\n  playPauseIcon {\n    margin-right: 29px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1VwbG9hZGVkL1VwbG9hZGVkL3NyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3Qtdmlldy9wb3N0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURJQTtFQUNJLG1DQUFBO0FDRko7QURPQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUNMRjtBRFFBO0VBQ0UsMEJBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNMRjtBRFNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDTkY7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ1JGO0FEV0E7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNQTDtFRFFBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ0xQO0FBQ0Y7QURFQTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ1BMO0VEUUE7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDTFA7QUFDRjtBRFNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsTUFBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLDBDQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNB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QURzQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNuQ0Y7QUR1Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3BDSjtBRHVDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDcENGO0FEd0NBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDckNGO0FEd0NBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDckNGO0FEd0NBO0VBQ0U7SUFDRSxrQkFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdC12aWV3L3Bvc3Qtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYSc7XG4gIHNyYzogdXJsKC4uL2ZvbnRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xufVxuXG5AZm9udC1mYWNle1xuICBmb250LWZhbWlseTogJ2hlbHZldGljYUInO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYpO1xufVxuXG5cbnAsIHNwYW4sIGlvbi1sYWJlbCxpb24tc2VhcmNoYmFye1xuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhJyAhaW1wb3J0YW50O1xufVxuXG5cblxuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbmltZy5sb2dvZm9udCB7XG4gIGhlaWdodDogMjNweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuXG4uaG9tZVVwbG9hZHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uaG9tZVNlbmR7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDlkZWcpO1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG5cbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuXG5cbi52aWRlb2JjZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4jc2xpZGVze1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xufVxuXG5kaXYjdmlld0NvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI3NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xuICBjb2xvcjogb3JhbmdlO1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjcGxheVBhdXNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbiNkaXNhcGVhcmluZ0NvbW1lbnQge1xuICB3aWR0aDogMjc2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTI4cHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbiNwbGF5UGF1c2VJY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDA7XG59XG5cbmRpdiNkaXNhcGVhcmluZ0NvbW1lbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNuZXdQb3N0T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2I1Bvc3REYXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cblxuZGl2I292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cblxuOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jb21tZW50SW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogODUlO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuI2NvbW1lbnRCdG57XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNzhweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDo5NSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgI3Bvc3REZXNjcmlwdGlvbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxufVxuXG5zcGFuI2NvbW1lbnRzSGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLmJhci1hc3NlcnRpdmV7XG4gIGJvdHRvbTowcHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTs7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG5cblxuICBwe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuICBzcGFue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4gICNhbGxjb21Db21tZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgfVxufVxuXG5cbiNmdWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcblxuICAuY29tbWVudElucHV0MntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDY5JTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cblxuICB9XG5cbiAgOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgI2NvbW1lbnRCdG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cblxuaW9uLWljb24jcHJvZmlsZUlvY24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvc3RWaWV3c3tcbiAgb3BhY2l0eTogMDtcbn1cblxuXG5kaXYjc3RyZWFtSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNzRweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuLmljb257XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiN1c2VyQ29tbWVudHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6MTAwJTtcbn1cblxuI3VzZXJDb21tZW50ZXJ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiICFpbXBvcnRhbnQ7XG59XG5cbiNjb21tZW50e1xuICBmb250LXNpemU6MTNweDtcbn1cblxuXG4jc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDU0cHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5kaXYjcHJvZmlsZUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIHNwYW57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTglO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAgIGRpdiNpbWFnZSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTMlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gIH1cblxuICBwe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5kaXYjaGVhcnRBbmltYXRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MXB4O1xuICBkaXNwbGF5OiBub25lO1xuXG5cbiAgaW9uLWljb24jYW5pbWF0aW9uMSB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIGlvbi1pY29uI2FuaW1hdGlvbjIge1xuICAgIGNvbG9yOiAjZmM4NzAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uMyB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9ICBcbiAgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gICAgY29sb3I6ICNmYzg3MDA7XG4gIH1cbn1cblxuI25nQ2lyY2xle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuXG4jbmdDaXJjbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICBcbn1cblxuaW9uLWljb24jZXllIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG5cbmlvbi1pY29uI2JhY2tJY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5kaXYjZXllVmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNTNweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgcGFkZGluZzogNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG5cbiAgc3BhbntcbiAgICBtYXJnaW4tbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG59XG5cbmRpdiNzY3JvbGxhYmxlQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNjFweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uI2xpa2VDb21tZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsQ29tbWVudHN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk7XG59XG5cblxuc3ZnLl8xOGVTRSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgbWFyZ2luLXRvcDogMTEuNCU7XG59XG5cbi52aWRlb0NvbnRyb2xPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNiYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG59XG5cbmRpdiNtaWRkbGVCdXR0b24ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYjZm9yd2FyZEJ1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZm93YXJkSWNvbntcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbiNyZXdpbmRJY29ue1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MzYxcHgpe1xuICBwbGF5UGF1c2VJY29ue1xuICAgIG1hcmdpbi1yaWdodDogMjlweDtcbiAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FcIjtcbiAgc3JjOiB1cmwoLi4vZm9udHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhQlwiO1xuICBzcmM6IHVybCguLi9mb250cy9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYpO1xufVxucCwgc3BhbiwgaW9uLWxhYmVsLCBpb24tc2VhcmNoYmFyIHtcbiAgZm9udC1mYW1pbHk6IFwiaGVsdmV0aWNhXCIgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcubG9nb2ZvbnQge1xuICBoZWlnaHQ6IDIzcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmhvbWVVcGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9tZVNlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ5ZGVnKTtcbn1cblxuZGl2I0xvYWRlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNGRjk4MDA7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udmlkZW9iY2cge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI3NsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG59XG5cbmRpdiN2aWV3Q291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNTFweDtcbiAgei1pbmRleDogOTk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG4jc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNwbGF5UGF1c2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI2Rpc2FwZWFyaW5nQ29tbWVudCB7XG4gIHdpZHRoOiAyNzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMjhweDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuI3BsYXlQYXVzZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDA7XG59XG5cbmRpdiNkaXNhcGVhcmluZ0NvbW1lbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAjcG9zdEdlbnJlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdiNuZXdQb3N0T3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2I1Bvc3REYXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5kaXYjUG9zdERhdGEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxvdy1yb290O1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0LmNvbW1lbnRJbnB1dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA4NSU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4jY29tbWVudEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmRpdiN1c2VyaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNzhweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogOTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuZGl2I3VzZXJpbmZvIHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5kaXYjdXNlcmluZm8gI3Bvc3REZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnNwYW4jY29tbWVudHNIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJhci1hc3NlcnRpdmUge1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWxsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi5hbGxDb21tZW50cyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5hbGxDb21tZW50cyBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hbGxDb21tZW50cyAjYWxsY29tQ29tbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjMjkyOTI5O1xufVxuXG4jZnVsbENvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG4jZnVsbENvbW1lbnRzIC5jb21tZW50SW5wdXQyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDY5JTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbiNmdWxsQ29tbWVudHMgOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI2Z1bGxDb21tZW50cyAjY29tbWVudEJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taWNvbiNwcm9maWxlSW9jbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9zdFZpZXdzIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGl2I3N0cmVhbUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDJlO1xuICBmb250LWZhbWlseTogXCJoZWx2ZXRpY2FCXCIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDc0cHg7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jdXNlckNvbW1lbnQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3VzZXJDb21tZW50ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI3NoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiA1NHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuZGl2I3Byb2ZpbGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbmRpdiNwcm9maWxlSW1hZ2Ugc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIGRpdiNpbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5kaXYjcHJvZmlsZUltYWdlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmRpdiNoZWFydEFuaW1hdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjUxcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjaGVhcnRBbmltYXRpb25zIGlvbi1pY29uI2FuaW1hdGlvbjEge1xuICBjb2xvcjogI2ZjODcwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24yIHtcbiAgY29sb3I6ICNmYzg3MDA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuZGl2I2hlYXJ0QW5pbWF0aW9ucyBpb24taWNvbiNhbmltYXRpb24zIHtcbiAgY29sb3I6ICNmYzg3MDA7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbmRpdiNoZWFydEFuaW1hdGlvbnMgaW9uLWljb24jYW5pbWF0aW9uNCB7XG4gIGNvbG9yOiAjZmM4NzAwO1xufVxuXG4jbmdDaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNuZ0NpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiNleWUge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbmlvbi1pY29uI2JhY2tJY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5kaXYjZXllVmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogNTNweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI2JTtcbiAgcGFkZGluZzogNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IGF1dG87XG59XG5kaXYjZXllVmlldyBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYUJcIiAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbmRpdiNzY3JvbGxhYmxlQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNjFweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1pY29uI2xpa2VDb21tZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsQ29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG5zdmcuXzE4ZVNFIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIG1hcmdpbi10b3A6IDExLjQlO1xufVxuXG4udmlkZW9Db250cm9sT3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjYmFja0J1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdiNtaWRkbGVCdXR0b24ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYjZm9yd2FyZEJ1dHRvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZm93YXJkSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4jcmV3aW5kSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYxcHgpIHtcbiAgcGxheVBhdXNlSWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

















var PostViewPage = /** @class */ (function () {
    function PostViewPage(location, keyboard, tabs, platform, loadingController, statusBar, actionSheetController, toastController, requests, database, route, storage, oneSignal) {
        var _this = this;
        this.location = location;
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
    PostViewPage.prototype.back = function () {
        var _this = this;
        this.tabs.bottom = true;
        this.storage.get("prev_page").then(function (prev_page) {
            console.log("previous page is ", prev_page);
            var url_index = prev_page.indexOf("home");
            var prev_tab = prev_page.substring(url_index);
            _this.route.navigate(["/" + prev_tab]);
        });
    };
    PostViewPage.prototype.stopOtherVids = function () {
        //ensure previous videos are paused
        // executor (`the producing code, "singer")
        var a = document.getElementsByTagName("video");
        console.log("videos", a);
        for (var b = 0; b < a.length; b++) {
            a[b].pause();
        }
    };
    PostViewPage.prototype.displayComments = function () {
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
    //set the video length
    PostViewPage.prototype.displayVideoDuration = function (video, current_lenght, video_length, current_slide) {
        var _this = this;
        var video_percent = Math.round((current_lenght / video_length) * 100);
        this.percent = video_percent;
        console.log("video duration at ", video_percent + "%");
        // clearInterval(this.VideoTimer);
        clearInterval();
        setInterval(function () {
            // let video = <HTMLVideoElement>document.getElementById(current_slide+"videobcgP");
            var video_percent = Math.floor(video.currentTime / video.duration * 100);
            _this.percent = video_percent;
        }, 1000);
    };
    PostViewPage.prototype.CommentsUp = function (i) {
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
    PostViewPage.prototype.CommentsDown = function (i) {
        this.statusBar.overlaysWebView(true);
        this.tabs.bottom = true;
        console.log("Move comments down");
        if (this.platform.is("android")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        if (this.platform.is("ios")) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "71px");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "PostData").css("margin-top", "20%");
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "playPauseDiv").show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("margin-bottom", "71px");
        }
    };
    PostViewPage.prototype.setPostViews = function (id, post_id) {
        var _this = this;
        this.storage.get("username").then(function (username) {
            console.log("username is ", username, " post id is ", post_id, " index is ", id);
            var postViews = _this.requests.setPostViews('https://uploaded.herokuapp.com/users/users', post_id, username);
            postViews.subscribe(function (re) {
                console.log("number of views is ", re);
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "postViewCountCont").text(re["view_count"]);
            });
        });
    };
    PostViewPage.prototype.attchKeyBoard = function () {
        this.statusBar.overlaysWebView(false);
    };
    PostViewPage.prototype.dettchKeyBoard = function (post_id) {
        this.statusBar.overlaysWebView(true);
        console.log(post_id);
    };
    PostViewPage.prototype.share = function (file) {
        this.presentActionSheet();
    };
    // ionicSlide(post_id){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val,post_id);
    //   });
    // }
    PostViewPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.slide.getActiveIndex().then(function (val) {
            console.log("left slide ", val);
            _this.pauseVideo(val);
            jquery__WEBPACK_IMPORTED_MODULE_2__("slides").html("");
        });
        console.log("Leaving");
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
    PostViewPage.prototype.playVideo = function (id, post_id) {
        var video = document.getElementById(id + "videobcgP");
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
            this.setPostViews(id, post_id);
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            // {{ post. }}actualCommnents
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "pause");
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "pause");
        }
        else {
            video.pause();
            // $("."+id+"userInfo").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "actualCommnents").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__("." + id + "PostData").show();
            if (video.paused) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause").attr("name", "play");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id + "playPause2").attr("name", "play");
            }
        }
    };
    PostViewPage.prototype.currentSlideVideo = function () {
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
            var video = document.getElementById(currentSlide + "videobcgP");
            // console.log(video);
            var video_length = video.duration;
            var duration = video.currentTime;
            _this.displayVideoDuration(video, duration, video_length, currentSlide);
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
        });
    };
    PostViewPage.prototype.pauseVideo = function (id) {
        var video = document.getElementById(id + "videobcgP");
        console.log(id);
        console.log("paused", video.paused);
        video.pause();
    };
    PostViewPage.prototype.repost = function (post_id) {
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
    PostViewPage.prototype.removeItems = function (i, post_id) {
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
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "videoControlOverlay").show();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__("." + i + "userInfo").css("display", "block");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "repostIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "repostCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "shareIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + post_id + "CommentsCount").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "postIcon").show();
                jquery__WEBPACK_IMPORTED_MODULE_2__("#" + i + "videoControlOverlay").hide();
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
    PostViewPage.prototype.onSwipeUp = function (user_id, email, i) {
        console.log("swipe up");
        console.log(user_id, email);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.pauseVideo(i);
        this.route.navigate(['/home/tabs/profile']);
    };
    PostViewPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log(event);
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
            _this.ionViewDidEnter();
        }, 2000);
    };
    PostViewPage.prototype.like = function (post_id, slideId) {
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
    PostViewPage.prototype.postComment = function (i) {
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
    PostViewPage.prototype.postComment2 = function (post_id, i) {
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
    PostViewPage.prototype.showAllComments = function (post_id) {
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
    PostViewPage.prototype.highlightLikedComments = function () {
        var _this = this;
        this.likedComments.subscribe(function (x) {
            console.log(x);
            var _loop_1 = function (c) {
                var commentCount = x[c].comment_array_number;
                var user_id = x[c].user_id;
                _this.storage.get("current_userID").then(function (val) {
                    if (user_id == val) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("." + commentCount + "likeComment").css("color", "rgb(233, 30, 99)");
                    }
                });
            };
            for (var c = 0; c < x.length; c++) {
                _loop_1(c);
            }
        });
    };
    PostViewPage.prototype.changeIconColors = function () {
        this.tabs.tab1 = "#fc8700";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    };
    PostViewPage.prototype.playFirstVideo = function () {
    };
    PostViewPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.statusBar.overlaysWebView(true);
                this.statusBar.backgroundColorByHexString('#ffffff');
                this.statusBar.styleDefault();
                this.tabs.bgColor = 'transparent';
                this.displayComments();
                this.tabs.bottom = false;
                this.slide.lockSwipes(true);
                this.storage.get('mail').then(function (val) {
                    _this.email = val;
                    if (_this.email == undefined) {
                        console.log(_this.email);
                        _this.route.navigate(['/home/tabs/tab1']);
                    }
                    else {
                        _this.storage.get("uerFeedUsername").then(function (val) {
                            console.log(val);
                            var profile_url = 'https://uploaded.herokuapp.com/users/users';
                            var Email = _this.storage.get('mail').then(function (val) {
                                console.log('Your email is', val);
                                _this.email = val;
                                var profile_url = 'https://uploaded.herokuapp.com/users/users';
                                if (val == undefined) {
                                    _this.route.navigate(['login']);
                                }
                                else {
                                    _this.storage.get("post").then(function (post) {
                                        console.log("post id is ", val);
                                        _this.results = _this.requests.GetPost(profile_url, post, val);
                                        // this.results.subscribe((x) =>{
                                        //   console.log(x);
                                        //   let lstLoad = this.ListenLoad;
                                        //   window.addEventListener('load', function () {
                                        //     lstLoad();
                                        //   });
                                        // })
                                    }).catch();
                                }
                            });
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    // ListenLoad(){
    //   this.results.subscribe((x)=>{
    //     if(document.readyState == "complete"){
    //       for(let a =0; a < x.length; a++){
    //         let circ =  JSON.stringify(this.circle_circum/x[a].post_count);
    //         console.log(circ);
    //         $("#"+a+"Circle").css("stroke-dasharray", circ+", 10");
    //       } 
    //     }
    //   });
    // }
    PostViewPage.prototype.presentNotificationToast = function (msg) {
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
    PostViewPage.prototype.ionViewDidLeave = function () {
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
    PostViewPage.prototype.setFirstViews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("hello world started");
                        // this.ListenLoad();
                        return [4 /*yield*/, this.slide.getActiveIndex().then(function (index) {
                                console.log("current index is", index);
                                _this.results.subscribe(function (val) {
                                    console.log("current video at index 0 ", val[0]);
                                    console.log("all videos  ", val);
                                    var post_id = JSON.stringify(val[0].post_id);
                                    _this.storage.get("current_userID").then(function (val) {
                                        // this.database.list("views/").remove(JSON.stringify(val+post_id));
                                        // this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
                                        //display views
                                        _this.slide.getActiveIndex().then(function (val) {
                                            console.log(val);
                                            _this.playVideo(val, post_id);
                                        });
                                    });
                                });
                            })];
                    case 1:
                        // this.ListenLoad();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //handles the number of live viewer
    PostViewPage.prototype.swiped = function (id, post_id, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PostViewPage.prototype.likeComment = function (comment_array_number) {
        var _this = this;
        console.log("comment array number: ", comment_array_number);
        this.storage.get("current_userID").then(function (user_id) {
            var likeIcon = jquery__WEBPACK_IMPORTED_MODULE_2__("." + comment_array_number + "likeComment");
            console.log(likeIcon.css("color"));
            if (likeIcon.css("color") == 'rgb(233, 30, 99)') {
                console.log("unliked");
                likeIcon.css("color", 'rgb(00, 00, 00)');
                _this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number + user_id));
            }
            else {
                likeIcon.css("color", 'rgb(233, 30, 99)');
                _this.database.object("comment_likes/" + JSON.stringify(comment_array_number + user_id)).set({ "user_id": user_id, "comment_array_number": comment_array_number });
                console.log("like successful");
            }
        });
    };
    //loading component
    PostViewPage.prototype.presentLoading = function () {
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
    //video fast forward and rewind
    PostViewPage.prototype.videoBack = function (i, post_id) {
        console.log("video rewind");
        var video = document.getElementById(i + "videobcgP");
        console.log("current time of video", video.currentTime);
        if (video.currentTime < 10) {
            this.displayVideoDuration(video, 0, video.duration, i);
            video.currentTime = 0;
        }
        else {
            this.displayVideoDuration(video, video.currentTime - 10, video.duration, i);
            video.currentTime = video.currentTime - 10;
        }
    };
    PostViewPage.prototype.videoForward = function (i, post_id) {
        console.log("video forward");
        var video = document.getElementById(i + "videobcgP");
        console.log("current time of video", video.currentTime);
        if (video.currentTime == video.duration) {
            this.displayVideoDuration(video, 0, video.duration, i);
            video.currentTime = 0;
        }
        else {
            this.displayVideoDuration(video, video.currentTime + 10, video.duration, i);
            video.currentTime = video.currentTime + 10;
        }
    };
    //present share options
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
    PostViewPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
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
    ], PostViewPage.prototype, "slide", void 0);
    PostViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-view',
            template: __webpack_require__(/*! raw-loader!./post-view.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-view/post-view.page.html"),
            styles: [__webpack_require__(/*! ./post-view.page.scss */ "./src/app/post-view/post-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]])
    ], PostViewPage);
    return PostViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-view-post-view-module-es5.js.map