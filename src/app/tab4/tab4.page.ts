import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
import { AngularCropperjsComponent } from 'angular-cropperjs';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild('angularCropper',{static: false}) public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;
  myImage = null;
  scaleValX = 1;
  scaleValY = 1;
  constructor(private tabs: TabsPage,public loadingController: LoadingController,private statusBar: StatusBar,public actionSheetController: ActionSheetController,public toastController: ToastController, private requests: RequestsService,private storage: Storage,private route: Router  ) { 
    this.statusBar.overlaysWebView(true);
    this.tabs.bgColor = '#000000';
    //cropper options
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

  
 

  results: Observable<any>;
  Playlists: Observable<any>;
  displayLoading: boolean = false;
  profile_url =  'https://uploaded.herokuapp.com/users/users';



  cropImage(image){
    this.myImage = 'https://res.cloudinary.com/uploaded/image/upload/v1567818053/'+image+'.png';
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
 
  zoom(zoomIn: boolean) {
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


  downloadImage(data, filename = 'untitled.jpeg'){
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    this.storage.get("mail").then((user_email)=>{
      let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,data.substring(23));
       upload.subscribe(x => {
         this.cropImage(x);
          this.ionViewDidEnter();
          console.log(x)
          this.displayLoading = false;
        });
      });

    // document.body.appendChild(a);
    // a.click();
  }

  save() {
      let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
      this.croppedImage = croppedImgB64String;
      console.log(this.croppedImage);

      this.downloadImage(croppedImgB64String, 'my-canvas.jpeg');

      // this.storage.get("mail").then((user_email)=>{
      //   let upload = this.requests.UploadCroppedCoverImage(this.profile_url,user_email,croppedImgB64String);
      //   upload.subscribe(x => {
      //     this.cropImage(x);
      //      this.ionViewDidEnter();
      //      console.log(x)
      //      this.displayLoading = false;
        
      //   });


      // });
      



  }
  //

  
  changeIconColors(){
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
      let profile_url =  'https://uploaded.herokuapp.com/users/users';
      //profile_url = 'http://127.0.0.1:8000/users/users'
      if(val == undefined){
        this.route.navigate(['']);
      }else{
        this.results =  this.requests.getProfile(profile_url, val); 
        // this.results.subscribe(profile => {
        //   console.log("profile", profile);
        //   this.renderProfile(profile);
  
        // });
  
        this.Playlists = this.requests.getProfilePlaylists(profile_url, val); 
      }
    });
  }

  doRefresh(event){
    console.log(event);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.ionViewDidEnter();
    }, 2000);
  }

  Playlist(post_id){
    this.presentActionSheet(post_id);
  }

  viewPost(post_id){
    this.storage.set("post", post_id);
    this.route.navigate(['/home/tabs/postView']);

  }


  showSettings(){
    // $("#Settings").show();
    // $("#closeMenu").show();
    this.route.navigate(['/home/tabs/settings']);
  }

  closeMenu(){
    $("#Settings").hide();
    $("#closeMenu").hide();
  }

  editProfile(){
    $("#Settings").hide();
    $("#editProfile").show();
    $("#Profileoverlay").show();
    console.log($("#Profileoverlay").show());
    
  }

  closeProfile(){
    $("#Settings").hide();
    $("#editProfile").hide();
    $("#Profileoverlay").hide();
  }

  file: File;
  changeListener($event): void{
    this.file = $event.target.files[0];
    this.presentToast("File selected: "+ this.file.name);
    this.displayLoading = true;
    if(this.file == undefined){
      let message = "Please select file to upload";
      this.presentLoadingWithOptions(message)
      this.displayLoading = false;
    }else{
      this.storage.get("mail").then((user_email)=>{
        let upload = this.requests.UploadCoverImage(this.profile_url,user_email,this.file);
        this.presentLoadingWithOptions("Loading, please wait...");
        upload.subscribe(x => {
          //this.cropImage(x);
           this.route.navigate(['/home/tabs/tab4']);
           console.log(x)
           this.displayLoading = false;
        
        });
      });
    }


  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  updateProfile(){
    let user_name = $("#user_name").val();
    let first_name = $("#first_name").val();
    let last_name = $("#last_name").val();
    let bio = $("#bioInput").val();

    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    //var profile_url = 'http://127.0.0.1:8000/users/users'
    this.storage.get('mail').then((Email) =>{
      let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio,this.file); 

      update.subscribe(x => console.log(x) );
      this.closeProfile();
      this.ionViewDidEnter();
    });
  }


  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: 'Uploading '+message+', Please wait...',
      duration: 10000
    });
    await loading.present();

   // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }


  viewUserFeed(username){
    this.storage.set("uerFeedUsername", username);
    this.route.navigate(['/home/tabs/userfeed']);

  }



  //present share options
  async presentActionSheet(post_id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Post Actions',
      buttons: [ 
        {
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          console.log(post_id);
          let profile_url =  'https://uploaded.herokuapp.com/users/users';
          this.requests.deletePost(profile_url,post_id).subscribe();
          this.ionViewDidEnter();
          
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
    await actionSheet.present();
  }

    //loading component
    async presentLoadingWithOptions(Message) {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 1000,
        message: Message,
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }

}
