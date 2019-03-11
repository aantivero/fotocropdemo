import { FotoService } from './../services/foto.service';
import { Component, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CropperComponent } from 'angular-cropperjs';
//import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  cropperOptions: any;
  croppedImage = null;
 
  myImage = null;
  scaleValX = 1;
  scaleValY = 1;
 
  constructor(public navCtrl: NavController, private camera: Camera) {
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 1,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    };
  }
 
  captureImage() {
    this.myImage = null;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
 
    this.camera.getPicture(options).then((imageData) => {
      this.myImage = 'data:image/jpeg;base64,' + imageData;
    });
  }
 
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
 
  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.croppedImage = croppedImgB64String;
  }
  /*@ViewChild('cropper', undefined)
  cropper:ImageCropperComponent;

  public cropperSettings;
  public croppedWidth: Number;
  public croppedHeight: Number;
  public data: any;
  public canSave: boolean = false;

  constructor(public navCtrl: NavController, private _FOTO: FotoService){
    this.cropperSettings = new CropperSettings();
    // Hide the default file input for image selection (we'll be
    // using the Camera plugin instead)
    this.cropperSettings.noFileInput = true;

    // Create a new cropped image object when the cropping tool
    // is resized
    this.cropperSettings.cropOnResize = true;

    // We want to convert the file type for a cropped image to a
    // JPEG format
    this.cropperSettings.fileType = 'image/jpeg';

    // We want to be able to adjust the size of the cropping tool
    // by dragging from any corner in any direction
    this.cropperSettings.keepAspect = false;

    // Create an object to store image related cropping data
    this.data = {};
  }

  handleCropping() {
    this.croppedHeight = 100;
    this.croppedWidth = 100;
    this.canSave = true;
  }

  selectImage() {
    this.canSave = false;
    this._FOTO.selectImage()
      .then((data: any) => {
        let image : any = new Image();
        image.src = data;
        this.cropper.setImage(image);
      }).catch((error: any) => {
        console.dir(error);
      });
  }

  saveImage() {
    console.dir(this.data.image);
  }

  /*currentImage:any;

  constructor(private camera:Camera){}


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }*/
}
