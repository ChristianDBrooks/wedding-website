
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Added Modules
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Added Components
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryPageComponent,
    RsvpPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
