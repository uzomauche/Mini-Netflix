import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PreviewsComponent } from './previews/previews.component';
import { WatchComponent } from './watch/watch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes =  [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'get-started',
    component: LandingComponent,
    data: { title: 'Get Started with Mini NetFlix' }
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    data: { title: 'Sign-up here' }
  },
  {
    path: 'sign-in',
    component: SigninComponent,
    data: { title: 'Sign-in here' }
  },
  {
    path: 'Do forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Do forgot password' }
  },
  {
    path: 'reset-password ',
    component: ResetPasswordComponent,
    data: { title: 'Do reset password here' }
  },
  {
    path: 'previews ',
    component: PreviewsComponent,
    data: { title: 'previews' }
  },
  {
    path: 'watch ',
    component: WatchComponent,
    data: { title: 'watch' }
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
