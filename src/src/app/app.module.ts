import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {VideoPageComponent} from './app-body/videoPage/videoPage';
import {AppBodyComponent} from './app-body/app-body';
import {NavigationComponent} from './navigation/navigation';
import {HomePageComponent} from './app-body/homePage/homePage';
import {DokuPageComponent} from './app-body/dokuPage/dokuPage';
import {FotoPageComponent} from './app-body/fotoPage/fotoPage';
import {LogoPageComponent} from './app-body/logoPage/logoPage';

@NgModule({
  declarations: [
    AppBodyComponent,
    NavigationComponent,
    VideoPageComponent,
    HomePageComponent,
    DokuPageComponent,
    FotoPageComponent,
    LogoPageComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppBodyComponent],
})
export class AppModule { }
