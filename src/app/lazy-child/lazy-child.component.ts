import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.sass'],
})
export class LazyChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
