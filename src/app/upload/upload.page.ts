import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
// import { HTTP } from '@ionic-native/http/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

const STORAGE_KEY = "stored_videos";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  todayDate: any;
  Time: any;
  search_request: Observable<any[]>;
  Tags: any;
  progress: number = 0;
  downloadURL: Observable<string>;
  constructor(private cloud_storage: AngularFireStorage, private ref: ChangeDetectorRef,private plt: Platform,private actionSheetController: ActionSheetController,private filePath: FilePath,private webview: WebView,private camera: Camera, private file_: File,private http: HttpClient,private tabs: TabsPage,private requests: RequestsService,public toastController: ToastController,private statusBar: StatusBar,private route: Router, public loadingController: LoadingController,private storage: Storage,) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.todayDate = new Date().toISOString();
    this.Time = new Date().toISOString();
    this.Tags = "Tagged users: ";
  }

  ngOnInit() {
    // this.plt.ready().then(() => {
    //   this.loadStoredImages();
    // });
  }

  results: Observable<any>;
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  // profile_url =  'http://127.0.0.1:8000/users/users';
  email: any;
  displayLoading: boolean = false;
  videos_array = [];
  


  changeIconColors(){
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
      this.email= val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.email == undefined){
        this.route.navigate(['login']);
      }
    });
  }

  file: File;
  file_name:string;
  changeListener($event): void{
    this.file = $event.target.files[0];
    this.presentToast("File selected: "+ $event.target.files[0].name);
    this.file_name = $event.target.files[0].name;
    //get video length
    var myVideos = [];
    console.log($event.target.files[0]);

    // get video duration
    var x = <HTMLVideoElement>document.createElement("VIDEO");
    var URL = window.URL;
    var src = URL.createObjectURL( $event.target.files[0] );
    x.src = src;
    x.id = "createdVid";
    $("#videoToUpload").append(x);

  }

  /*loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.videos_array = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.videos_array.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

async selectVideo() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Video source",
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.getVideo(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}

getVideo(sourceType: PictureSourceType) {
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      mediaType: this.camera.MediaType.VIDEO,
      saveToPhotoAlbum: true,
      correctOrientation: true
  };
  

  this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          imagePath = 'file://'+imagePath;
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  });

}

createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".mp4";
    return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {

  //this.updateStoredImages(newFileName);
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}


updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.videos_array = [newEntry, ...this.videos_array];
      this.ref.detectChanges(); // trigger change detection cycle
  });
}


deleteImage(imgEntry, position) {
    this.videos_array.splice(position, 1);
 
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        let filtered = arr.filter(name => name != imgEntry.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
 
        this.file.removeFile(correctPath, imgEntry.name).then(res => {
            // this.presentToast('File removed.');
        });
    });
}


  pathForImage(vid) {
    if (vid === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(vid);
      return converted;
    }
  }


  startUpload(imgEntry,pos) {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file,imgEntry,pos))
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
}

readFile(file: any,imgEntry,pos) {
  const reader = new FileReader();
  reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
          type: file.type
      });
      formData.append('file', imgBlob, file.name);
      formData.append('type', 'upload');
      // //post attributes  
      let genre = JSON.stringify($("#Select").val());
      let video_name: any;
      let description = JSON.stringify($("#uploadDescription").val());
      let message = "";
      let selectedMonthDay = this.todayDate;
      let selectedTime = this.Time;
      let post_day = new Date(selectedMonthDay).getDate();
      let post_month = new Date(selectedMonthDay).getMonth();
      let selectedHours = new Date(selectedTime).getHours();
      let selectedMinutes = new Date(selectedTime).getMinutes();
      let publish_date = post_day+"/"+(post_month+1)+"/"+selectedHours+":"+selectedMinutes
      // //
      // formData.append('file', file);
      formData.append('type', 'upload');
      formData.append('email', this.email);
      formData.append('description', description);
      formData.append('genre', genre);
      formData.append('playlisted', JSON.stringify(this.addToPlaylist));
      formData.append('publish', publish_date);
      formData.append("tags", this.tagged_ids.toString());
      console.log("file ", imgBlob);
      console.log("file ", file);
      var x = <HTMLVideoElement>document.createElement("VIDEO");
      var URL = window.URL;
      // var src = URL.createObjectURL( file );
      x.src = file.localURL;
      x.id = "createdVid";
      $("#videoToUpload").append(x);
      // formData.append("duration", duration);

      this.uploadImageData(formData,imgEntry,pos);
  };
  reader.readAsArrayBuffer(file);
}


async uploadImageData(formData: FormData,imgEntry,pos) {
  const loading = await this.loadingController.create({
      message: 'Uploading...',
  });
  await loading.present();

  this.http.post('https://uploaded.herokuapp.com/users/users', formData)
      .pipe(
          finalize(() => {
              loading.dismiss();
          })
      )
      .subscribe(res => {
          if (res['newly created post_id']) {
              this.presentToast('File upload complete.')
              this.deleteImage(imgEntry,pos);
          } else {
              this.presentToast('File upload failed.')

          }
      });
}*/

  addToPlaylist: boolean = false;
  addPlaylist($event){
    console.log($event.target.checked);
    this.addToPlaylist = $event.target.checked;
    if(this.addToPlaylist == true){
      this.presentToast("Upload will be made available on your profile");
    }
    
  }

  video_duration; 
  async upload(){
    // console.log("file ", this.file);
    console.log("Add to playlist ", this.addToPlaylist);
    console.log($("#Select").val());
    let appended_vid = <HTMLVideoElement>document.getElementById("createdVid");
    this.video_duration = appended_vid.duration;
    console.log("video length is ", this.video_duration);

    let genre = $("#Select").val();
    let video_name: any;
    let description = $("#uploadDescription").val();
    let message = "";
    let selectedMonthDay = this.todayDate;
    let selectedTime = this.Time;

    let post_day = new Date(selectedMonthDay).getDate();
    let post_month = new Date(selectedMonthDay).getMonth();
    let selectedHours = new Date(selectedTime).getHours();
    let selectedMinutes = new Date(selectedTime).getMinutes();

    let publish_date = post_day+"/"+(post_month+1)+"/"+selectedHours+":"+selectedMinutes

    console.log(publish_date, selectedTime)

    if(this.file == undefined){
      message = "Please select file to upload";
      this.presentLoadingWithOptions(message)
    }else
     if (description == undefined || description == ""){
      message = "Please provide a description for your upload";
      this.presentLoadingWithOptions(message)
    }else if(genre == ""){
      message = "Please select a genre for your upload";
      this.presentLoadingWithOptions(message)
    }else{
      const task = this.cloud_storage.ref(this.file_name).put(this.file);
      var user_email = this.email;
      // video_name = this.file.name;
      // this.displayLoading = true;
      task.percentageChanges().subscribe(x=>{
        console.log("progress", x);
        this.progress = x;
      });
      console.log("progress", task.percentageChanges())
      const loading = await this.loadingController.create({
        message: 'Uploading...',
    });
    await loading.present();

      // this.http.post(this.profile_url,{file:this.file,duration:this.video_duration,tags:this.tagged_ids,publish:publish_date,type:"upload",email:user_email,description:description,genre:genre,playlisted:this.addToPlaylist},{}).then(x=>{
      //   console.log(x.headers);
      //   console.log(x.error);
      //   console.log(x.status);
      // })
      

      task.then((x)=>{
        console.log("File uploaded");
        console.log(x);
        let upload = this.requests.Upload(this.profile_url,user_email,this.file_name, description,genre,this.addToPlaylist,publish_date,this.tagged_ids, this.video_duration );
        this.Time = new Date().toISOString();
        upload.subscribe(x => {
          loading.dismiss();
           this.route.navigate(['/home/tabs/tab4']);
           console.log(x)
  
        }, error=>{
          loading.dismiss();
          this.presentLoadingWithOptions("Connection error.");
          console.log("error encountered");
        });
      });
      task.catch((x)=>{
        this.presentLoadingWithOptions("File upload error.");
        console.log(x);
      })

    
    }

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getUsers(){
    this.storage.get("mail").then(val=>{
      let input_text = $("#uploadTag").val();
      this.search_request = this.requests.getSearchResults(this.profile_url,input_text,val);
      this.search_request.subscribe(result=>{
        console.log(result);
        console.log(input_text);
      });
      
    });
  }

  tagged_users = [];
  tagged_ids = [];
  SetTag(id,first_name){
    if(this.tagged_users.includes(first_name) == false){
      if(this.Tags == "Tagged users: "){
        this.Tags =  this.Tags + first_name;
        this.tagged_users.push(first_name);
        this.tagged_ids.push(id);
      }else{
        this.Tags =  this.Tags + ","+first_name;
        this.tagged_users.push(first_name);
        this.tagged_ids.push(id);
      }
    }  
    
    console.log(first_name);
    console.log(this.tagged_users);
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
