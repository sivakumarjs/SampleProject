import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HomeComponent} from './Home/home.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'home', component: HomeComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/