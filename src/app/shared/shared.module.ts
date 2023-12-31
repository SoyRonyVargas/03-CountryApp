import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    CountriesComponent,
    SearchBoxComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
