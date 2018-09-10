import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import 'hammerjs';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

import { DishdetailComponent } from './components/dishdetail/dishdetail.component';

import { GreetingService } from './services/greeting.service';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,

    DishdetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    FlexLayoutModule,

    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,

    AppRoutingModule,
  ],
  providers: [GreetingService, DishService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
