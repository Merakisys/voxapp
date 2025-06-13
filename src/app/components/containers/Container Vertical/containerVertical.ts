import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cancionesPorTiempoYCanto } from './canciones.bd';

interface Item {
  name: string;
  imageUrl: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-container-vertical',
  templateUrl: './containerVertical.html',
  styleUrls: ['./containerVertical.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContainerVerticalComponent {
  @Input() title: string = 'Canciones Recomendadas';
  @Input() tiempoSeleccionado: string = 'Tiempo Ordinario';
  @Input() tipoCantoSeleccionado: string = 'Entrada';
  @Input() items: Item[] = [];
  @Output() itemToggled = new EventEmitter<{
    item: Item, 
    event: MouseEvent, 
    isSelected: boolean,
    cancion: {
      name: string,
      subtitle: string,
      description: string,
      imageUrl: string,
      isSelected: boolean
    }
  }>();

  ngOnInit() {
    this.loadCanciones();
  }

  ngOnChanges() {
    this.loadCanciones();
  }

  // Cambiar de private a public
  public loadCanciones(): void {
    if (this.tiempoSeleccionado && this.tipoCantoSeleccionado) {
      this.items = 
        (cancionesPorTiempoYCanto as any)[this.tiempoSeleccionado]?.[this.tipoCantoSeleccionado] ?? [];
      
      // Asegurarnos que todos los items están desmarcados
      this.items.forEach(item => {
        item.isSelected = false;
      });
    } else {
      this.items = [];
    }
  }

  toggleSelection(item: Item, event: MouseEvent) {
    item.isSelected = !item.isSelected;
    
    const cancion = {
      name: this.tipoCantoSeleccionado,
      subtitle: item.name,
      description: 'Lam, Rem, Sol, Do, Fa, Mi7',
      imageUrl: item.imageUrl,
      isSelected: item.isSelected
    };

    this.itemToggled.emit({
      item,
      event,
      isSelected: item.isSelected,
      cancion
    });
  }

  unselectItem(subtitle: string) {
    // Desmarcar el ítem en todas las categorías de cantos
    const tiempos = Object.keys(cancionesPorTiempoYCanto);
    tiempos.forEach(tiempo => {
      const categorias = Object.keys(cancionesPorTiempoYCanto[tiempo]);
      categorias.forEach(categoria => {
        const cancion = cancionesPorTiempoYCanto[tiempo][categoria].find(
          item => item.name === subtitle
        );
        if (cancion) {
          cancion.isSelected = false;
          this.itemToggled.emit({
            item: cancion,
            event: new MouseEvent('click'),
            isSelected: false,
            cancion: {
              name: categoria,
              subtitle: cancion.name,
              description: '',
              imageUrl: cancion.imageUrl,
              isSelected: false
            }
          });
        }
      });
    });
  }

  // Método público para reiniciar el estado
  public reset(): void {
    this.items = [];
    this.loadCanciones();
  }
}