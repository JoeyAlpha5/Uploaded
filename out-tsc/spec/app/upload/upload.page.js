import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
let UploadPage = class UploadPage {
    constructor(tabs, requests, toastController, statusBar, route, loadingController, storage) {
        this.tabs = tabs;
        this.requests = requests;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.route = route;
        this.loadingController = loadingController;
        this.storage = storage;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.displayLoading = false;
        this.addToPlaylist = false;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
    }
    ngOnInit() {
    }
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "#fc8700";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "white";
    }
    ionViewDidEnter() {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        // Put here the code you want to execute
        var Email = this.storage.get('mail').then((val) => {
            console.log('Your email is', val);
            this.email = val;
            var profile_url = 'https://uploaded.herokuapp.com/users/users';
            if (this.email == undefined) {
                this.route.navigate(['']);
            }
        });
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
    }
    addPlaylist($event) {
        console.log($event.target.checked);
        this.addToPlaylist = $event.target.checked;
        if (this.addToPlaylist == true) {
            this.presentToast("Upload will be made available on your profile");
        }
    }
    upload() {
        console.log("file ", this.file);
        console.log("Add to playlist ", this.addToPlaylist);
        console.log($("#Select").val());
        let genre = $("#Select").val();
        let video_name;
        let description = $("#uploadDescription").val();
        let message = "";
        if (this.file == undefined) {
            message = "Please select file to upload";
            this.presentLoadingWithOptions(message);
        }
        else if (description == undefined || description == "") {
            message = "Please provide a description for your upload";
            this.presentLoadingWithOptions(message);
        }
        else if (genre == "") {
            message = "Please select a genre for your upload";
            this.presentLoadingWithOptions(message);
        }
        else {
            var user_email = this.email;
            video_name = this.file.name;
            this.displayLoading = true;
            let upload = this.requests.Upload(this.profile_url, user_email, this.file, description, genre, this.addToPlaylist);
            this.presentLoadingWithOptions("Uploading, please wait...");
            upload.subscribe(x => {
                this.route.navigate(['/home/tabs/tab4']);
                console.log(x);
                this.displayLoading = false;
            });
        }
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    //loading component
    presentLoadingWithOptions(Message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 1000,
                message: Message,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
UploadPage = tslib_1.__decorate([
    Component({
        selector: 'app-upload',
        templateUrl: './upload.page.html',
        styleUrls: ['./upload.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, RequestsService, ToastController, StatusBar, Router, LoadingController, Storage])
], UploadPage);
export { UploadPage };
//# sourceMappingURL=upload.page.js.map