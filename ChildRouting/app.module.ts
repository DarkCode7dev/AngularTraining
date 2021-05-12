import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NoidaComponent } from './components/noida/noida.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DelhiComponent } from './components/delhi/delhi.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NoidaComponent,
    GalleryComponent,
    DelhiComponent,
    ContactComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
