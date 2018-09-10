import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { MenuComponent } from '../components/menu/menu.component';
import { DishdetailComponent } from '../components/dishdetail/dishdetail.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'dishdetail/:id', component: DishdetailComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
