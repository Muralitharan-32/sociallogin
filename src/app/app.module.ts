import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
import { ImgUploadComponent } from './img-upload/img-upload.component';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('220223280003-fgl4qf036vq3irk5ovjc7sjjv1h0c7hs.apps.googleusercontent.com')
  },
  { 
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('169113560748055')
  }
] ,false);    

export function provideConfig()  {
  return CONFIG;
}
@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
 ],
  providers: [
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
