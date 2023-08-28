import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryService } from './services/country.service';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ByIdComponent } from './pages/by-id/by-id.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryTableComponent,
    ByIdComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  providers: [
    CountryService
  ]
})
export class CountriesModule { }
