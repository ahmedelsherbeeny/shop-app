import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"contact-Us",component:ContactUsComponent},
  {path:"about-Us",component:AboutUsComponent},
  {path:"ordered/:id",component:OrderedItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
