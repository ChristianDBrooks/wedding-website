import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';


const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'registry',
    component: RegistryPageComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
