import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { InputparentComponent } from './components/inputparent/inputparent.component';
import { ParentoutputComponent } from './components/parentoutput/parentoutput.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { UsersComponent } from './components/users/users.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'posts',component:PostsComponent,canActivate:[AuthGuard]},
  {path:'tdriven',component:TemplatedrivenComponent},
  {path:'reactive',component:ReactiveformComponent},
  {path:'inputdecorator',component:InputparentComponent},
  {path:'outputdecorator',component:ParentoutputComponent},
  {path:'viewchild',component:ViewchildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
