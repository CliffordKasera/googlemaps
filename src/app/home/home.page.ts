import { Component, OnInit } from '@angular/core';
import { GoogleMap, Environment, GoogleMaps } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map: GoogleMap;

  constructor(private platform: Platform) {
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyB73sL-1xGYLjDF0v1i2RSDrqDLjEmDdLI',
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyB73sL-1xGYLjDF0v1i2RSDrqDLjEmDdLI'
    });

    this.map = GoogleMaps.create('map_canvas');
  }

}
