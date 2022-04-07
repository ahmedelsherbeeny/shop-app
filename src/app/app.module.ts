import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPageComponent } from './sharedPages/nav-page/nav-page.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CangeDirective } from './cange.directive'
import { HttpClientModule } from '@angular/common/http';
import { YourcartComponent } from './pages/yourcart/yourcart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavPageComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    MenuComponent,
    OrderedItemComponent,
    CangeDirective,
    YourcartComponent,
    ProductCardComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
