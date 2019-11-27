import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
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
                    $("#" + val[c].post + "CommentsCount").text("0");
                }
                //get the number of comments for each post
                for (let c = 0; c < val.length; c++) {
                    //console.log("this comment belongs to post ", val[c].post);
                    let currentTotalComments = parseInt($("#" + val[c].post + "CommentsCount").text());
                    currentTotalComments += 1;
                    $("#" + val[c].post + "CommentsCount").text(currentTotalComments);
                }
                //commentinput 2
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
                //display the last comment added
                for (let x = 0; x < this.commnentsTab2.length; x++) {
                    this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
                    console.log("scroll top2", this.commnentsTab2[x].scrollTop);
                    console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
                    //element.scrollTop = element.scrollHeight;
                }
            }, 1000);
        });
    }
    CommentsUp(i) {
        console.log("Move comments up");
        if (this.platform.is("ios")) {
            $("." + i + "userInfo").css("margin-bottom", "90%");
            $("." + i + "PostData").css("margin-top", "-100%");
        }
        else {
            this.statusBar.overlaysWebView(false);
        }
    }
    CommentsDown(i) {
        this.statusBar.overlaysWebView(true);
        console.log("Move comments down");
        if (this.platform.is("ios")) {
            $("." + i + "userInfo").css("margin-bottom", "100px");
            $("." + i + "PostData").css("margin-top", "20%");
        }
    }
    share(file) {
        this.presentActionSheet();
    }
    // ionicSlide(){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val);
    //   });
    // }
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
    playVideo(id, post_id) {
        var video = document.getElementById(id + "videob");
        console.log(id);
        console.log("paused", video.paused);
        let CommentsBox = $(".allComments");
        console.log(CommentsBox);
        //close all comment boxes
        for (let x = 0; x < CommentsBox.length; x++) {
            CommentsBox[x].style.display = 'none';
        }
        if (video.paused == true) {
            $("." + id + "userInfo").show();
            $("." + id + "PostData").show();
            this.getNext();
            // this.videoDuration =  this.requests.getDuration('https://uploaded.herokuapp.com/users/users', post_id);
            // this.videoDuration.subscribe((duration)=>{
            //   let video_length = video.duration;
            //   console.log(duration, video_length);
            //   // if(video.duration == parseFloat(duration[0]) || video.duration < parseFloat(duration[0])){
            //   //   this.reset_start = this.requests.resetPost('https://uploaded.herokuapp.com/users/users', post_id);
            //   //   this.reset_start.subscribe((reset)=>{
            //   //     console.log(reset);
            //   //   });
            //   // }
            //   video.currentTime = parseFloat(duration[0]);
            //   video.play();
            // });
        }
        else {
            video.pause();
            $("." + id + "userInfo").show();
            $("." + id + "PostData").show();
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                $("#" + post_id + "likeIcon").css("color", "#E91E63");
                var likes = JSON.parse($("#" + post_id + "likeCount").text());
                $("#" + post_id + "likeCount").text(likes += 1);
                $("." + slideId + "heartAnimations").show();
                setTimeout(function () {
                    $("." + slideId + "heartAnimations").hide();
                }, 500);
            }
            else {
                $("#" + post_id + "likeIcon").css("color", "#ffffff");
                var likes = JSON.parse($("#" + post_id + "likeCount").text());
                $("#" + post_id + "likeCount").text(likes -= 1);
            }
        });
    }
    postComment(post_id) {
        var commentMessage = $("#" + post_id + "commentInput").val();
        var postedBy;
        this.storage.get('username').then((val) => {
            // console.log('Your age is', val);
            postedBy = val;
            if (commentMessage != null && commentMessage != "") {
                var comment = { post: post_id, user: postedBy, comment: commentMessage };
                this.database.list("comments").push(comment);
                $("#" + post_id + "commentInput").val("");
            }
            console.log(commentMessage);
        });
    }
    showAllComments(post_id) {
        console.log(post_id);
        // this.tabs.bottom = false;
        $("#" + post_id + "allComments").show();
        //commentinput 2
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        this.commnentsTab2 = document.getElementsByClassName("scrollableComments");
        //display the last comment added
        for (let x = 0; x < this.commnentsTab2.length; x++) {
            this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
            console.log("scroll top2", this.commnentsTab2[x].scrollTop);
            console.log("scroll height2", this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
        }
        let totalComments = $("#" + post_id + "CommentsCount").text();
        $("#" + post_id + "totalCOmments").text(totalComments + " Comments");
        console.log("total comments", totalComments);
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = 'transparent';
        this.displayComments();
        this.tabs.bottom = false;
        this.slide.lockSwipes(true);
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
                            // this.getCurrentSlid();
                        });
                    });
                });
            }
        });
    }
    getNext() {
        console.log("ended");
        let profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.storage.get("uerFeedUsername").then((val) => {
            this.storage.get("mail").then((email) => {
                this.results = this.requests.getUserFeed(profile_url, val, email);
                this.results.subscribe();
                // return this.requests;
            });
        });
    }
    //  async getCurrentSlid(){
    //    await this.slide.getActiveIndex().then((val) => { 
    //       console.log(val);
    //       let videos = document.getElementsByTagName("video");
    //       console.log(videos[0]);
    //       videos[0].onended = this.reloadVide();
    //     });
    //   }
    //   reloadVide(){
    // let profile_url = 'https://uploaded.herokuapp.com/users/users';
    // this.storage.get("uerFeedUsername").then((val) =>{
    //   this.storage.get("mail").then((email)=>{
    //     this.results = this.requests.getUserFeed(profile_url, val,email);
    //     return this.results.subscribe();
    //     // return this.requests;
    //   });
    // });
    //   }
    presentNotificationToast(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
    attchKeyBoard() {
        this.statusBar.overlaysWebView(false);
        $(".scrollableComments").css("margin-top", "100px");
    }
    dettchKeyBoard() {
        this.statusBar.overlaysWebView(true);
        $(".scrollableComments").css("margin-top", "0px");
    }
    //present share options
    presentActionSheet() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
tslib_1.__decorate([
    ViewChild('slider', { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], UserfeedPage.prototype, "slide", void 0);
UserfeedPage = tslib_1.__decorate([
    Component({
        selector: 'app-userfeed',
        templateUrl: './userfeed.page.html',
        styleUrls: ['./userfeed.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireDatabase, ActionSheetController, Platform, TabsPage, RequestsService, ToastController, StatusBar, Router, LoadingController, Storage])
], UserfeedPage);
export { UserfeedPage };
//# sourceMappingURL=userfeed.page.js.map