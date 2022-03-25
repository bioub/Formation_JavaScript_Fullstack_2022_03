import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() selected!: string;

  @Output() selectedChange = new EventEmitter<string>();

  menuOpen = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.selected) {
      this.selected = this.items[0];
    }
  }

  onItemClick(item: string) {
    this.selected = item;
    this.menuOpen = false;

    this.selectedChange.emit(item);
  }

}
