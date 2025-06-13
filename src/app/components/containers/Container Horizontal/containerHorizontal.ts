import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-container-horizontal',
  templateUrl: './containerHorizontal.html',
  styleUrls: ['./containerHorizontal.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContainerHorizontalComponent {
  @Input() isVisible: boolean = false;
  @Input() selectedSong?: {
    name: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    isSelected: boolean;
  };
  @Output() itemRemoved = new EventEmitter<string>();

  items: Item[] = [];

  removeItem(index: number) {
    const removedItem = this.items[index];
    this.items.splice(index, 1);
    // Solo actualizamos isVisible si no quedan elementos
    this.isVisible = this.items.length > 0;
    this.itemRemoved.emit(removedItem.subtitle);
  }

  ngOnChanges() {
    if (this.selectedSong) {
      if (this.selectedSong.isSelected) {
        const existingIndex = this.items.findIndex(item => 
          item.subtitle === this.selectedSong!.subtitle
        );
        
        if (existingIndex === -1) {
          this.items.push({...this.selectedSong});
          this.isVisible = true;
        }
      } else {
        this.items = this.items.filter(item => 
          item.subtitle !== this.selectedSong!.subtitle
        );
        // Solo actualizamos isVisible si no quedan elementos
        this.isVisible = this.items.length > 0;
      }
    }
  }
}