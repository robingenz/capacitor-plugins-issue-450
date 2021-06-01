import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly platform: Platform) {
    this.init();
  }

  private async init(): Promise<void> {
    await this.platform.ready();
    await StatusBar.setStyle({ style: Style.Light });
  }
}
