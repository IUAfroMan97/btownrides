import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { RidesComponent } from './rides/rides.component';


//import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
//import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

/* 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("525508065280-edbabo7oriv2a0f4t7lk9u99vkg2v0tr.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);
*/

const appRoutes: Routes = [
  {
    path: 'rides',
    component: RidesComponent,
    data: { title: 'Rides'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
    redirectTo: '/rides',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RidesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //SocialLoginModule.initialize(config),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
