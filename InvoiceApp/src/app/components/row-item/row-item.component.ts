import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'tr[row-item]', //agregamos tr para que se muestre en una fila
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  @Input() item!: Item;

  @Output() removeEventEmitter: EventEmitter<number> =
    new EventEmitter<number>();

  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}


