import { Component } from '@angular/core';
import { SearchByLocationComponent } from '../search-by-location/search-by-location.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [SearchByLocationComponent, HeaderComponent],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss',
})
export class DummyComponent {}
