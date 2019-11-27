import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
let Tab2Page = class Tab2Page {
    constructor(tabs, platform, requests, statusBar, route, storage) {
        this.tabs = tabs;
        this.platform = platform;
        this.requests = requests;
        this.statusBar = statusBar;
        this.route = route;
        this.storage = storage;
        this.searchTerm = '';
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        // this.platform.backButton.subscribe(() => {
        // });
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "#fc8700";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.storage.get('mail').then((val) => {
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.storage.get('current_userID').then((val) => {
                    this.userID = val;
                    this.searchContent = this.requests.searchPage(this.profile_url);
                    this.oneSearchContent = this.requests.searchPageOneBig(this.profile_url);
                    this.oneSearchContent.subscribe();
                    this.searchContent.subscribe();
                });
            }
        });
    }
    getSearchResults() {
        console.log(this.searchTerm);
        var user_email = JSON.parse(localStorage.getItem('email'));
        this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);
    }
    viewProfile(user_id, email) {
        console.log("user", user_id);
        this.storage.set("user_id", user_id);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
};
Tab2Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, Platform, RequestsService, StatusBar, Router, Storage])
], Tab2Page);
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map