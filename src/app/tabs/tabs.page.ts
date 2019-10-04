import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  ionViewDidEnter() {
    // Put here the code you want to execute
    console.log('page has loaded');
    //check if user is signed in
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if(email == null && password == null){
      window.location.href = '';
    }else{
      console.log('User is signed in');
    }
    
  }


    //upload playlist
    upload(){
      console.log("uploaded");
      
      var fileUpload = (<HTMLInputElement>document.getElementsByClassName("native-input sc-ion-input-md")[0]).files[0];
      var email = JSON.parse(localStorage.getItem("email"));
      console.log(fileUpload)
      var message = fileUpload.name;
      $("#progressDiv").show();
      //this.presentLoading(message);
      var fd = new FormData();
      fd.append('upload', fileUpload);
      fd.append('type', "fileUpload");
      fd.append('email', email);
      //upload file
      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/users/users',
        dataType: 'json',
        data: fd,
        async: true,
        contentType:false,
        processData:false,
        success: function(data) {
          $("#progressDiv").hide();
          window.location.href = 'home/tabs/tab4';
        },
        
  
      });
  
    }

}
