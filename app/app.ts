import {Component} from '@angular/core';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GalleryPage} from './pages/gallery/gallery-page';
import {getProviders} from "./app-factory";

import {TRANSITION_IN_KEY, TRANSITION_OUT_KEY} from "./pages/viewer/photo-viewer-transition";

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: getProviders(),
})
export class MyApp {
  rootPage: any = GalleryPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, null, {
  photoViewerEnter: TRANSITION_IN_KEY,
  photoViewerLeave: TRANSITION_OUT_KEY,
  prodMode: true
})
