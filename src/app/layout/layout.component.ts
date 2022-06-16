import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  disabled: boolean = false;

  panels = [
    { id: 'panel-1', title: 'Title 1', content: 'Content 1' },
    { id: 'panel-2', title: 'Title 2', content: 'Content 2' },
    { id: 'panel-3', title: 'Title 3', content: 'Content 3' },
    { id: 'panel-4', title: 'Title 4', content: 'Content 4' },
  ];

  constructor() {}

  ngOnInit(): void { }

  public onPanelChange(event: NgbPanelChangeEvent): void {
    console.log(event);
  }
}
