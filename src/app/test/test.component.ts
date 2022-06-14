import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input()
  helloFn?: Function;

  name = 'omar';
  constructor() {}

  ngOnInit() {
    console.log('fn', this.helloFn);
    this.helloFn && this.helloFn();
  }
}
