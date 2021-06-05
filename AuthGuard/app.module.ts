import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { InputparentComponent } from './components/inputparent/inputparent.component';
import { InputchildComponent } from './components/inputchild/inputchild.component';
import { ParentoutputComponent } from './components/parentoutput/parentoutput.component';
import { ChildoutputComponent } from './components/childoutput/childoutput.component';
import { ChildComponent } from './components/child/child.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputchildComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    UsersComponent,
    TemplatedrivenComponent,
    ReactiveformComponent,
    InputparentComponent,
    ParentoutputComponent,
    ChildoutputComponent,
    ChildComponent,
    ViewchildComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule ,
    HttpClientModule,
    FormsModule,
  
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
