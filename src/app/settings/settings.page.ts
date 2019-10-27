import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  displayLoading: boolean = false;
  Bottom: boolean = true;
  results: Observable<any>;
  places: Observable<any>;
  locations: Observable<any>;
  username: Observable<any>;
  website: Observable<any>;
  name: Observable<any>;
  bio: Observable<any>;

  constructor(private platform: Platform,private tabs: TabsPage,private statusBar: StatusBar,public toastController: ToastController,private storage: Storage,private requests: RequestsService,private route: Router,public loadingController: LoadingController ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.platform.backButton.subscribeWithPriority(0, ()=>{
      this.route.navigate(['/home/tabs/tab4'])
    });
  }

  ngOnInit() {
  }


  back(){
    this.route.navigate(['/home/tabs/tab4'])
  }


  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.storage.get('mail').then((val) => {
      let profile_url =  'https://uploaded.herokuapp.com/users/users';
      //profile_url = 'http://127.0.0.1:8000/users/users'
      if(val == undefined){
        this.route.navigate(['']);
      }else{
        this.results =  this.requests.getProfile(profile_url, val); 
        this.results.subscribe(x =>{
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


  location(){
    var input = this.locations;
    console.log(input);
    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    this.places = this.requests.getPlaces(profile_url,input);
    //this.places.subscribe();
  }

  SetLocation(description){
    console.log(description);
    $("#location").val(description);
    this.locations = description;
    this.places = null;
  }

  updateProfile(){
    let user_name = this.username;
    let first_name = this.name;
    let location = this.locations;
    let website = this.website;
    let bio = this.bio;
    console.log("username and first name ",user_name,first_name, location,bio,website);
    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    //var profile_url = 'http://127.0.0.1:8000/users/users'
    this.storage.get('mail').then((Email) =>{
      let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, website, bio,location,this.file); 

      update.subscribe(x => console.log(x) );
      this.ionViewDidEnter();
    });
  }

  logout(){
    this.storage.clear();
    this.ionViewDidEnter();
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: 'Updating '+message+', Please wait...',
      duration: 10000
    });
    await loading.present();

   // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
