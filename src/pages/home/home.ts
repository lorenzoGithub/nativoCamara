import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public myPhoto:string=null;
   fotoTomada : boolean = false;

  constructor(public navCtrl: NavController,  public camera: Camera) {
  }
  
    
  

  hacerCaptura(){
    const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
    } 
    this.camera.getPicture(options).then(imageData => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      this.fotoTomada = true;
      console.log("datosFoto: "+this.myPhoto);
     }, (err) => {
       console.log("Error acceso camara: "+err)
      // Handle error
     });
    }
  }
