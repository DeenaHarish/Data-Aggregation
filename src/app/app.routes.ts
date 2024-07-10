import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SearchResultComponent } from './search-result/search-result.component';

export const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'result', component: SearchResultComponent },
];
