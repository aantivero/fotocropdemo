import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public cameraImage: String;

  constructor(private _CAMERA: Camera) { }

  selectImage(): Promise<any>{
    return new Promise(resolve => {
      let cameraOptions: CameraOptions = {
        sourceType         : this._CAMERA.PictureSourceType.CAMERA,
        destinationType    : this._CAMERA.DestinationType.DATA_URL,
        mediaType          : this._CAMERA.MediaType.PICTURE,
        quality            : 100,
        targetWidth        : 320,
        targetHeight       : 240,
        encodingType       : this._CAMERA.EncodingType.JPEG,
        correctOrientation : true
      }
      this._CAMERA.getPicture(cameraOptions)
      .then((data) => {
        this.cameraImage = "data:image/jpeg;base64," + data;
        resolve(this.cameraImage);
      })
    });
  }
}
