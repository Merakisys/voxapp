import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.html',
  styleUrls: ['./busqueda.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BusquedaComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  @Output() searchChange = new EventEmitter<string>();
  @Output() searchFocus = new EventEmitter<void>();
  @Output() searchBlur = new EventEmitter<void>();

  searchTerm: string = '';

  constructor() { }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.searchChange.emit(this.searchTerm);
    console.log('Búsqueda:', this.searchTerm);
  }

  onFocus(): void {
    this.searchFocus.emit();
    const container = this.searchInput.nativeElement.parentElement;
    if (container) {
      container.style.borderBottomColor = '#4a90e2';
    }
  }

  onBlur(): void {
    this.searchBlur.emit();
    const container = this.searchInput.nativeElement.parentElement;
    if (container) {
      container.style.borderBottomColor = '#ccc';
    }
  }

  focusSearch(): void {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchChange.emit(this.searchTerm);
  }
}