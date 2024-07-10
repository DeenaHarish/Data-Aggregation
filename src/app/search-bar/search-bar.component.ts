import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm: string = '';
  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      setTimeout(() => {
        // document.getElementById('searchInput').focus();
      }, 500); // Adjust delay as needed for animation duration
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Handle search functionality here (e.g., call API, navigate to search results page)
    console.log('Search term:', this.searchTerm);
  }
}
