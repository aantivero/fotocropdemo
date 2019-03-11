import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { ImageCropperComponent } from "ngx-img-cropper";
import { AngularCropperjsModule} from 'angular-cropperjs';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularCropperjsModule, 
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]//, ImageCropperComponent]
})
export class HomePageModule {}
