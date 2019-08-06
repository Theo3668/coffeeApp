import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Desc1PageModule } from './page/desc1/desc1.module';
import { Desc2PageModule } from './page/desc2/desc2.module';
import { Desc3PageModule } from './page/desc3/desc3.module';
import { Desc4PageModule } from './page/desc4/desc4.module';
import { Desc5PageModule } from './page/desc5/desc5.module';
import { Desc6PageModule } from './page/desc6/desc6.module';
import { Desc7PageModule } from './page/desc7/desc7.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Desc1PageModule,Desc2PageModule,Desc3PageModule,Desc4PageModule,Desc5PageModule,Desc6PageModule,Desc7PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
