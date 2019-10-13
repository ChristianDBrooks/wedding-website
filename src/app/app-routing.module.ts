import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'rsvp',
    component: RsvpPageComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
