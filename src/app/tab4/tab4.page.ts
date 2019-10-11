import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public loadingController: LoadingController,private statusBar: StatusBar,public actionSheetController: ActionSheetController,public toastController: ToastController, private requests: RequestsService,private storage: Storage,private route: Router  ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
  }

  
 

  results: Observable<any>;
  Playlists: Observable<any>;

  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
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

  Playlist(){
    this.presentActionSheet();
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



      //present share options
      async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
          header: 'Post Actions',
          buttons: [
            {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('Share');
            }
          }, {
            text: 'Delete',
            icon: 'trash',
            handler: () => {
              console.log('Delete');
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


}
