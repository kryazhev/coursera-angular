import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

import { DishdetailComponent } from './components/dishdetail/dishdetail.component';

import { LoginComponent } from './components/login/login.component';

import { BaseURL } from './model/data';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,

    LoginComponent,

    DishdetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FlexLayoutModule,

    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,

    ReactiveFormsModule,
    FormsModule,

    AppRoutingModule,
  ],
  providers: [DishService, PromotionService, LeaderService, {provide: 'BaseURL', useValue: BaseURL}],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
