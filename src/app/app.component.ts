import { Component } from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  image: any;
  imgUrl : string = '';
  url = '';
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService) {}
  facebooklogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      console.log(this.user);
    });
  }
  googlelogin() {
     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
       this.user = userData;
       console.log(this.user);
     });
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }

}
