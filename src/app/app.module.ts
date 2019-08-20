
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// These were imported by me
import { HomePageComponent } from './home-page/home-page.component';
import { RegistryPageComponent } from './registry-page/registry-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistryPageComponent,
    GalleryPageComponent,
    RsvpPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
