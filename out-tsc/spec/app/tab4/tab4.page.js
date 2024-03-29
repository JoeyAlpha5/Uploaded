import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
// import { AngularCropperjsComponent } from 'angular-cropperjs';
let Tab4Page = class Tab4Page {
    // @ViewChild('angularCropper',{static: false}) public angularCropper: AngularCropperjsComponent;
    // cropperOptions: any;
    // croppedImage = null;
    // myImage = null;
    // scaleValX = 1;
    // scaleValY = 1;
    constructor(tabs, loadingController, statusBar, actionSheetController, toastController, requests, storage, route) {
        this.tabs = tabs;
        this.loadingController = loadingController;
        this.statusBar = statusBar;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.requests = requests;
        this.storage = storage;
        this.route = route;
        this.displayLoading = false;
        this.profile_url = 'https://uploaded.herokuapp.com/users/users';
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        //cropper options
        // this.cropperOptions = {
        //   dragMode: 'crop',
        //   aspectRatio: 3,
        //   autoCrop: true,
        //   movable: true,
        //   zoomable: false,
        //   scalable: false,
        //   autoCropArea: 1,
        // };
    }
    ngOnInit() {
    }
    // cropImage(image){
    //   this.myImage = 'https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+image+'.png';
    // }
    // //crop options
    // reset() {
    //   this.angularCropper.cropper.reset();
    // }
    // clear() {
    //   this.angularCropper.cropper.clear();
    // }
    // rotate() {
    //   this.angularCropper.cropper.rotate(90);
    // }
    // zoom(zoomIn: boolean) {
    //   let factor = zoomIn ? 0.1 : -0.1;
    //   this.angularCropper.cropper.zoom(factor);
    // }
    // scaleX() {
    //   this.scaleValX = this.scaleValX * -1;
    //   this.angularCropper.cropper.scaleX(this.scaleValX);
    // }
    // scaleY() {
    //   this.scaleValY = this.scaleValY * -1;
    //   this.angularCropper.cropper.scaleY(this.scaleValY);
    // }
    // move(x, y) {
    //   this.angularCropper.cropper.move(x, y);
    // }
    // downloadImage(data, filename = 'untitled.jpeg'){
    //   var a = document.createElement('a');
    //   a.href = data;
    //   a.download = filename;
    //   this.storage.get("mail").then((user_email)=>{
    //     let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,data.substring(23));
    //      upload.subscribe(x => {
    //        this.cropImage(x);
    //         this.ionViewDidEnter();
    //         console.log(x)
    //         this.displayLoading = false;
    //       });
    //     });
    //   // document.body.appendChild(a);
    //   // a.click();
    // }
    // save() {
    //     let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    //     this.croppedImage = croppedImgB64String;
    //     console.log(this.croppedImage);
    //     this.downloadImage(croppedImgB64String, 'my-canvas.jpeg');
    //     this.dataURLtoFile(croppedImgB64String, 'my-canvas.jpeg');
    // }
    // dataURLtoFile(dataurl, filename) {
    //   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //   while(n--){
    //       u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   let file  = new File([u8arr], filename, {type:mime});
    //   this.storage.get("mail").then((user_email)=>{
    //     let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,file);
    //     upload.subscribe(x => {
    //       this.cropImage(x);
    //        this.ionViewDidEnter();
    //        console.log(x)
    //        this.displayLoading = false;
    //        this.myImage = null;
    //     });
    //   });
    //   console.log(file);
    // }
    //
    changeIconColors() {
        this.tabs.tab1 = "white";
        this.tabs.tab2 = "white";
        this.tabs.tab3 = "white";
        this.tabs.tab4 = "white";
        this.tabs.tab5 = "#fc8700";
    }
    ionViewDidEnter() {
        // Put here the code you want to execute
        this.statusBar.overlaysWebView(true);
        this.tabs.bgColor = '#000000';
        this.changeIconColors();
        this.changeIconColors();
        this.tabs.bottom = true;
        this.storage.get('mail').then((val) => {
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            //profile_url = 'http://127.0.0.1:8000/users/users'
            if (val == undefined) {
                this.route.navigate(['']);
            }
            else {
                this.results = this.requests.getProfile(profile_url, val);
                // this.results.subscribe(profile => {
                //   console.log("profile", profile);
                //   this.renderProfile(profile);
                // });
                this.Playlists = this.requests.getProfilePlaylists(profile_url, val);
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
    Playlist(post_id) {
        this.presentActionSheet(post_id);
    }
    viewPost(post_id) {
        this.storage.set("post", post_id);
        this.route.navigate(['/home/tabs/postView']);
    }
    showSettings() {
        // $("#Settings").show();
        // $("#closeMenu").show();
        this.route.navigate(['/home/tabs/settings']);
    }
    closeMenu() {
        $("#Settings").hide();
        $("#closeMenu").hide();
    }
    editProfile() {
        $("#Settings").hide();
        $("#editProfile").show();
        $("#Profileoverlay").show();
        console.log($("#Profileoverlay").show());
    }
    closeProfile() {
        $("#Settings").hide();
        $("#editProfile").hide();
        $("#Profileoverlay").hide();
    }
    // file: File;
    // changeListener($event): void{
    //   this.file = $event.target.files[0];
    //   this.presentToast("File selected: "+ this.file.name);
    //   this.displayLoading = true;
    //   if(this.file == undefined){
    //     let message = "Please select file to upload";
    //     this.presentLoadingWithOptions(message)
    //     this.displayLoading = false;
    //   }else{
    //     this.storage.get("mail").then((user_email)=>{
    //       let upload = this.requests.UploadCoverImage(this.profile_url,user_email,this.file);
    //       this.presentLoadingWithOptions("Loading, please wait...");
    //       upload.subscribe(x => {
    //         this.cropImage(x);
    //          this.route.navigate(['/home/tabs/tab4']);
    //          console.log(x)
    //          this.displayLoading = false;
    //       });
    //     });
    //   }
    // }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    updateProfile() {
        let user_name = $("#user_name").val();
        let first_name = $("#first_name").val();
        let last_name = $("#last_name").val();
        let bio = $("#bioInput").val();
        var profile_url = 'https://uploaded.herokuapp.com/users/users';
        //var profile_url = 'http://127.0.0.1:8000/users/users'
        // this.storage.get('mail').then((Email) =>{
        //   let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio,this.file); 
        //   update.subscribe(x => console.log(x) );
        //   this.closeProfile();
        //   this.ionViewDidEnter();
        // });
    }
    presentLoading(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Uploading ' + message + ', Please wait...',
                duration: 10000
            });
            yield loading.present();
            // const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    viewUserFeed(username) {
        this.storage.set("uerFeedUsername", username);
        this.route.navigate(['/home/tabs/userfeed']);
    }
    notificationsPage() {
        this.route.navigate(['/home/tabs/notifications']);
    }
    //present share options
    presentActionSheet(post_id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Post Actions',
                buttons: [
                    {
                        text: 'Delete',
                        icon: 'trash',
                        handler: () => {
                            console.log(post_id);
                            let profile_url = 'https://uploaded.herokuapp.com/users/users';
                            this.requests.deletePost(profile_url, post_id).subscribe();
                            this.ionViewDidEnter();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
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
Tab4Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab4',
        templateUrl: './tab4.page.html',
        styleUrls: ['./tab4.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, LoadingController, StatusBar, ActionSheetController, ToastController, RequestsService, Storage, Router])
], Tab4Page);
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map