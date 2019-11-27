import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
let ProfilePage = class ProfilePage {
    //profile_url = 'http://127.0.0.1:8000/users/users'
    constructor(tabs, requests, statusBar, route, storage) {
        this.tabs = tabs;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.images_url = "https://res.cloudinary.com/uploaded/image/upload/v1567818053/";
        this.video_url = "https://res.cloudinary.com/uploaded/video/upload/v1567818053/";
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.tabs.bottom = true;
        // Put here the code you want to execute
        this.storage.get('mail').then((mail) => {
            console.log('Your email is', mail);
            // var profile_url =  'https://uploaded.herokuapp.com/users/users';
            if (mail == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.storage.get("user_id").then((val) => {
                    this.userProfile = this.requests.getUserProfile(this.profile_url, val, mail);
                    // this.userProfile.subscribe(profile => {
                    //   console.log("profile", profile);
                    //   this.renderProfile(profile);
                    // });
                    console.log("profile to get", val);
                    console.log("user's email", mail);
                    this.storage.get('userProfileEmail').then((userProfileEmail) => {
                        this.Playlists = this.requests.getProfilePlaylists(this.profile_url, userProfileEmail);
                    });
                });
            }
        });
    }
    Follow(user_id, fl) {
        this.storage.get('mail').then((mail) => {
            this.requests.Follow(this.profile_url, user_id, mail).subscribe(x => {
                console.log(fl);
                this.ionViewDidEnter();
            });
        });
    }
    Message(first_name, last_name, username, id) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    onDrag() {
        console.log("dragged");
    }
    viewUserFeed(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
};
ProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, RequestsService, StatusBar, Router, Storage])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map