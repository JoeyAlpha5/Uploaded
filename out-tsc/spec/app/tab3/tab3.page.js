import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
let Tab3Page = class Tab3Page {
    constructor(tabs, database, statusBar, storage, route) {
        this.tabs = tabs;
        this.database = database;
        this.statusBar = statusBar;
        this.storage = storage;
        this.route = route;
        this.notificationssRef$ = this.database.list("notification", ref => ref.orderByChild('date')).valueChanges();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.notificationssRef$.subscribe((x) => {
            console.log(x);
        });
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "#fc8700";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        // Put here the code you want to execute
        this.storage.get('username').then((val) => {
            console.log('Your username is', val);
            this.username = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (this.username == undefined) {
                this.route.navigate(['']);
            }
        });
    }
    viewPost(post) {
        console.log(post);
        this.storage.set("post", post);
        this.route.navigate(['/home/tabs/postView']);
    }
    viewUser(userId, email) {
        console.log(userId);
        console.log("user", userId);
        this.storage.set("user_id", userId);
        this.storage.set("userProfileEmail", email);
        this.route.navigate(['/home/tabs/profile']);
    }
    viewChat(id, first_name, last_name, username) {
        console.log(first_name, last_name, id);
        this.storage.set("receiverName", first_name);
        this.storage.set("receiverSName", last_name);
        this.storage.set("receiverUsername", username);
        this.storage.set("receiverID", id);
        this.route.navigate(['/home/tabs/messaging']);
    }
};
Tab3Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab3',
        templateUrl: 'tab3.page.html',
        styleUrls: ['tab3.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, AngularFireDatabase, StatusBar, Storage, Router])
], Tab3Page);
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map