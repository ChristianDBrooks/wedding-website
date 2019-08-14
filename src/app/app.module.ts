import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistryPageComponent,
    GalleryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
