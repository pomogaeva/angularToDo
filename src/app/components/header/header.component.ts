import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() testHeaderTitle: string;
  @Output() headerText = new EventEmitter<string>();

  title = 'Angular 2Do';
  subTitle = 'Educational Angular project.';

  constructor() {
  }

  ngOnInit(): void {
  }

}

