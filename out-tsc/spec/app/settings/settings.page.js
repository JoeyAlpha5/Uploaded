import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { Platform } from '@ionic/angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
let SettingsPage = class SettingsPage {
    constructor(platform, tabs, statusBar, toastController, storage, requests, route, loadingController) {
        this.platform = platform;
        this.tabs = tabs;
        this.statusBar = statusBar;
        this.toastController = toastController;
        this.storage = storage;
        this.requests = requests;
        this.route = route;
        this.loadingController = loadingController;
        this.displayLoading = false;
        this.Bottom = true;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.croppedImage = null;
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.route.navigate(['/home/tabs/tab4']);
        });
        this.cropperOptions = {
            dragMode: 'crop',
            aspectRatio: 3,
            autoCrop: true,
            movable: true,
            zoomable: false,
            scalable: false,
            autoCropArea: 1,
        };
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/home/tabs/tab4']);
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.statusBar.styleDefault();
        this.tabs.bgColor = '#000000';
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.results = this.requests.getProfile(profile_url, val);
                this.results.subscribe(x => {
                    console.log(x);
                    this.locations = x[0].location;
                    this.name = x[0].first_name;
                    this.website = x[0].website;
                    this.bio = x[0].bio;
                    this.username = x[0].username;
                });
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
            }
        });
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        this.presentToast("File selected: " + this.file.name);
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
    location() {
        var input = this.locations;
        console.log(input);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.places = this.requests.getPlaces(profile_url, input);
        //this.places.subscribe();
    }
    SetLocation(description) {
        console.log(description);
        $("#location").val(description);
        this.locations = description;
        this.places = null;
    }
    updateProfile() {
        let user_name = this.username;
        let first_name = this.name;
        let location = this.locations;
        let website = this.website;
        let bio = this.bio;
        console.log("username and first name ", user_name, first_name, location, bio, website);
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        this.storage.get('mail').then((Email) => {
            let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, website, bio, location, this.file);
            update.subscribe(x => console.log(x));
            this.ionViewDidEnter();
        });
    }
    logout() {
        this.storage.clear();
        this.ionViewDidEnter();
    }
    presentLoading(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Updating ' + message + ', Please wait...',
                duration: 10000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    changeImageListener($event) {
        this.fil = $event.target.files[0];
        this.presentTast("File selected: " + this.fil.name);
        this.displayLoading = true;
        if (this.fil == undefined) {
            let message = "Please select file to upload";
            this.presentLoading(message);
            this.displayLoading = false;
        }
        else {
            this.storage.get("mail").then((user_email) => {
                let upload = this.requests.UploadCoverImage(this.profile_url, user_email, this.fil);
                //this.presentLoading("Loading, please wait...");
                upload.subscribe(x => {
                    this.cropImage(x);
                    //  this.route.navigate(['/home/tabs/tab4']);
                    console.log(x);
                    this.displayLoading = false;
                });
            });
        }
    }
    presentTast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    //cropping
    cropImage(image) {
        this.myImage = 'https://res.cloudinary.com/uploaded/image/upload/v1567818053/' + image + '.png';
    }
    //crop options
    reset() {
        this.angularCropper.cropper.reset();
    }
    clear() {
        this.angularCropper.cropper.clear();
    }
    rotate() {
        this.angularCropper.cropper.rotate(90);
    }
    zoom(zoomIn) {
        let factor = zoomIn ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(factor);
    }
    scaleX() {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
    }
    scaleY() {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    }
    move(x, y) {
        this.angularCropper.cropper.move(x, y);
    }
    downloadImage(data, filename = 'untitled.jpeg') {
        var a = document.createElement('a');
        a.href = data;
        a.download = filename;
        this.storage.get("mail").then((user_email) => {
            let upload = this.requests.UploadCroppedCoverImage(this.profile_url, user_email, data.substring(23));
            upload.subscribe(x => {
                this.cropImage(x);
                this.ionViewDidEnter();
                console.log(x);
                this.displayLoading = false;
            });
        });
        // document.body.appendChild(a);
        // a.click();
    }
    save() {
        let croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        this.croppedImage = croppedImgB64String;
        console.log(this.croppedImage);
        this.downloadImage(croppedImgB64String, 'my-canvas.jpeg');
        this.dataURLtoFile(croppedImgB64String, 'my-canvas.jpeg');
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        let file = new File([u8arr], filename, { type: mime });
        this.storage.get("mail").then((user_email) => {
            let upload = this.requests.UploadCroppedCoverImage(this.profile_url, user_email, file);
            upload.subscribe(x => {
                this.cropImage(x);
                this.ionViewDidEnter();
                console.log(x);
                this.displayLoading = false;
                this.myImage = null;
            });
        });
        console.log(file);
    }
};
tslib_1.__decorate([
    ViewChild('angularCropper', { static: false }),
    tslib_1.__metadata("design:type", AngularCropperjsComponent)
], SettingsPage.prototype, "angularCropper", void 0);
SettingsPage = tslib_1.__decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.page.html',
        styleUrls: ['./settings.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, TabsPage, StatusBar, ToastController, Storage, RequestsService, Router, LoadingController])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map