import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RestaurantsModule } from './restaurants/restaurants.module';

const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      RestaurantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
